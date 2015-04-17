var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;

var CHANGE_EVENT = 'change';

var _message = 'Hello Flux!';
var _isDialogShowing = false;

var MessageStore = assign({}, EventEmitter.prototype, {
  getMessage: function() {
    return _message;
  },

  setMessage: function(message) {
    _message = message;
  },

  isDialogShowing: function() {
    return _isDialogShowing;
  },

  setIsDialogShowing: function(isShowing) {
    _isDialogShowing = isShowing
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.SHOW_DIALOG:
      MessageStore.setIsDialogShowing(true);
      MessageStore.emitChange();
      break;

    case ActionTypes.HIDE_DIALOG:
      MessageStore.setIsDialogShowing(false);
      MessageStore.emitChange();
      break;

    case ActionTypes.UPDATE_MESSAGE:
      MessageStore.setMessage(action.message);
      MessageStore.emitChange();
      break;

    default:
    //
  }
});

module.exports = MessageStore;
