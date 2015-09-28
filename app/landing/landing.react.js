const React = require('react');
const Frode = require('../frode');
const eventData = require('../../data/appearances');
const analytics = require('../analytics');

const Landing = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function () {
    analytics.pageView('landing');
  },

  render: function() {
    return (
      <div>
        <Frode events={eventData.appearances} />
      </div>
    );
  }
});

module.exports = Landing;
