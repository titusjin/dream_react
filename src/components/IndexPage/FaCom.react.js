/**
	Dream rules componenet
*/
var React = require('react');

var CpMenuCategory = require('./CpMenuCategory.react');
var CpDreamWall = require('./CpDreamWall.react');

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
        <CpMenuCategory />
        <CpDreamWall />
      </div>
   	);
  }
});

module.exports = FaCom;
