import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
export default configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
})
