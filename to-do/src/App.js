import React from 'react';
import PubSub from 'pubsub-js';
import Axios from 'axios';
import Input from './Input';
import StyledComponent from 'styled-components';
import FormNewTaskContainer from './redux/containers/FormNewTaskContainer';
import ListTasksContainer from './redux/containers/ListTasksContainer';



const ContainerStyled = StyledComponent.div`
	background-color: purple;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;




class App extends React.Component {

	render() {
		return (
			<ContainerStyled>
				<h1> To Do </h1>
				 {/*Filtro: <Input onChange={this._handleFilter/>*/}
				<FormNewTaskContainer />
				<ListTasksContainer /> 
			</ContainerStyled>
		);
	}
}

export default App;


/*	constructor() {
		super();
		this.state = {
			'tasks': [],
			'tasks_filtered': [],
			'value_filter': '',
		}
		this._handleDelete = this._handleDelete.bind(this);
		this._handleAdd = this._handleAdd.bind(this);
		this._handleFilter = this._handleFilter.bind(this);
		PubSub.subscribe("DELETE", this._handleDelete);
		PubSub.subscribe("ADD", this._handleAdd);
	}

	componentDidMount() {
		Axios.get("http://4d295c33.ngrok.io/api/tasks")
			.then(function(response) {
				this.setState({tasks: response.data.results, tasks_filtered: response.data.results});
			}.bind(this));
	}

	_handleDelete(msg, id) {
		Axios.delete("http://62e1ee3d.ngrok.io/api/task" + id)
			.then(function() {
					let tasks = this.state.tasks.filter(function(item) {
						return item.id !== id
					});
					this.setState({tasks: tasks});
					this._handleFilter(this.state.value_filter); // TODO :(
				}.bind(this));
	}

	_handleAdd(msg, new_task) {
		Axios.post("http://62e1ee3d.ngrok.io/api/task", {
			label: new_task
		}).then(function(response) {
			let tasks = this.state.tasks.slice();
			tasks.push(response.data.result);
			this.setState({tasks: tasks});
			this._handleFilter(this.state.value_filter); // TODO :(
		}.bind(this));
	}

	_handleFilter(value) {
		let tasks_filtered = this.state.tasks.filter(function(item) {
			return item.label.includes(value);
		});
		this.setState({tasks_filtered: tasks_filtered, value_filter: value});
	}
*/
