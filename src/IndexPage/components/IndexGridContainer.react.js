/**
	This is Index Grid Container
*/

var React = require('react');

var GridContent = require('./GridContent.react');
var MainBanner = require('./MainBanner.react');
var DreamRules = require('./DreamRules.react');

var IndexGridContainer = React.createClass({

  	render: function() {
    	return (
    		<div id="indexGridContainer">
      			<MainBanner />
      			<GridContent />
      			<DreamRules />
      		</div>
    	);
  	}
});

module.exports = IndexGridContainer;