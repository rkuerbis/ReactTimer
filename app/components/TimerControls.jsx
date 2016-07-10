var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    countupStatus: React.PropTypes.string.isRequired,
    onTimerStatusChange: React.PropTypes.func.isRequired
  },

  onTimerStatusChange: function (newStatus) {
    return () => {
      this.props.onTimerStatusChange(newStatus);
    }
  },

  render: function () {
    var {countupStatus} = this.props;

    var renderTimerStartStopButton = () => {
      if (countupStatus === 'started') {
        return <button className="button secondary" onClick={this.onTimerStatusChange('paused')}>Pause</button>
      } else if (countupStatus === 'paused' || countupStatus === 'stopped') {
          return <button className="button primary" onClick={this.onTimerStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderTimerStartStopButton()}
        <button className="button alert hollow" onClick={this.onTimerStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = TimerControls;
