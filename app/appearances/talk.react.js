const moment = require('moment');
const React = require('react');
const Link = require('react-router').Link;

const base = require('./appearance-base');

class Talk extends React.Component {

  render() {

    const talk = this.props.talk;
    const whenRepr = base.fromNowRepr(talk.date);

    const slides = renderSlides(talk);

    return (
        <div className="md-appearance">
          <div className="md-appearance--meta">
            <div className="md-appearance--where">talk <i className="fa fa-globe"></i> {talk.where}</div>
            {slides}
          </div>
          <div className="md-appearance--content">
            <div className="md-appearance--when">{whenRepr}</div>
            <div className="md-appearance--name">{talk.name}</div>
          </div>
        </div>
    )
  }

}

module.exports = Talk;

function renderSlides(talk) {
  if (talk.slides) {
    return <Link className="md-appearance--link" to={"pres"} params={{pres: talk.slides}} title={"Open slides"}>
      <i className="fa fa-external-link"></i> slides
    </Link>
  }
}
