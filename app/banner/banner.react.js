var React = require('react');
var Link = require('react-router').Link;

var Banner = React.createClass({

  render: function() {
    return (
      <section className="md-banner">
          <h1 className="md-banner--brand">Din <span className="typo--brand">sukker<span className="typo--brand-inner">frie</span></span> hverdag</h1>
        <Link className="typo--btn md-banner--register" to="landing" query={{scrollTo: "register"}}>Ta del</Link>
      </section>
    );
  }

});

module.exports = Banner;
