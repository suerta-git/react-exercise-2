import React from 'react';
import Header from './components/Header';
import Goods from './components/Goods';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <main className="app">
        <Header number={this.state.number} />
        <Goods cartHandler={this.cartHandler} />
      </main>
    );
  }

  cartHandler = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
}

export default App;
