import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'


import todosReducer from './reducers/todosReducer'
import usersReducer from './reducers/usersReducer';


const rootReducer = combineReducers({
    todosState: todosReducer,
    usersState: usersReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store;