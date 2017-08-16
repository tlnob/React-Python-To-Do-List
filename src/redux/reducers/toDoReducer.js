import {ADD_TASK, DELETE_TASK, SET_TASK, FILTER_TASK, CHECKED_TASK} from '../constants';

export const toDoReducer = (state={innerTasks:[], tasks_filtered:[]},action) => {

	switch(action.type) {
		case ADD_TASK:
			let taskConcat = state.innerTasks.concat(action.task);
			action.task.isCompleted = false;
			return {
				innerTasks: taskConcat,
				tasks_filtered: taskConcat,
			};
		case SET_TASK:
			let taskSetTask = state.innerTasks.concat(action.tasks);
			return {
				innerTasks: taskSetTask,
				tasks_filtered: taskSetTask,
			};
		case DELETE_TASK:
			let deleteTask = state.innerTasks.filter(function(item) {
				console.log(action);
				return action.task !== item;
			});
			return {
				innerTasks: deleteTask,
				tasks_filtered: deleteTask,
			}
		case FILTER_TASK:
			let filterTask = state.innerTasks.filter(function(value){
				console.log("Filter: ", action);
				return value.label.includes(action.task);
			});
			 return {
				 innerTasks: state.innerTasks,
				 tasks_filtered: filterTask,
			 }
		case CHECKED_TASK:
			let checkTask = state.innerTasks.filter(function(value){
					action.task.isCompleted = true;
					return value.id === action.task.id;
				});
				return {
					innerTasks: state.innerTasks,
					tasks_filtered: state.innerTasks,
				}
		default:
				console.log(action);
				return state;
	}
}
