import {connect} from 'react-redux';
import ContainerTask from '../../ContainerTask';
import * as toDoAction from '../actions/toDoActions';

const mapStateToProps = (state, ownProps) => {
	return {
		tasks: state.tasks,
		}
}

const mapDispatchToProps = (dispatch, ownProps) => { //dispatch lança a ação - ele lida com a ação
	return {
		onDelete: (task) => {
			return dispatch(toDoAction.deleteTaskReq(task));
		},
		onChecked: (task) => {
			return dispatch(toDoAction.checkedTasks(task));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ContainerTask); //funcao que retorna uma função
