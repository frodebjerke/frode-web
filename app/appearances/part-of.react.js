const moment = require('moment');
const React = require('react');
const base = require('./appearance-base');

class PartOf extends React.Component {

  render() {

    const link = this.props.link;
    const soundcloud = renderSoundcloud(link);

    const whenRepr = base.fromNowRepr(link.date);

    return (
      <div className="md-appearance">
        <div className="md-appearance--meta">
          <div className="md-appearance--where">Part of <i className="fa fa-users"></i> {link.what}</div>
          {soundcloud}
        </div>
        <div className="md-appearance--content">
          <div className="md-appearance--when">{whenRepr}</div>
          <div className="md-appearance--name">{link.name}</div>
        </div>
      </div>
    )
  }

}

module.exports = PartOf;

function renderSoundcloud(link) {
  if (link.soundcloud) {
    return <a className="md-appearance--link" href={link.soundcloud} title={link.name}>
      <i className="fa fa-soundcloud"></i> Listen
    </a>
  }
}
