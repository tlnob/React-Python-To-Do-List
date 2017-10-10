import {ADD_TASK, DELETE_TASK, SET_TASK} from '../constants';

export const toDoReducer = (state=[],action) => {
	switch(action.type) {
		case ADD_TASK:
			return [
				...state,
				action.tasks,
			];
		case SET_TASK:
			return [
				...state,
				...action.tasks,
			];
		case DELETE_TASK:
			console.log(action);
			return state.filter(function(item) {
				return action.task !== item;
			}); 
			default:
				console.log(action);
				return state;
	}
}