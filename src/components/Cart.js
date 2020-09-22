import React from 'react';

export default class Cart extends React.Component {
  render() {
    return <p>现在有：{this.props.number}</p>;
  }
}
