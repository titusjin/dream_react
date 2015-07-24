/**
    This is index page entry point
*/

var React = require('react');

var IndexGridContainer = require('./components/IndexGridContainer.react');


React.render(
    <IndexGridContainer />,
    document.getElementById('indexGridContainer')
);

