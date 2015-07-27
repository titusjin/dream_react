/**
	This is Dream Grid Wall
*/

var React = require('react');

var Grid = require('./Grid.react');


var GridWall = React.createClass({
	render: function() {
    	var gridNodes = this.props.data.map(function (grid) {
      		return (
        		<Grid grid={grid}>
        		</Grid>
      		);
    	});
    	
    	return (
      		<div id="gridWall" className={"cp-dreamWall"}>
        		{gridNodes}
            <div className={"area-btn"}><a href="#">更多夢想</a></div>
      		</div>
    	);
  	}
});

module.exports = GridWall;