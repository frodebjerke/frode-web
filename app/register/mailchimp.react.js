var React = require('react');

var formAction = "//redpark.us11.list-manage.com/subscribe/post?u=aa2c3f37a53a37efbcfb952ca&amp;id=a89a4f38dd";

var Mailchimp = React.createClass({
  getInitialState: function () {
    return {
      email: ""
    }
  },

  render: function() {
    return (
      <form  className="md-register--form" action={formAction} method="post" target=":blank" noValidate>
        <input className="typo--input" type="email" value={this.state.email} name="EMAIL" placeholder="Din email - meld din interesse" onChange={this.onChange} required />
        <div style={{position: "absolute", left: "-5000px"}}>
          <input type="text" name="b_aa2c3f37a53a37efbcfb952ca_a89a4f38dd" tabIndex="-1" value="" />
        </div>
        <div className="clear">
          <input className="typo--submit" type="submit" value="Ta del" name="subscribe" />
        </div>
      </form>
    );
  },

  onChange: function (event) {
    this.setState({
      email: event.target.value
    });
  }

});

module.exports = Mailchimp;
