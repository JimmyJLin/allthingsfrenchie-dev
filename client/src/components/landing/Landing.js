import React, { Component } from 'react';

import './_landing.scss'
import Carousel from '../carousel/Carousel';
import MultiCards from '../carousel/MultiCards';
import Instagram from '../instagram/Instagram';

class Landing extends Component {

  render(){

    return (
      <div id="landing" className="container-fluid">
        <Carousel />
        <MultiCards />
        <Instagram />
      </div>
    );
  }
};

export default Landing;
