const _ = require('lodash');
const moment = require('moment');
const React = require('react');
const Appearances = require('../appearances');
const Link = require('react-router').Link;

const appearances = require('../../data/appearances');

class Archive extends React.Component {

  render() {
    return (
      <div className="md-archive">
        <div>
          <h1><i className="fa fa-history"></i> archive</h1>
          <Link className="typo--meta" to="landing"><i className="fa fa-arrow-left"></i> Frode Bjerke</Link>
        </div>
        <Appearances appearances={appearances.appearances} />
      </div>
    )
  }

}

module.exports = Archive;
