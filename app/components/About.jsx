var React = require('react');



var About = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },


  //
  // handleSearch: function (location) {
  //   var that = this;
  //
  //   this.setState({
  //     isLoading: true,
  //     errorMessage: undefined,
  //     location: undefined,
  //     temp: undefined
  //   });
  //
  //   openWeatherMap.getTemp(location).then(function (temp) {
  //
  //     that.setState({
  //       location: location,
  //       temp: temp,
  //       isLoading: false
  //
  //     });
  //   }, function (e) {
  //      that.setState({
  //        isLoading: false,
  //        errorMessage: e.message
  //      });
  //   });
  // },



// Initial Location value

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;


    return (
      <div>
        <h1 className="text-center page-title">About</h1>

      </div>
    )
  }
});



module.exports = About;
