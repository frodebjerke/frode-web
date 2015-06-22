var React = require('react');
var Link = require('react-router').Link;

var Banner = React.createClass({

  render: function() {
    return (
      <section className="md-banner">
        <div className="md-banner--brand">
          <h1 className="typo--header">Din <span className="typo--brand">sukker<span className="typo--brand-inner">frie</span></span> hverdag</h1>
        </div>
        <Link className="typo--btn md-banner--register" to="landing" query={{scrollTo: "register"}}>Bli med</Link>
      </section>
    );
  }

});

module.exports = Banner;
