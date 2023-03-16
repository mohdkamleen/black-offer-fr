import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice/data' 

const store = configureStore({
  reducer : {
    data: dataReducer, 
  }
})

export default store