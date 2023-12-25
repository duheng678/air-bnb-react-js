import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
export default configureStore({
  reducer: {
    home: homeReducer,
  },
})
