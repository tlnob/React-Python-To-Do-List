import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component{

  render() {
    return (
      <input type="checkbox" label="check" onChange={this.props.action} />
    );
  }
}


Checkbox.propTypes = {
  'action': PropTypes.func.isRequired,
}

export default Checkbox;
