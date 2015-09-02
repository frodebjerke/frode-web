const React = require('react');

class Frode extends React.Component {

  render() {
    return (
      <div className="md-frode">
          <div className="md-frode--selfie">
            <img src="img/me-laugh.jpg" className=""/>
          </div>
          <div className="md-frode--menu">
            <p className="name">Frode Bjerke</p>
          </div>
      </div>
    )
  }
}

module.exports = Frode;
