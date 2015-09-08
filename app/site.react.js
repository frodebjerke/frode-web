var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Landing = require('./landing');
var Presentation = require('./presentations/presentation.react');
var Archive = require('./archive');

var Site = React.createClass({

  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }

});

var routes = (
    <Route handler={Site}>
      <Route name="landing" path="/" handler={Landing} />
      <Route name="pres" path="/pres/:pres" handler={Presentation} />
      <Route name="archive" path="archive" handler={Archive} />
      <Route name="contact" path="contact" handler={Archive} />
    </Route>
)

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(<Root/>, document.body);
});
