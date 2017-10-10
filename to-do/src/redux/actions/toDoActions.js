import {ADD_TASK, SET_TASK} from '../constants';
import {DELETE_TASK} from '../constants';

import axios from 'axios';

const addTask = (task) => {
	return {
		type: ADD_TASK,
		task, // = task = task
	}
}

export const insertTask = (task) => {
	return (dispatch) => {
		axios.post('http://127.0.0.1:5000/api/task', task)
			.then((response) => {
				dispatch(addTask(response.data.result));
			})
			.catch((error) => {
				console.log(error);
			})
	}
}

export const deleteTask = (task) => {
	return {
		type: DELETE_TASK,
		task,
	}
}

export const deleteTaskReq = (task) => {
	return(dispatch) => {
		axios.delete('http://127.0.0.1:5000/api/task/'+task.id)
			.then((response) => {
				dispatch(deleteTask(response.data.result));
			})
			.catch((error) => {
				console.log("delete: ", error);
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



