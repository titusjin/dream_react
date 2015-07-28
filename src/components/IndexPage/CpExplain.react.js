/**
	Dream rules componenet
*/
var React = require('react');

var CpExplain = React.createClass({
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
     	<div className="cp-explain">
          <div className="fa-com">
              <a href="#" className="btn_rule"><p>運作規則</p><em></em></a>
              <a href="#" className="btn_case"><p>如何提案</p><em></em></a>
              <a href="#" className="btn_sponsor"><p>如何贊助</p><em></em></a>
          </div>
      </div>
   	);
  }
});

module.exports = CpExplain;
