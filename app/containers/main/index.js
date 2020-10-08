/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar) and layout
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Flex, Box, Text } from 'rebass';
import HomePage from '../homePage';
import { ErrorBoundary } from '../../components/errorBoundary';
import { Oops } from '../oops';

function Main() {
  return (
    <>
      <Helmet
        titleTemplate="React Seed | %s"
        defaultTitle="React Seed"
        meta={[
          {
            name: 'description',
            content: 'React Seed application',
          },
        ]}
      />
      <Flex flexDirection="column" height="100%">
        <Text as="h1">Expense Tracker</Text>
        <ErrorBoundary>
          <Box flex="1 1 auto" sx={{ overflowY: 'auto' }} position="relative">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/404" component={Oops} />
            </Switch>
          </Box>
        </ErrorBoundary>
      </Flex>
    </>
  );
}

Main.displayName = 'Main';

export default Main;
