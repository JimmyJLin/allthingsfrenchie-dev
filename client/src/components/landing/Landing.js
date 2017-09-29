import React, { Component } from 'react';

import './_landing.scss'
import Carousel from '../carousel/Carousel';
import MultiCards from '../carousel/MultiCards';

class Landing extends Component {
  render(){
    return (
      <div id="landing" className="container">
        <Carousel />
        <MultiCards />

      </div>
    );
  }
};

export default Landing;
