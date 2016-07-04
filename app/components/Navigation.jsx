var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      // var location = this.refs.search.value;
      // var encodedLocation = encodeURIComponent(location);
      //
      // if (location.length > 0) {
      //   this.refs.search.value = '';
      //   window.location.hash = '#/?location=' + encodedLocation;
      // }


//      alert(location);
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>

            <li>
              <Link to="/Countdown" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.kuerbis.ca" target="_blank">Ralph Kuerbis</a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
});

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });




module.exports = Navigation;
