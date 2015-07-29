var React = require('react');

var CpMenuCategory = React.createClass({
	render: function(){
		return (
		<div className="cp-menu-category">
			<a href="#" className="in-lang">
			    類別<em className="icon-arrIn"></em>
			    <ul>
			        <li>出版</li>
			        <li>影音</li>
			        <li>設計</li>
			        <li>科技</li>
			        <li>生活</li>
			        <li>體育</li>
			        <li>社會</li>
			        <li>藝文</li>
			        <li>其它</li>
			    </ul>
			</a>
			<div className="area-btn">
			    <a href="#">即將到期</a>
			    <span>|</span>
			    <a href="#" className="current">最新</a>
			    <span>|</span>
			    <a href="#">熱門</a>
			    <span>|</span>
			    <a href="#">已結束</a>
			</div>
		</div>
		);
	}
});

module.exports = CpMenuCategory;
