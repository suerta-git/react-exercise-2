import React from 'react';
import PRODUCT_IMG from '../assets/product_image_placeholder.png';

export default class GoodItem extends React.Component {
  render() {
    return (
      <li id={this.props.name}>
        <h3>{this.props.name}</h3>
        <img src={PRODUCT_IMG} alt={this.props.name} />
        <p>{this.props.price}</p>
        <button
          className="btn btn-primary no-radius"
          onClick={this.props.cartHandler}
        >
          add to cart
        </button>
      </li>
    );
  }
}
