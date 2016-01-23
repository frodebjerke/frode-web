import React from 'react';

export default class Layout extends React.Component {

  render() {
    return <div className="base-container">
      <div className="base-container--inner">
        {this.props.children}
      </div>
    </div>
  }
}
