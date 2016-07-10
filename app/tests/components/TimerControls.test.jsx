var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TimerControls = require('TimerControls');



describe('TimerControls', () => {
  it('should exist', () => {
    expect(TimerControls).toExist();
  });

  describe('render', () => {
    it('should render pause button when pressed', () => {
      var timercontrols = TestUtils.renderIntoDocument(<TimerControls countupStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(timercontrols));
      var $pauseButton = $el.find('.button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });

    it('should render start button when pressed', () => {
      var timercontrols = TestUtils.renderIntoDocument(<TimerControls countupStatus='paused'/>);
      var $el = $(ReactDOM.findDOMNode(timercontrols));
      var $startButton = $el.find('.button:contains(Start)');
      expect($startButton.length).toBe(1);
    });
  });
});
