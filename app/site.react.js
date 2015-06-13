var React = require('react');
var Banner = require('./banner');
var resetStyle = require('./styles/reset');
var typography = require('./styles/typography');

var Site = React.createClass({

  render: function() {
    return (
      <div styles={[resetStyle, typography]}>
        <Banner />
      </div>
    );
  }

});

React.render(<Site />, document.getElementById('sukkerfri'))
