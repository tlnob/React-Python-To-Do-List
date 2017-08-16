import {connect} from 'react-redux';
import ListTasks from '../../ListTasks'
import * as toDoAction from '../actions/toDoActions'

const mapStateToProps = (state, ownProps) => {
	return {
		tasks: state.tasks.tasks_filtered,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => { //dispatch lança a ação - ele lida com a ação
	return {
		onFetch: () => dispatch(toDoAction.fetchTask()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ListTasks); //funcao que retorna uma função
