/**
	This is Dream Grid Component
*/

var React = require('react');

var GridMenu = require('./GridMenu.react');
var GridWall = require('./GridWall.react');

var IndexGridStore = require('../stores/IndexGridStore');
var IndexGridActions = require('../actions/IndexGridActions');

function getGridContentState() {
	return {
    	data: IndexGridStore.getAll()
  	};
}

var GridContent = React.createClass({
	getInitialState: function() {
    return getGridContentState();
  },
	
	componentDidMount: function() {
   	IndexGridStore.addChangeGridListener(this._onChange);
  },

  componentWillUnmount: function() {
   	IndexGridStore.removeChangeGridListener(this._onChange);
  },
	
	_onChange: function() {
   	this.setState(getGridContentState());
  },

  render: function() {
   	return (
     	<div id="dreamContent" className={"fa-com"}>
      	<GridMenu />
      	<GridWall data={this.state.data} />
     	</div>
   	);
  }
});

module.exports = GridContent;
