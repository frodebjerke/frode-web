import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout.react';

function Landing(props) {
  return <Layout>
    <div>hei</div>
  </Layout>
}

module.exports = connect(
  state => state,
  dispatch => ({

  })
)(Landing)
