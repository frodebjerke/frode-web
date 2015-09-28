const React = require('react');
const Link = require('react-router').Link;
const analytics = require('../analytics');

class Contact extends React.Component {

  constructor(props) {
    super(props);

    analytics.pageView('contact');
  }

  render() {
    return (
      <div className="md-contact">
        <div>
          <h1><i className="fa fa-comments"></i> contact</h1>
          <Link className="typo--meta" to="landing"><i className="fa fa-arrow-left"></i> Frode Bjerke</Link>
        </div>
        <div>
          <div>
            <a className="typo--link" href="https://twitter.com/frodebjerke"><i className="fa fa-twitter"></i> @frodebjerke</a>
          </div>
          <div>
            <a className="typo--link" href="https://github.com/frodetbj"><i className="fa fa-github"></i> @frodetbj</a>
          </div>
        </div>
      </div>
    )
  }

}

module.exports = Contact;
