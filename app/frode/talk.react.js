const moment = require('moment');
const React = require('react');
const Link = require('react-router').Link;

class Talk extends React.Component {

  render() {

    const talk = this.props.talk;
    const slides = talk.slides ? <Link to="pres" params={{pres: talk.slides}} title="Open slides"><i className="fa fa-external-link"></i></Link> : "";
    const since = isToday(talk.date) ? (<span className="since">Today</span>) : (<span className="since">{moment(talk.date).fromNow()}</span>);

    return (
        <p className="item">
          {since}
          {talk.name}
          {slides}
        </p>
    )
  }

}

module.exports = Talk;

function isToday(date) {
  return moment(date).startOf('day').isSame(moment().startOf('day'));
}
