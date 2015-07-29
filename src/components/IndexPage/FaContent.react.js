/**
	Dream rules componenet
*/
var React = require('react');

var MainBanner = require('./MainBanner.react');
var FaCom = require('./FaCom.react');

var FaContent = React.createClass({
	getInitialState: function() {
    return {};
  },
	
	componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },
	
	_onChange: function() {
  },

  render: function() {
   	return (
     	<div className="fa-content">
          <MainBanner />
          <FaCom />
      </div>
   	);
  }
});

module.exports = FaContent;
