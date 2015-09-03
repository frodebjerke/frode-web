const React = require('react');

class Presentation extends React.Component {

  render() {

    const pres = this.props.params.pres;
    const url = "http://presentations.redpark.us/?pres="+ pres;

    return (
      <div className="md-pres">
        <iframe src={url} />
      </div>
    )
  }
}

module.exports = Presentation;
