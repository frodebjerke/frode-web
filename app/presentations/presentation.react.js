const React = require('react');
const analytics = require('../analytics');

class Presentation extends React.Component {

  constructor(props) {
    super(props);

    analytics.pageView('presentations');
  }

  render() {

    const pres = this.props.params.pres;
    const url = "https://presentations.redpark.us/?pres="+ pres;

    return (
      <div className="md-pres">
        <iframe src={url} />
      </div>
    )
  }
}

module.exports = Presentation;
