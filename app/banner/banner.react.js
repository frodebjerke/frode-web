var React = require('react');
var BannerStyle = require('./banner-style.js');
var Link = require('react-router').Link;

var Banner = React.createClass({

  render: function() {
    return (
      <section styles={BannerStyle}>
        <div style={BannerStyle.title}>
          <h1 style={BannerStyle.brand}>Sukker<span styles={BannerStyle.brandFri}>fri</span></h1>
          <h1>- Vi hjelper deg med hverdagen</h1>
        </div>
        <Link style={BannerStyle.register} to="landing" query={{scrollTo: "register"}}>Bli med</Link>
      </section>
    );
  }

});

module.exports = Banner;
