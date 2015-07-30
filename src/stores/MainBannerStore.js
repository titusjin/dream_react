/**
	MainBanner store	
*/
'use strict';

var AppDispatcher = require('../commons/dispatcher/AppDispatcher');
var GeneralStore = require('./GeneralStore');
var assign = require('object-assign');

var BannerStore = assign({},GeneralStore,{
	getFreshData : function(){
		var initialData = this.getInitialData('MainBannerModel');
		if(initialData){
			initialData.data.map(function(singleData){
				if(singleData.id == '1'){
					singleData.show = 'true';
				}else{
					singleData.show = 'true';
				}
			});
		}
	
		return initialData;
	}
});

/*AppDispatcher.register( function( payload ) {
    switch(payload.eventName) {
		case 'bannerAdd':
		  BannerStore.addContent(payload.newItem.item);
		  
		  //trigger view update after model is updated
		  BannerStore.emitChange();
		  break;
    }
}); */

module.exports = BannerStore;
