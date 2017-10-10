import React from 'react';
import Input from './Input';
import Button from './Button';
import PropTypes from 'prop-types';

class FormNewTask extends React.Component {

	static PropTypes = {
		onAdd: PropTypes.func.isRequired,
	}
	
	constructor() {
		super();
		this.state = {
			'task': '',
		}
		this._handleChange = this._handleChange.bind(this);
		this._handleAdd = this._handleAdd.bind(this);
	}

	_handleChange(value) {
		this.setState({task: value});
	}

	_handleAdd() {
		this.props.onAdd(this.state.task);
		this.setState({task: ''});
	}

	shouldComponentUpdate(nextProps, nextStates) {
		if(this.state.task === nextStates.task)
			return false;
		return true;
	}

	render() {
		return (
			<div>
				<Input value={this.state.task} onChange={this._handleChange} />
				<Button label="Add" action={this._handleAdd}/>
			</div>
		);

	}
}

export default FormNewTask;