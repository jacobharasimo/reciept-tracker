import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Oops } from '../../containers/oops';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: error };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (!hasError) {
      return children;
    }
    // This will only show the errorBoundary when in development mode
    if (process.env.NODE_ENV === 'development') {
      return (
        <>
          <h1>Something went wrong</h1>
          <Box as="code" color="errorRed" sx={{ whiteSpace: 'pre' }}>
            {hasError.stack}
          </Box>
        </>
      );
    }
    return <Oops />;
  }
}

ErrorBoundary.displayName = 'ErrorBoundary';
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
ErrorBoundary.defaultProps = {
  children: null,
};
