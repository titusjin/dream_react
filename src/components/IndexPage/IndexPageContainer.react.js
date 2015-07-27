/* This is the React-root container of the indexPage 
   Components that used in index page shold put here.
*/

var React = require('react');
var UniversalHeader = require('../HeaderPage/UniversalHeader.react');
var UniversalFooter = require('../FooterPage/UniversalFooter.react');

var IndexPageContainer = React.createClass({
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
        <div className="fa-wrapper">
          <UniversalHeader />
          <UniversalFooter />
        </div>
    );
  }
});

module.exports = IndexPageContainer;
