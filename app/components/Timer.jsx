var React = require('react');
var Clock = require('Clock');
var TimerForm = require('TimerForm');
var TimerControls = require('TimerControls');


var Timer = React.createClass({
  getInitialState: function () {
    return {
      timercount: 0,
      countupStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countupStatus !== prevState.countupStatus) {
      switch (this.state.countupStatus) {
        case 'started':
          this.timerstartTimer();
          break;
        case 'stopped':
          this.setState({timercount: 0});
        case 'paused':
          clearInterval(this.timertimer);
          this.timertimer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function () {
    console.log('componentDidUnmount');
    clearInterval(this.timertimer);
    this.timertimer = undefined;
  },

     timerstartTimer: function () {
       this.timertimer = setInterval(() => {  // function in Java Script for interval timing between processing functions inside of function call
         var newtimerCount = this.state.timercount + 1;
         this.setState({
           timercount: newtimerCount
         });
       }, 1000);
     },

     handleSetCountUp: function (seconds) {
       this.setState({
         timercount: seconds,
         countupStatus: 'started'
       });
     },

    handleStatusChange: function (newStatus) {
      this.setState({countupStatus: newStatus});
    },


  render: function () {
    var {timercount, countupStatus} = this.state;  // define variable in render function for definition

    var renderTimerControlArea = () => {
        return <TimerControls countupStatus={countupStatus} onTimerStatusChange={this.handleStatusChange}/>;
    };

    return (
      <div>
        <h1 className="text-center page-title">Timer App</h1>
          <Clock totalSeconds={timercount}/>
          {renderTimerControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
