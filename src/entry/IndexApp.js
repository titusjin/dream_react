/**
    Index page entry point
*/

var React = require('react');
var IndexPageContainer = require('../components/IndexPage/IndexPageContainer.react');

require('../css/common.css');
//require('../css/iconfont.css');
require('../css/jquery.circliful.css');


React.render(
    <IndexPageContainer />,
    document.getElementsByTagName('body')[0]
);
