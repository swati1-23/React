// App.js

import React, { Component } from 'react';
import Header from './component/Header';
import Slider from './component/Slider';
import CallUs from './component/CallUs';
import Content from './component/Content';
import Footer from './component/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <CallUs />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;