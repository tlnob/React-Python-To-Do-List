import React from 'react';
import PropTypes from 'prop-types';

class InputSearch extends React.Component {

	_handleChangeSearch(event) {
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<input type="text" value={this.props.value} onChange={this._handleChangeSearch.bind(this)}/>
		);
	}
}

InputSearch.propTypes = {
	'onChange': PropTypes.func.isRequired,
	'value': PropTypes.string,
}

export default InputSearch;
