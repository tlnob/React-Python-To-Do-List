import React from 'react';
import Input from './Input';
import InputSearch from './InputSearch';
import Button from './Button';
import PropTypes from 'prop-types';

class FormNewTask extends React.Component {

	static PropTypes = {
		onAdd: PropTypes.func.isRequired,
		onFilter: PropTypes.func.isRequired,
	}

	constructor() {
		super();
		this.state = {
			'task': '',
			'tasks_filtered': '',
			'checked_tasks': '',
		}
		this._handleChange = this._handleChange.bind(this);
		this._handleAdd = this._handleAdd.bind(this);
		this._handleChangeSearch = this._handleChangeSearch.bind(this);
	//	this._handleFilter = this._handleFilter.bind(this);
	}

	_handleChange(value) {
		this.setState({task: value});
	}

	_handleAdd() {
		this.props.onAdd(this.state.task);
		this.setState({task: ''});
	}

	_handleChangeSearch(value) {
		this.props.onFilter(value);
		this.setState({tasks_filtered: value});
	}

	render() {
		return (
			<div>
				<InputSearch value={this.state.tasks_filtered} onChange={this._handleChangeSearch} />Filter <br/> <br/>
				<Input value={this.state.task} onChange={this._handleChange} />
				<Button label="Add" action={this._handleAdd}/>
			</div>
		);

	}
}

export default FormNewTask;
