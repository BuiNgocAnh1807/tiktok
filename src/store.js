
import { createStore } from '@reduxjs/toolkit'
import rootReducer from './Pages/index'
const store = createStore (
    rootReducer
);
export default store;