/**
	MainBanner store	
*/
var assign = require('object-assign');

'use strict';

var AppDispatcher = require('../commons/dispatcher/AppDispatcher');
var GeneralStore = require('./GeneralStore');


var BannerStore = assign({},GeneralStore,{
	getFreshData : function(){
		var initialData = this.getInitialData('MainBannerModel');
		initialData.data.map(function(singleData){
			if(singleData.id == '1'){
				singleData.show = 'true';
			}else{
				singleData.show = 'false';
			}
		});

		return initialData;
	}
});

AppDispatcher.register( function( payload ) {
    switch(payload.eventName) {
		case 'bannerAdd':
		  BannerStore.addContent(payload.newItem.item);
		  
		  //trigger view update after model is updated
		  BannerStore.emitChange();
		  break;
    }
}); 


module.exports = BannerStore;
