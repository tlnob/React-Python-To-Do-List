import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

	_handleChange(event) {
		this.props.onChange(event.target.value);
	}
	
	render() {
		return (
			<input type="text" value={this.props.value} onChange={this._handleChange.bind(this)}/>
		);
	}

}

Input.propTypes = {
	'onChange': PropTypes.func.isRequired,
	'value': PropTypes.string,
}

export default Input;