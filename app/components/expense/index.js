import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label } from '@rebass/forms';
import * as Yup from 'yup';

export const Expense = ({ onSubmit, exchangeRates, canAddExpense }) => {
  const Schema = Yup.object().shape({
    description: Yup.string().required('Required'),
    amount: Yup.string()
      .required('Required')
      .matches(/\d+/g, 'Numbers Only'),
    exchangeRate: Yup.string().required('Required'),
  });
  const initValues = {
    description: '',
    amount: '',
    exchangeRate: '',
    currencyCountry: '',
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, handleSubmit, errors, values }) => (
        <Flex as={Form} onSubmit={handleSubmit} flexDirection="column">
          <Box width={1 / 2}>
            <Label htmlFor="description">Description</Label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="description"
            />
            <ErrorMessage name="description" />
          </Box>
          <Box>
            <Label htmlFor="amount">Amount</Label>
            <Field
              type="phone"
              id="amount"
              name="amount"
              placeholder="amount"
            />
            <ErrorMessage name="amount" />
          </Box>
          <Box>
            <Label htmlFor="exchangeRate">Currency</Label>
            <Field
              as="select"
              id="exchangeRate"
              name="exchangeRate"
              onChange={e => {
                e.preventDefault();
                const selectedRate = exchangeRates[e.target.selectedIndex - 1];
                setFieldValue('exchangeRate', selectedRate.exchangeRate);
                setFieldValue('currencyCountry', selectedRate.country);
              }}
            >
              <option>Please Select</option>
              {exchangeRates.map(rate => (
                <option value={rate.exchangeRate}>{rate.country}</option>
              ))}
            </Field>

            <ErrorMessage name="exchangeRate" />
          </Box>
          <Box>
            <Button
              variant={canAddExpense ? 'primary' : 'outline'}
              disabled={!canAddExpense}
              type="submit"
            >
              Add Expense
            </Button>
          </Box>
        </Flex>
      )}
    </Formik>
  );
};

Expense.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  exchangeRates: PropTypes.array.isRequired,
  canAddExpense: PropTypes.bool.isRequired,
};
