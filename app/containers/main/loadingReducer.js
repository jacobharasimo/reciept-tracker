/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

const initialState = {};
/* eslint-disable default-case, no-param-reassign */
const loadingReducer = produce((draft, action) => {
  if (action) {
    const { type } = action;
    const matches = /(LOAD|LOADED|ERROR)_(.*)/.exec(type);

    // not a LOAD_* / LOADED_* /  ERROR_* actions, so we ignore them
    if (matches) {
      const [, requestState, requestName] = matches;
      const stateName = requestName
        .split('_')
        .map((word, index) => {
          let w = word.toLowerCase();
          if (index > 0) {
            w = w.charAt(0).toUpperCase() + w.slice(1);
          }
          return w;
        })
        .join('');

      draft[stateName] = requestState === 'LOAD';
    }
  }
  return draft;
}, initialState);

export default loadingReducer;
