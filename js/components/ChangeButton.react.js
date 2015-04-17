var React = require('react');
var ActionCreators = require('../actions/ActionCreators');


var ChangeButton = React.createClass({
    change: function () {
        ActionCreators.showDialog();
    },
    render: function () {
        return (
            <button
                className='sample-btn btn-change'
                onClick={this.change}>
                Change Message
            </button>
        );

    }
});

module.exports = ChangeButton;