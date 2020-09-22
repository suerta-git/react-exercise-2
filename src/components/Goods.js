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

  componentDidMount = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const reception = await response.json();
      this.receiveProducts(reception);
    } catch (err) {
      console.log(err);
    }
  };

  receiveProducts = (reception) => {
    const goods = [];
    reception.forEach((item) => {
      const theBrand = goods.find((b) => b.brandName === item.category);
      if (theBrand !== undefined) {
        theBrand.products.push({ name: item.name, price: item.price });
      } else {
        goods.push({
          brandName: item.category,
          products: [{ name: item.name, price: item.price }],
        });
      }
    });
    this.setState({
      goods: goods,
    });
  };
}
