const moment = require('moment');
const _ = require('lodash');
const React = require('react');
const Link = require('react-router').Link;
const Appearances = require('../appearances')

class Timeline extends React.Component {

  render() {

    const events = this.props.events;
    const recent = _.chain(events).filter(past).value();
    const upcoming = _.chain(events).filter(future).value();

    return (
      <div className="md-frode--menu">
        <Link className="typo--link link" to="archive">Archive</Link>
        <Appearances className="md-frode--recent" appearances={recent} max="1" />
        <p className="name">Frode Bjerke</p>
        <Appearances appearances={upcoming} max="1" />
        <Link className="typo--link link" to="contact">Contact</Link>
      </div>
    )
  }
}

module.exports = Timeline;

function future(event) {
  return moment(event.date).isAfter(moment());
}

function past(event) {
  return moment(event.date).isBefore(moment());
}
