import React, {Component} from 'react';
import Sliders from 'react-slick';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './_multicards.scss'

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

  componentDidMount() {
    this.props.fetchNewArrivals();
  }

  removeDuplicates(originalArray, objKey) {
    var trimmedArray = [];
    var values = [];
    var value;

    for(var i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if(values.indexOf(value) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(value);
      }
    }

    return trimmedArray;

  }


  renderCards(){
    const newArray = this.removeDuplicates(this.props.newArrivals, 'product_id')

    console.log("uniquData", newArray);
    return newArray.map(({product_id, title, images, variants }) => {
      return (
        <div key={product_id} id="multi_card_container">
          <div id="multi_card_img">
            <img src={images[0].src} alt=""/>
          </div>
          <div id="multi_card_body">
            <h4>{title}</h4>
            <p>{variants[0].price}</p>
          </div>
        </div>
      )
    })
  }

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

          {this.renderCards()}

        </Sliders>
      </div>
    );
  }
};

function mapStateToProps({ newArrivals }) {
  return { newArrivals }
}

export default connect(mapStateToProps, actions)(MultiCards);
