const _ = require('lodash');
const moment = require('moment');
const React = require('react');
const Talk = require('./talk.react');
const PartOf = require('./part-of.react');

class Appearances extends React.Component {

  render() {
    const max = this.props.max || Number.MAX_VALUE;
    const appearances = _.chain(this.props.appearances)
      .sortBy(date)
      .takeRight(max)
      .map(renderAppearance)
      .value();

    const cx = "md-appearances " + this.props.className;

    return <div className={cx}>
        {appearances}
      </div>
  }

}

module.exports = Appearances;

function renderAppearance(appearance) {
  switch (appearance.type) {
    case 'talk':
      return <Talk talk={appearance} />
    case 'part-of':
      return <PartOf link={appearance} />
  }
}

function date(date) {
  return moment(date);
}
