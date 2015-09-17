const React = require('react');
const Frode = require('../frode');

const eventData = require('../../data/appearances');

const Landing = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
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
