/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import { addExpenseItem, loadedExchangeRates } from './actions';

// The initial state of the Main
export const initialState = {
  expenses: [],
  exchangeRates: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = handleActions(
  {
    [addExpenseItem]: produce((draft, action) => {
      draft.expenses.push(action.payload.expense);
      return draft;
    }),
    [loadedExchangeRates]: produce((draft, action) => {
      const ratesArray = [];
      for (const [key, value] of Object.entries(action.payload.exchangeRates)) {
        const item = { country: key, exchangeRate: value };
        ratesArray.push(item);
      }
      draft.exchangeRates = ratesArray;
      return draft;
    }),
  },
  initialState,
);

export default homeReducer;
