var React = require('react');
var MailchimpForm = require('./mailchimp-form.html');


var Register = React.createClass({

  render: function() {
    return (
      <section dangerouslySetInnerHTML={{__html: MailchimpForm}} />
    );
  }

});

module.exports = Register;
