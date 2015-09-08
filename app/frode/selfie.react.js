const React = require('react');

class Selfie extends React.Component {

  render() {

    const img = this.props.img;

    return (
        <div className="md-frode--selfie">
          <img src={img} className=""/>
        </div>
    )
  }

}

module.exports = Selfie;
