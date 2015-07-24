webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//**
		This is header entry point
	*/

	var React = __webpack_require__(1);

	var Header = __webpack_require__(149);


	React.render(
	    React.createElement(Header, null),
	    document.getElementById('header')
	);


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//**
		This is header component
	*/

	var React = __webpack_require__(1);


	var Header = React.createClass({displayName: "Header",
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
	                React.createElement("a", {href: "#", className: "logo"}, React.createElement("img", {src: "../img/com/logo.png"})), 
	                React.createElement("nav", null, 
	                    React.createElement("a", {href: "#", className: "current"}, 
	                        React.createElement("em", {className: "btnLeft"}, React.createElement("span", null)), 
	                        "公投", 
	                        React.createElement("em", {className: "btnRight"}, React.createElement("span", null))
	                    ), 
	                    React.createElement("em", {className: "icon-arrLa"}), 
	                    React.createElement("a", {href: "#"}, 
	                        React.createElement("em", {className: "btnLeft"}, React.createElement("span", null)), 
	                        "募資", 
	                        React.createElement("em", {className: "btnRight"}, React.createElement("span", null))
	                    ), 
	                    React.createElement("em", {className: "icon-arrLa"}), 
	                    React.createElement("a", {href: "#"}, 
	                        React.createElement("em", {className: "btnLeft"}, React.createElement("span", null)), 
	                        "成功", 
	                        React.createElement("em", {className: "btnRight"}, React.createElement("span", null))
	                    )
	                ), 
	                React.createElement("ul", {className: "navSelf"}, 
	                    React.createElement("li", {className: "login"}, React.createElement("a", {href: "#"}, "登入"), React.createElement("span", null, "|"), React.createElement("a", {href: "#"}, "註冊")), 
	                    React.createElement("li", {className: "btn-fb"}, React.createElement("a", {href: "#"}, React.createElement("img", {src: "../img/fake/btn_fb.jpg"}))), 
	                    React.createElement("li", null, React.createElement("a", {href: "#", className: "btn-yel"}, "提案"))
	                ), 
	                React.createElement("div", {className: "search"}, 
	                    React.createElement("a", {href: "#", className: "icon-search"}), 
	                    React.createElement("input", {type: "text"})
	                )
	            )
	    	);
	  	}
	});

	module.exports = Header;

/***/ }

});