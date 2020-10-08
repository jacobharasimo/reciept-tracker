/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { createActions } from 'redux-actions';

export const {
  loadExchangeRates,
  loadedExchangeRates,
  errorExchangeRates,
} = createActions(
  'LOAD_EXCHANGE_RATES',
  'LOADED_EXCHANGE_RATES',
  'ERROR_EXCHANGE_RATES',
);

export const { addExpenseItem } = createActions(
  'ADD_EXPENSE_ITEM',
);
