import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

import './_slider.scss'
import carouselOne from './images/carousel-1.png'
import carouselTwo from './images/carousel-2.png'
import carouselThree from './images/carousel-3.png'

class Slider extends Component {
  render(){
    return (
      <Carousel id="slider">
        <Carousel.Item>
          <img alt="carouselOne" src={carouselOne}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="carouselTwo" src={carouselTwo}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="carouselThree" src={carouselThree}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
};

export default Slider;
