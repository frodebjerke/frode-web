const React = require('react');
var Link = require('react-router').Link;

class Frode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showPres: false
    }
  }

  render() {

    return (
        <div className="md-frode">
            <div className="md-frode--selfie">
              <img src="img/me-laugh.jpg" className=""/>
            </div>
            <div className="md-frode--menu">
              <p className="item"><Link to="pres" params={{pres: "2015-09-04_Fagdag_brukervennlig-api-design"}}>Slides Fagdag</Link></p>
              <p className="name">Frode Bjerke</p>
            </div>
        </div>

    )
  }

  onClick() {
    this.setState({
      showPres: !this.state.showPres
    })
  }
}

module.exports = Frode;
