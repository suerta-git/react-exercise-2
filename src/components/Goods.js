import React from 'react';

export default class Goods extends React.Component {
  render() {
    return (
      <section>
        <p>iPhone</p>
        <button onClick={this.props.cartHandler}>add to cart</button>
      </section>
    );
  }
}
