import { combineReducers, createStore } from 'redux';
import numberReducer from './components/reducers/product-reducer';
import paymentReducer from './components/reducers/paymentReducers'

const root = combineReducers({
    value: numberReducer,
    payment: paymentReducer
})

const store = createStore(root)

export default store;