var React = require('react');
var Clock = require('Clock');

var TimerForm = React.createClass({
   onSubmit: function (e) {
     e.preventDefault();
     var timerstrSeconds = this.refs.timerseconds.value;

   },

  render: function () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = TimerForm;
