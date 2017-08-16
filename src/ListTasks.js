import React from 'react';
import PropTypes from 'prop-types';
import ContainerTaskContainer from './redux/containers/ContainerTaskContainer';

class ListTasks extends React.Component {

	componentDidMount(){
		this.props.onFetch();
	}

	render() {
		let tasks = this.props.tasks.map(function(item, index) {
			return <ContainerTaskContainer key={index} task={item} />

		});

		return (
			<div>
				{tasks}
			</div>
		);
	}
}

ListTasks.propTypes = {
	'tasks': PropTypes.array,
}

export default ListTasks;
