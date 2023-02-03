import { combineReducers } from '@reduxjs/toolkit';

/** reducers */
import app from './app';

/** Main reducer function */
export default combineReducers({ app });

/** Export selectors and action functions */
// export * from './app';
