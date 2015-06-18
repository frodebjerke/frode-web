var React = require('react');
var RegisterStyle = require('./register-style');
var MailchimpForm = require('./mailchimp-form.html');


var Register = React.createClass({

  render: function() {
    return (
      <section style={RegisterStyle} dangerouslySetInnerHTML={{__html: MailchimpForm}} />
    );
  }

});

module.exports = Register;
