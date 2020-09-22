import React from 'react';
import GoodItem from './GoodItem';
import './Brand.scss';

export default class Brand extends React.Component {
  render() {
    return (
      <div className="brand" id={this.props.brandName}>
        <h2>{this.props.brandName}</h2>
        <ul>
          {this.props.products.map((product) => (
            <GoodItem
              name={product.name}
              price={product.price}
              key={product.name}
              cartHandler={this.props.cartHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
}
