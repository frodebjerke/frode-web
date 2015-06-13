var React = require('react');
var BannerStyle = require('./banner-style.js');

var Banner = React.createClass({

  render: function() {
    return (
      <section styles={BannerStyle}>
        <h1>Vi hjelper deg.</h1>
      </section>
    );
  }

});

module.exports = Banner;
