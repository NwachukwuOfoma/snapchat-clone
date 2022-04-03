import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice( {
  name:'app',
  initialState: {
  value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const { incrementByAmount } = counterSlice.actions;

export const selectapp = state => state.app.value;

export default appSlice.reducer;
