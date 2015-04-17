var React = require('react');
var MessageStore = require('../stores/MessageStore');
var Dialog = require('../components/Dialog.react');
var ChangeButton = require('../components/ChangeButton.react');
var MessagePanel = require('../components/MessagePanel.react');

function getMessageState() {
  return {
    message: MessageStore.getMessage(),
    isDialogShowing: MessageStore.isDialogShowing()
  };
}

var SampleApp = React.createClass({

  getInitialState: function() {
    return getMessageState();
  },

  componentDidMount: function() {
    MessageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onChange);
  },

  render: function() {
  	return (
      <div>
        { this.state.isDialogShowing
            ? <div className='sample-dialog-cover' /> : null }

        <MessagePanel message={this.state.message} />
        <ChangeButton />

        { this.state.isDialogShowing
            ? <Dialog message={this.state.message} /> : null }
      </div>
  	);
  },

  _onChange: function() {
    this.setState(getMessageState());
  }

});

module.exports = SampleApp;
