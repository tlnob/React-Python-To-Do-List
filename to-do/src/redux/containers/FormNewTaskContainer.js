import {connect} from 'react-redux';
import FormNewTask from '../../FormNewTask';
import * as toDoAction from '../actions/toDoActions';

const mapStateToProps = (state, ownProps) => {
	return {
		//input não precisa saber nada - pode ser "null"
	}
}

const mapDispatchToProps = (dispatch, ownProps) => { //dispatch lança a ação - ele lida com a ação
	return {
		onAdd: (task) => {
			return dispatch(toDoAction.insertTask({label: task}));
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormNewTask); //funcao que retorna uma função