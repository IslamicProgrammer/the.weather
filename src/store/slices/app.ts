import { createSlice } from '@reduxjs/toolkit';

type App = {
  loading: boolean;
};

const initialState: App = {
  loading: true
};

/**
 * Actions and Reducers
 */
const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
});

export {};
// export const {} = authSlice.actions;
export default authSlice.reducer;
