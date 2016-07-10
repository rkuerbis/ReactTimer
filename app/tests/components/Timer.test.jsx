var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Timer = require('Timer');


describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCountUp', () => {
    it('should set state to started and countup', () => {
       var countup = TestUtils.renderIntoDocument(<Timer/>);
       countup.handleSetCountUp(0);

       expect(countup.state.timercount).toBe(0);
       expect(countup.state.countupStatus).toBe('started');

       setTimeout(() => {   // function in Java Script for single time out before processing functions inside of function call
         expect(countup.state.timercount).toBe(1);

       }, 1001);
    });

    it('should pause countup on paused status', () => {
      var countup = TestUtils.renderIntoDocument(<Timer/>);
      countup.handleSetCountUp(3);
      countup.handleStatusChange('paused');

      setTimeout(() => {     // Executes contents after timeout limit (1001ms)
        expect(countup.state.timercount).toBe(3);
        expect(countup.state.countupStatus).toBe('paused');
      }, 1001);
    });

    it('should stop countup on stopped status', () => {
      var countup = TestUtils.renderIntoDocument(<Timer/>);
      countup.handleSetCountUp(3);
      countup.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countup.state.timercount).toBe(0);
        expect(countup.state.countupStatus).toBe('stopped');
      }, 1001);

    });
  });
});
