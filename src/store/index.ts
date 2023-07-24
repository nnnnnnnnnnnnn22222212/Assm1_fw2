import thunk from "redux-thunk";
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productReducer } from "../reducer/Products";
const checks = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const enhacer = checks(
    applyMiddleware(thunk)
)

const sumReducers = combineReducers({
    products: productReducer
})
const store = createStore(sumReducers, enhacer)
export default store