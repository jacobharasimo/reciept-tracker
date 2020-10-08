import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {
  variants: {
    container: {
      mx: 'auto',
      width: '1170px',
      maxWidth: '1170px',
    },
  },
};
const theme = merge(baseTheme, customTheme);

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.info('theme: ', theme);
}
export default theme;
