import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Checkbox from './Checkbox';
import StyledComponent from 'styled-components';

const ContainerStyled = StyledComponent.div`
	{props => (this.props.task.isCompleted? text-decoration: line-through)}
`;



class ContainerTask extends React.Component {


	constructor() {
		super();
		this._handleDelete = this._handleDelete.bind(this);
	//	this._handleCompleted = this._handleCompleted.bind(this);
	//	this._handleCheck = this._handleCheck.bind(this);
	}

	_handleDelete() {
		this.props.onDelete(this.props.task);
	}

	_handleFilter() {
	}

	_handleCheck(){
		this.props.onChecked(this.props.task);
		this.props.task.isCompleted = true;
		console.log("taskProps",this.props.task);
	}

	render() {
		return (
			<div>
				<ContainerStyled> {this.props.task.label}
				 </ContainerStyled>
				<Button label="Edit" action={this._handleFilter} />
				<Button label="Delete" action={this._handleDelete} />
				<Checkbox label="Check" action={this._handleCheck.bind(this)} />
			</div>
		);
	}
}

ContainerTask.propTypes = {
	'task': PropTypes.shape({
													'id': PropTypes.number,
													'label': PropTypes.string,
													'isCompleted': PropTypes.bool,
													}).isRequired,
}

export default ContainerTask;
