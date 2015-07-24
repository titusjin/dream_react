/**
	This is Dream Grid Menu
*/

var React = require('react');

var Grid = React.createClass({

  	render: function() {
    	return (
      		<div className={"post po-vote"}>
                <a href="#" className={"photo"}>
                	<img src="../img/fake/ill_320x245_04.jpg" />
                </a>
                <article>
                	<a href="#" className={"tit"}>NCCU HACKAHON生活創客！共創生活價值！</a>
                	<p>
                    	<span className={"sort"}><em className={"icon-label"}></em>生活</span>
                    	<span className={"time"}><em className={"icon-time"}></em>到數7天</span>
                    	<a href="#" className={"mess"}><em className={"icon-message"}></em>26</a>
                    </p>
                </article>
                <div className={"count"}>
                    <div className={"vote"}>
                    	<div id="myStat1" data-dimension="99" data-text="89" data-info="票" data-width="3" data-fontsize="15" data-percent="89" data-fgcolor="#f9a825" data-bgcolor="#eaeaea"></div>
                    </div>
                    <div className={"btn"}>
                        <a className={"btn-yel close"} href="#">投票支持</a>
                    </div>
                </div>
            </div>
    	);
  	}
});

module.exports = Grid;