var React = require('react');

var MessagePanel = React.createClass({
    render: function() {
        return (
            <div className="sample-message">
                {this.props.message}
            </div>
        );
    }
});

module.exports = MessagePanel;