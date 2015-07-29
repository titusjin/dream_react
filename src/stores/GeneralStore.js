/**
	General store	
*/
'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MainBannerModel = {
	data : [
		{pic:"../img/fake/mainBanner_01.jpg", url: "#", id: "1"},
		{pic:"../img/fake/mainBanner_02.jpg", url: "#", id: "2"},
		{pic:"../img/fake/mainBanner_03.jpg", url: "#", id: "3"}
	]
}
var GeneralStore =assign({},EventEmitter.prototype,{
	getInitialData : function(which){
		switch(which){
			case 'MainBannerModel':
				return MainBannerModel;
			default: 
				return {};
		}
	},
	fetchData  : function(sourceURL){
		if(sourceURL){
			// put jquery ajax or any other lib u like to use for geting data here.
			console.log($);
		}else{
			return {"errorMessage":"sourceURL NOT valid"};
		}
	}
})

module.exports = GeneralStore; 
