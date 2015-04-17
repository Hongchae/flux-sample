var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;

var ActionCreators = {
  showDialog: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.SHOW_DIALOG
    });
  },

  hideDialog: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.HIDE_DIALOG
    });
  },

  updateMessage: function(message) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_MESSAGE,
      message: message
    });
  }
};

module.exports = ActionCreators;
