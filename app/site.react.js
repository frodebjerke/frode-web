const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const ga = require('react-google-analytics');
const GAInitiailizer = ga.Initializer;
const Landing = require('./landing');
const Presentation = require('./presentations/presentation.react');
const Archive = require('./archive');
const Contact = require('./contact');

const Site = React.createClass({

  render: function() {
    return (
      <div>
        <RouteHandler />
        <GAInitiailizer />
      </div>
    );
  }

});

const routes = (
    <Route handler={Site}>
      <Route name="landing" path="/" handler={Landing} />
      <Route name="pres" path="/pres/:pres" handler={Presentation} />
      <Route name="archive" path="archive" handler={Archive} />
      <Route name="contact" path="contact" handler={Contact} />
    </Route>
)

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(<Root/>, document.body);
});
