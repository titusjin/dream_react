/**
	This is header component
*/

var React = require('react');

var UniversalHeader = React.createClass({
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
      		<div className="fa-com">
                <a href="#" className="logo"><img src="../img/com/logo.png" /></a>
                <nav>
                    <a href="#" className="current">
                        <em className="btnLeft"><span></span></em>
                            公投
                        <em className="btnRight"><span></span></em>
                    </a>
                    <em className="icon-arrLa"></em>
                    <a href="#">
                        <em className="btnLeft"><span></span></em>
                            募資
                        <em className="btnRight"><span></span></em>
                    </a>
                    <em className="icon-arrLa"></em>
                    <a href="#">
                        <em className="btnLeft"><span></span></em>
                            成功
                        <em className="btnRight"><span></span></em>
                    </a>
                </nav>
                <ul className="navSelf">
                    <li className="login"><a href="#">登入</a><span>|</span><a href="#">註冊</a></li>
                    <li className="btn-fb"><a href="#"><img src="../img/fake/btn_fb.jpg" /></a></li>
                    <li><a href="#" className="btn-yel">提案</a></li>
                </ul>
                <div className="search">
                    <a href="#" className="icon-search"></a>
                    <input type="text" />                    
                </div>
            </div>
    	);
    }
});

module.exports = UniversalHeader;
