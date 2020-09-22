import React from 'react';
import Brand from './Brand';
import './Goods.scss';

export default class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          brandName: 'iPhone',
          products: [
            {
              name: 'iPhone11',
              price: '￥5999',
            },
            {
              name: 'iPhoneXS',
              price: '￥5399',
            },
          ],
        },
      ],
    };
  }

  render() {
    if (this.state.goods.length === 0) {
      return <section id="goods"></section>;
    }
    return (
      <section id="goods">
        {this.state.goods.map((item) => (
          <Brand
            brandName={item.brandName}
            products={item.products}
            key={item.brandName}
            cartHandler={this.props.cartHandler}
          />
        ))}
      </section>
    );
  }
}
