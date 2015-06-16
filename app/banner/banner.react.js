var React = require('react');
var BannerStyle = require('./banner-style.js');
var Link = require('react-router').Link;

var Banner = React.createClass({

  render: function() {
    return (
      <section styles={BannerStyle}>
        <h1>Vi hjelper deg.</h1>
        <Link to="landing" query={{scrollTo: "register"}}>Bli med!</Link>
      </section>
    );
  }

});

module.exports = Banner;
