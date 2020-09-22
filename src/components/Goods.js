import React from 'react';
import Brand from './Brand';

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
      return <section></section>;
    }
    return (
      <section>
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
