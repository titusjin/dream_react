/**
	This is index grid store	
*/

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../../Commons/dispatcher/AppDispatcher');
var IndexGridConstants = require('../constants/IndexGridConstants');

var CHANGE_EVENT = 'change';


var gridData = [
  {dreamId: 1, dreamTitle: "dream1", dreamContent: "", picLink:""},
  {dreamId: 2, dreamTitle: "dream2", dreamContent: "", picLink:""},
  {dreamId: 3, dreamTitle: "dream3", dreamContent: "", picLink:""},
  {dreamId: 4, dreamTitle: "dream4", dreamContent: "", picLink:""},
  {dreamId: 5, dreamTitle: "dream5", dreamContent: "", picLink:""},
  {dreamId: 6, dreamTitle: "dream6", dreamContent: "", picLink:""}
];

function changeGridCategory(category) {
	console.log('enter changeGridCategory');
}

function changeGridType(gtype) {
	console.log('enter changeGridCategory');
}

var IndexGridStore = assign({}, EventEmitter.prototype, {

	getAll: function() {
    	return gridData;
	},

  	emitChange: function() {
    	this.emit(CHANGE_EVENT); //觸發事件
  	},

	/**
	* @param {function} callback
	*/
	addChangeGridListener: function(callback) {
    	this.on(CHANGE_EVENT, callback); //綁定事件
  	},

	/**
	* @param {function} callback
	*/
	removeChangeGridListener: function(callback) {
    	this.removeListener(CHANGE_EVENT, callback); //取消綁定
  	}
});

AppDispatcher.register(function(action) {
	var category;
	var gtype;

	switch(action.actionType) {
    	case IndexGridConstants.GRID_CHANGE_CATEGORY:
      		category = action.category.trim();
        	changeGridCategory(category);
        	CommentStore.emitChange();
      	break;

    	case IndexGridConstants.GRID_CHANGE_TYPE:
    		gtype = action.gtype.trim();
        	changeGridType(gtype);
        	CommentStore.emitChange();
      	break;

		default:
      		// no op
	}
});

module.exports = IndexGridStore;
