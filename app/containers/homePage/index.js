/*
 * HomePage
 *
 * This is the first thing users see of our homePage, at the '/' route
 */

import React, { useEffect } from 'react';
import { compose } from 'redux';
import { Flex, Box, Card } from 'rebass';

import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { ExpenseList } from '../../components/expenseList';
import { Expense } from '../../components/expense';
import { addExpenseItem, loadExchangeRates } from './actions';
import {
  makeSelectCanAddExpense,
  makeSelectExchangeRates,
  makeSelectExpenses, makeSelectTotalExpense,
} from './selectors';

const key = 'home';

const HomePage = () => {
  const expenses = useSelector(makeSelectExpenses);
  const canAddExpense = useSelector(makeSelectCanAddExpense);
  const exchangeRates = useSelector(makeSelectExchangeRates);
  const totalExpense = useSelector(makeSelectTotalExpense);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadExchangeRates());
  }, []);

  const addExpense = (values, { resetForm }) => {
    // todo: check to see if the item you are adding will but the total over limit and prevent and show
    // unique error message in this case
    dispatch(addExpenseItem({ expense: values }));
    resetForm();
  };
  return (
    <Flex flexDirection="column">
      <Box variant="container">
        <Flex flexDirection="column">
          {!canAddExpense && (
            <Box py={4} px={2} mb={2} bg="#f8d7da" color="#721c24">
              You have spent to much money, no more expense allowed
            </Box>
          )}
          <Card>
            <Expense
              exchangeRates={exchangeRates}
              canAddExpense={canAddExpense}
              onSubmit={addExpense}
            />
          </Card>
          <Box>
            <ExpenseList list={expenses} />
          </Box>
          <Box mt={4}>
            <strong>Total: ${totalExpense} CAD</strong>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default compose(HomePage);
