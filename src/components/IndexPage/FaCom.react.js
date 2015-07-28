/**
	Dream rules componenet
*/
var React = require('react');

var CpmainBanner = require('./CpmainBanner.react');

var FaCom = React.createClass({
	getInitialState: function() {
    return {};
  },
	
	componentDidMount: function() {
  },

  componentWillUnmount: function() {
    	
  },
	
	_onChange: function() {
    	//this.setState(getGridContentState());
  },

  render: function() {
   	return (
     	<div className="fa-content">
      </div>
   	);
  }
});

module.exports = FaCom;
