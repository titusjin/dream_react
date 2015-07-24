webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** 
		This is footer entry point
	*/

	var React = __webpack_require__(1);

	var Footer = __webpack_require__(148);


	React.render(
	    React.createElement(Footer, null),
	    document.getElementById('footer')
	);



/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//**
	    This is footer component
	*/

	var React = __webpack_require__(1);


	var Footer = React.createClass({displayName: "Footer",
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
	            React.createElement("div", {className: "fa-com"}, 
	                React.createElement("div", {className: "area-btn"}, 
	                    React.createElement("a", {href: "#"}, "關於我們"), 
	                    React.createElement("a", {href: "#"}, "使用條款"), 
	                    React.createElement("a", {href: "#"}, "常見問答"), 
	                    React.createElement("a", {href: "#"}, "聯絡我們"), 
	                    React.createElement("span", {className: "lang"}, 
	                        "LANGUAGE", 
	                        React.createElement("a", {href: "#", className: "in-lang"}, 
	                            "繁中", React.createElement("em", {className: "icon-arrIn"}), 
	                            React.createElement("ul", null, 
	                                React.createElement("li", null, "繁中"), 
	                                React.createElement("li", null, "簡中"), 
	                                React.createElement("li", null, "英文")
	                            )
	                        )
	                    )
	                ), 
	                React.createElement("div", {className: "copyright"}, 
	                    React.createElement("a", {href: "#"}, React.createElement("em", {className: "icon-fb"}), "夢想搖籃"), 
	                    React.createElement("span", null, "© 2015 104 Coporation All Rights Reserved.")
	                )
	            )
	        );
	    }
	});

	module.exports = Footer;

/***/ }

});