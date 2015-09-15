const moment = require('moment');
const _ = require('lodash');
const React = require('react');
const Link = require('react-router').Link;
const Talk = require('./talk.react');

class Timeline extends React.Component {

  render() {

    const events = this.props.events;
    const recent = _.chain(events).filter(past).sortBy(date).map(renderEvent).take(3).value();
    const upcoming = _.chain(events).filter(future).sortBy(date).map(renderEvent).take(2).value();

    return (
      <div className="md-frode--menu">
        {recent}
        <p className="name">Frode Bjerke</p>
        {upcoming}
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

function future(event) {
  return moment(event.date).isAfter(moment());
}

function past(event) {
  return moment(event.date).isBefore(moment());
}

function date(event) {
  return moment(event);
}
