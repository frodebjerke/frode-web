const React = require('react');
const Talk = require('./talk.react');

class Timeline extends React.Component {

  render() {

    const events = this.props.events;
    const recent = events.map(renderEvent);

    return (
      <div className="md-frode--menu">
        {recent}
        <p className="name">Frode Bjerke</p>
      </div>
    )
  }
}

module.exports = Timeline;

function renderEvent(event) {
  switch (event.type) {
    case "talk":
      return <Talk talk={event} />

    return
  }
}
