import { takeLatest, put, call } from 'redux-saga/effects';
import {
  loadExchangeRates,
  loadedExchangeRates,
  errorExchangeRates,
} from './actions';
import request from '../../utils/request';

/**
 * Root saga manages watcher lifecycle
 */

function* loadDeviceEvent() {
  try {
    const requestUrl = 'https://api.exchangeratesapi.io/latest?base=CAD';
    const exchangeRates = yield call(request, requestUrl);
    yield put(loadedExchangeRates({ exchangeRates: exchangeRates.rates}));
  } catch (err) {
    yield put(errorExchangeRates(err));
  }
}

export default function* LoadhomeSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loadExchangeRates().type, loadDeviceEvent);
}
