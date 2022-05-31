import { configureStore } from '@reduxjs/toolkit';
import list from './reducer';

export default configureStore({
  reducer: {
    web: list,
  },
})