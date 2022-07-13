import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducers'



const store = configureStore({
    reducer: { productList: productListReducer },
    preloadedState: {},
    devTools: process.env.NODE_ENV !== 'production',
})

export default store