import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './_instagram.scss'

class Instagram extends Component {
  componentDidMount() {
    this.props.fetchNewInstagramFeeds();
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

  renderFeeds() {
    // const newArray = this.removeDuplicates(this.props.instagram.data, 'id')
    const instaData = this.props.instagram.data
    console.log('instagramData:', instaData)

    if(!instaData) {
      return
    } else {
      return instaData.map(({id, likes, link, caption, comments, images: {standard_resolution: {url}}}) => {
        return (
          <Col id="insta_frame" key={id} xs={8} sm={3} md={3}>
            <Image id="insta_img" src={url} thumbnail responsive/>
          </Col>
        )
      })
    }
  }

  renderMobileFeeds() {
    // const newArray = this.removeDuplicates(this.props.instagram.data, 'id')
    const instaData = this.props.instagram.data
    console.log('instagramData:', instaData)

    if(!instaData) {
      return
    } else {
      return instaData.slice(0, 6).map(({id, likes, link, caption, comments, images: {standard_resolution: {url}}}) => {
        return (
          <Col id="insta_frame" key={id} xs={8} sm={3} md={3}>
            <Image id="insta_img" src={url} thumbnail responsive/>
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <div id="instagram" className="container-fluid">
        <h2>
          Instafeed
        </h2>
        <Grid className="container-fluid">
          <Row id="large_view" className="'show-grid'">
            {this.renderFeeds()}
          </Row>
          <Row id="mobile_view">
            <h2>
              Heloo from Mobile
            </h2>
            {this.renderMobileFeeds()}

          </Row>
        </Grid>
      </div>
    )
  }
}


function mapStateToProps({ instagram }) {
  return { instagram }
}

export default connect(mapStateToProps, actions)(Instagram);
