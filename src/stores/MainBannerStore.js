/**
	MainBanner store	
*/
var assign = require('object-assign');

'use strict';

var AppDispatcher = require('../commons/dispatcher/AppDispatcher');
var GeneralStore = require('./GeneralStore');

var model = [
		{pic:"../img/fake/mainBanner_01.jpg",url:"#"},
		{pic:"../img/fake/mainBanner_02.jpg",url:"#"},
		{pic:"../img/fake/mainBanner_03.jpg",url:"#"}
];

var BannerStore = assign({},GeneralStore,{
	
});

AppDispatcher.register( function( payload ) {
    switch( payload.eventName ) {
		case 'bannerAdd':
		  BannerStore.addContent(payload.newItem.item);
		  
		  //trigger view update after model is updated
		  BannerStore.emitChange();
		  break;
    }
}); 


module.exports = BannerStore;
