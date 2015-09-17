const React = require('react');
const Link = require('react-router').Link;

class Contact extends React.Component {

  render() {
    return (
      <div className="md-contact">
        <div>
          <h1><i className="fa fa-user-plus"></i> contact & enquiries</h1>
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
