import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #app {
        height: 100%;
        line-height: 1;
      }
      body {
        overflow: hidden;
      }
      #app {
      }
    `}
  />
);

export default GlobalStyle;
