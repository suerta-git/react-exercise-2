import React from 'react';
import PRODUCT_IMG from '../assets/product_image_placeholder.png';

export default class GoodItem extends React.Component {
  render() {
    return (
      <li id={this.props.name}>
        <h3>{this.props.name}</h3>
        <img src={PRODUCT_IMG} alt={this.props.name} className="image-size" />
        <form>
          <p>{this.props.price}</p>
          <button
            type="button"
            className="btn btn-primary customize-button"
            onClick={this.props.cartHandler}
          >
            add to cart
          </button>
        </form>
      </li>
    );
  }
}
