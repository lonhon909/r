import { createStore, combineReducers } from 'redux';
import { addTodo, filterTxt } from './action'

const store = createStore(combineReducers())

export default store;
