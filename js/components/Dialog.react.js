var React = require('react');
var CloseButton = require('./CloseButton.react');
var ActionCreators = require('../actions/ActionCreators');

var Dialog = React.createClass({
    componentDidMount: function() {
        this.refs.message.getDOMNode().value = this.props.message;
    },

    updateMessage: function(e) {
        var messageInputNode = this.refs.message.getDOMNode();
        ActionCreators.updateMessage(messageInputNode.value);
    },
    render: function() {
        return (
            <div className='sample-dialog' >
                <input className='sample-input' ref='message' onKeyUp={this.updateMessage} />
                <CloseButton />
            </div>
        );
    }
});

module.exports = Dialog;