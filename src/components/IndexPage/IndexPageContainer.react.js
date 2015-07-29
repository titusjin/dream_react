/* This is the React-root container of the indexPage 
   Components that used in index page shold put here.
*/

var React = require('react');
var UniversalHeader = require('../HeaderPage/UniversalHeader.react');
var UniversalFooter = require('../FooterPage/UniversalFooter.react');

var FaContent = require('./FaContent.react');
var CpExplain = require('./CpExplain.react');

var IndexPageContainer = React.createClass({
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
        <div className="fa-wrapper">
          <UniversalHeader />
          <FaContent />
          <CpExplain />
          <UniversalFooter />
        </div>
    );
  }
});

module.exports = IndexPageContainer;
