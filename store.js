import { configureStore } from '@reduxjs/toolkit';
import authSlice from './src/redux/slice/authSlice';
export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
