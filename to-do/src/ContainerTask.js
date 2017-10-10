import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ContainerTask extends React.Component {
	
	constructor() {
		super();
		this._handleDelete = this._handleDelete.bind(this);
	}

	_handleDelete() {
		this.props.onDelete(this.props.task);
	//	PubSub.publish("DELETE", this.props.task.id);
	}

	render() {
		return (
			<div>
				{this.props.task.label}
				<Button label="Edit" />
				<Button label="Delete" action={this._handleDelete} />
			</div>
		);
	}
}

ContainerTask.propTypes = {
	'task': PropTypes.shape({
		'id': PropTypes.number,
		'label': PropTypes.string.isRequired,
		}).isRequired,
}

export default ContainerTask;