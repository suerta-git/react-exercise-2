import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Cart.scss';

export default class Cart extends React.Component {
  render() {
    return (
      <div id="cart">
        <ShoppingCartOutlined className="white" />
        <span className="badge badge-pill badge-danger">
          {this.props.number}
        </span>
      </div>
    );
  }
}
