var React = require('react');
var RegisterStyle = require('./register-style');

var Register = React.createClass({

  render: function() {
    return (
      <section style={RegisterStyle}>
        <h1>Registrer deg!</h1>
      </section>
    );
  }

});

module.exports = Register;
