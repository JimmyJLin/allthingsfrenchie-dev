import React, {Component} from 'react';
import Sliders from 'react-slick';

import './_multicards.scss'
import multiOne from './images/multi-1.jpg'
import multiTwo from './images/multi-2.png'
import multiThree from './images/multi-3.jpg'
import multiFour from './images/multi-4.jpeg'
import multiFive from './images/multi-5.jpg'

function NextArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}
class MultiCards extends Component {

  render(){
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div id="multi-cards" className="container-fluid">
        <h2 id="title">New Arrivals</h2>
        <Sliders {...settings}>

          <div id="multi_card_container">
            <div id="multi_card_img">
              <img src={multiOne} alt=""/>
            </div>
            <div id="multi_card_body">
              <h4>BABETTE FRENCH BULLDOG EARRINGS</h4>
              <p>$22.00</p>
            </div>
          </div>
          <div id="multi_card_container">
            <div id="multi_card_img">
              <img src={multiTwo} alt=""/>
            </div>
            <div id="multi_card_body">
              <h4>BAILEY THE FRENCH BULLDOG SCARF</h4>
              <p>$25.00</p>
            </div>
          </div>
          <div id="multi_card_container">
            <div id="multi_card_img">
              <img src={multiThree} alt=""/>
            </div>
            <div id="multi_card_body">
              <h4>ORIGAMI FRENCHIE TOTEBAG</h4>
              <p>$22.00</p>
            </div>
          </div>
          <div id="multi_card_container">
            <div id="multi_card_img">
              <img src={multiFour} alt=""/>
            </div>
            <div id="multi_card_body">
              <h4>ADORE-A-BULL NECKLACE</h4>
              <p>$25.00</p>
            </div>
          </div>
          <div id="multi_card_container">
            <div id="multi_card_img">
              <img src={multiFive} alt=""/>
            </div>
            <div id="multi_card_body">
              <h4>PRESS PAWS RING</h4>
              <p>$20.00</p>
            </div>
          </div>
        </Sliders>
      </div>
    );
  }
};

export default MultiCards;
