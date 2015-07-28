/**
	Index page MainBanner componenet
*/
var React = require('react');

var CpmainBanner = React.createClass({
	getInitialState: function() {
    	return {};
  	},
	
	componentDidMount: function() {
	},

	componentWillUnmount: function() {  	
	},
	
	_onChange: function() {
	},

	render: function(){
	 	return (
			<div className="fa-com">
        		<article>
					<h1>夢想公投</h1>
					<p>新創點子需要你的支持才能進行募集，你可以投他們一票，或提供實質的建議！</p>
					<p className="area-btn">
						<a className="btn-yel" href="#">投票支持</a>
	               	</p>
					<p className="area-page">
						<a href="#" className="current"></a>
						<a href="#"></a>
						<a href="#"></a>
					</p>
	           	</article>
	           	<div className="photo">
	           		<img src="../img/fake/mainBanner_01.jpg" />
	           	</div>
            </div>
	   	);
	}
});

module.exports = CpmainBanner;
