/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomepage = state => {
  if (state && state.home) {
    return state.home;
  }
  return initialState;
};

export const makeSelectExpenses = createSelector(
  selectHomepage,
  state => state.expenses,
);

export const makeSelectExchangeRates = createSelector(
  selectHomepage,
  state => state.exchangeRates,
);

export const makeSelectTotalExpense = createSelector(selectHomepage, state => {
  let total = 0;
  for (let i = 0; i < state.expenses.length; i += 1) {
    total +=
      parseFloat(state.expenses[i].amount) *
      parseFloat((1 / state.expenses[i].exchangeRate));
  }
  return total.toFixed(2);
});

export const makeSelectCanAddExpense = createSelector(
  selectHomepage,
  makeSelectTotalExpense,
  (state, total) => {
    // max 5 reciepts
    if (state.expenses.length > 4) {
      return false;
    }
    // max of 1000 dollars spent
    if (total >= 1000) {
      return false;
    }
    return true;
  },
);
