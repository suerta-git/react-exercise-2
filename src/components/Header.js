import React from 'react';
import Cart from './Cart';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="title">Store</h1>
        <Cart number={this.props.number} />
      </header>
    );
  }
}
