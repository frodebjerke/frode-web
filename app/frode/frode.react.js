const React = require('react');
const Selfie = require('./selfie.react');
const Timeline = require('./timeline.react');

class Frode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showPres: false
    }
  }

  render() {

    const events = this.props.events;

    return (
        <div className="md-frode">
            <Selfie img="img/me-laugh.jpg" />
            <Timeline events={events} />
        </div>

    )
  }
}

module.exports = Frode;
