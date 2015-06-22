var React = require('react');

var Remarkable = require('remarkable');
var post = require('../../text/hello.md');

var BlogPost = React.createClass({

  render: function() {

    var rm = new Remarkable();
    var postHtml = rm.render(post);

    return (
      <section className="md-blog">
        <div className="md-blog--content" dangerouslySetInnerHTML={{__html: postHtml}} />
      </section>
    );
  }

});

module.exports = BlogPost;
