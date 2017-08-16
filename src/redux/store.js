import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer} from './reducers';

const myMiddleware = (store) => (next) => (action) => {
	console.log('middleware', action);
	next(action);
}

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);


export const store = createStore(reducer, {
	tasks: {
		innerTasks: [
			],
		tasks_filtered: [
			],
}
}, middleware);
