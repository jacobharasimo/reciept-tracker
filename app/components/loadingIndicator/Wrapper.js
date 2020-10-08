import { Box } from 'rebass';
import React from 'react';
import PropTypes from 'prop-types';

export const Wrapper = ({ children }) => (
  <Box m="2em auto" width="40px" height="40px" position="relative">
    {children}
  </Box>
);
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
