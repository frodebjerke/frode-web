const moment = require('moment');
const React = require('react');
const Link = require('react-router').Link;

const base = require('./appearance-base');

class Blog extends React.Component {

  render() {

    const blog = this.props.blog;
    const whenRepr = base.fromNowRepr(blog.date);

    const blogLink = renderBlog(blog);

    return (
        <div className="md-appearance">
          <div className="md-appearance--meta">
            <div className="md-appearance--where">wrote <i className="fa fa-newspaper-o"></i> {blog.where}</div>
            {blogLink}
          </div>
          <div className="md-appearance--content">
            <div className="md-appearance--when">{whenRepr}</div>
            <div className="md-appearance--name">{blog.name}</div>
          </div>
        </div>
    )
  }

}

module.exports = Blog;

function renderBlog(blog) {
  if (blog.url) {
    return <a className="md-appearance--link" href={ blog.url } title={"Open blog post"}>
      <i className="fa fa-external-link"></i> read
    </a>
  }
}
