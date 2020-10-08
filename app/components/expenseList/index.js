import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Card } from 'rebass';

export const ExpenseList = ({ list }) => (
  <Flex as="ul" mt={4} flexDirection="column">
    {list &&
      list.map(item => (
        <Box as="li" width={1}>
          <Card width={1}>
            <Flex width={1}>
              <Box width={1 / 4}>Amount: {item.amount}</Box>
              <Box width={1 / 4}>Description: {item.description}</Box>
              <Box width={1 / 4}> Currency: {item.currency}</Box>
              <Box width={1 / 4}> Currency Type: {item.currencyCountry}</Box>
            </Flex>
          </Card>
        </Box>
      ))}
  </Flex>
);

ExpenseList.propTypes = {
  list: PropTypes.array.isRequired,
};
