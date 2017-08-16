import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

	shouldComponentUpdate(nextProps, nextStates) {
		return false;
	}

	render() {
		return (
			<button onClick={this.props.action}> {this.props.label} </button>
		);
	}

}

Button.propTypes = {
	'label': PropTypes.string.isRequired,
	'action': PropTypes.func.isRequired,
}

export default Button;
