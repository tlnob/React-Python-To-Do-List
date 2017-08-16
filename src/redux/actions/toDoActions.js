import {ADD_TASK, SET_TASK, DELETE_TASK, FILTER_TASK, CHECKED_TASK} from '../constants';

import axios from 'axios';

const addTask = (task) => {
	return {
		type: ADD_TASK,
		task, // = task: task
	}
}

export const insertTask = (task) => {
	return (dispatch) => {
		axios.post('http://127.0.0.1:5000/api/task',task)
			.then((response) => {
				console.log(response);
				dispatch(addTask(response.data.result));
			})
			.catch((error) => {
				console.log(error);
			})
	}
}

const deleteTask = (task) => {
	return {
		type: DELETE_TASK,
		task,
	}
}

export const deleteTaskReq = (task) => {
	return(dispatch) => {
		axios.delete('http://127.0.0.1:5000/api/task/'+task.id)
			.then((response) => {
				console.log("response-",response);
				dispatch(deleteTask(task)); //response.data.result
			})
			.catch((error) => {
				console.log("erro de delete: ", error);
			})
	}
}

const setTasks = (tasks) => {
	return {
		type: SET_TASK,
		tasks,
	}
}

export const fetchTask = (task) => {
	return (dispatch) => {
		axios.get('http://127.0.0.1:5000/api/tasks')
			.then((response) => {
				dispatch(setTasks(response.data.results));
			})
			.catch((error) => {
				console.log("fetch: ", error);
			})
	}
}

const filterTasks = (task) => {
	return {
		type: FILTER_TASK,
		task,
	}
}

export const filterTask = (task) => {
	return (dispatch) => {
		dispatch(filterTasks(task));
		}
	}

const checkTasks = (task) => {
	return {
		type: CHECKED_TASK,
		task,
	}
}

export const checkedTasks = (task) => {
	return (dispatch) => {
		dispatch(checkTasks(task));
	}
}
