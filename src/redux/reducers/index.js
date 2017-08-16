import {combineReducers} from 'redux';
import {toDoReducer} from './toDoReducer'

export const reducer = combineReducers({
	tasks: toDoReducer,  /*o state vem daqui - ou seja, o que é passado para a store*/
});