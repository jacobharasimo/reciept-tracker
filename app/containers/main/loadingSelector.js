import { createSelector } from 'reselect';
import { initialState } from './reducer';

const loadingSelector = state => state.loading || initialState;

export const makeSelectIsLoading = loader =>
  createSelector(
    loadingSelector,
    state => !!state[loader],
  );
