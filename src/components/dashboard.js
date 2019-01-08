import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends Component {
 
  render() {
    console.log(this.props.data)
    return (
      <div id="dash">
        
      </div>
    )
  }
}
Dashboard.propTypes = {
    optionalString: PropTypes.string
}