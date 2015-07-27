/**
    This is index page entry point
*/

var React = require('react');
var IndexPageContainer = require('./IndexPageContainer.react');


React.render(
    <IndexPageContainer />,
    document.getElementsByTagName('body')[0]
);
