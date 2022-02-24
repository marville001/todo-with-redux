
import {createStore, combineReducers, applyMiddleware} from 'redux'
import productsReducer from './reducers/productsReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import todosReducer from './reducers/todosReducer'

const rootReducer = combineReducers({
    productsState: productsReducer,
    todosState: todosReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;