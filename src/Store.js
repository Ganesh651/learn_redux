import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});


export const store = configureStore({
  reducer: counterSlice.reducer,
});


store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement());


