/**
	This is Index Grid Actions
*/

var AppDispatcher = require('../../Commons/dispatcher/AppDispatcher');
var IndexGridConstants = require('../constants/IndexGridConstants');

var IndexGridActions = {

	/**
	* @param  {string} text {string} author
	*/
	changeGridCategory: function(category) {
    	AppDispatcher.dispatch({
      		actionType: IndexGridConstants.GRID_CHANGE_CATEGORY,
      		category: category
    	});
	},

	changeGridType: function(gtype) {
		AppDispatcher.dispatch({
      		actionType: IndexGridConstants.GRID_CHANGE_TYPE,
      		gtype: gtype
    	});
	}

}

module.exports = IndexGridActions;