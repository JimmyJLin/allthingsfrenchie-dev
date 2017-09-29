import React, { Component } from 'react';

import './_landing.scss'
import Slider from '../slider/Slider';

class Landing extends Component {
  render(){
    return (
      <div id="landing">
        <Slider />

      </div>
    );
  }
};

export default Landing;
