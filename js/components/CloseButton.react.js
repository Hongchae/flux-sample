var React = require('react');
var ActionCreators = require('../actions/ActionCreators');


var CloseButton = React.createClass({
    ok: function () {
        ActionCreators.hideDialog();
    },
    render: function () {
        return (
            <button
                className='sample-btn btn-close'
                onClick={this.ok}>
                Close
            </button>
        );

    }
});

module.exports = CloseButton;