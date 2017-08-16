import React from 'react';
import StyledComponent from 'styled-components';
import FormNewTaskContainer from './redux/containers/FormNewTaskContainer';
import ListTasksContainer from './redux/containers/ListTasksContainer';

const ContainerStyled = StyledComponent.div`
	background-color: rgb(118, 156, 169);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

class App extends React.Component {

	render() {
		return (
			<ContainerStyled>
				<h1> TO DO </h1>
				 {/*Filtro: <Input onChange={this._handleFilter/>*/}
				<FormNewTaskContainer />
				<ListTasksContainer />
			</ContainerStyled>
		);
	}
}

export default App;
