import React from 'react';
import { Col, Image } from 'react-bootstrap';

import './_product.scss';
import img from './product.jpg';

export default ({values: {id, images, title, variants}}) => {
  // console.log('product', product)
  // console.log('product', product.values.title)

  return (
    <Col id={id} xs={9} s={6} md={3} className="card_container">
      <div id="card_img">
        <img src={images[0].src} alt=""/>
      </div>
      <div id="card_body">
        <h4>{title}</h4>
        <p>{variants[0].price}</p>
      </div>
    </Col>
  )
}
