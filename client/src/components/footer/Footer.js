import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './_footer.scss';

class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <Grid>
          <Row className="show-grid">
            <Col xs={18} sm={4} md={4}>
              <h5 className="title">HELP</h5>
              <div id="links_container">
                <ul>
                  <li>
                    <Link to={'/shipping'}>Shipping</Link>
                  </li>
                  <li>
                    <Link to={'/returns_exchange'}>Return & Exchange</Link>
                  </li>
                  <li>
                    <Link to={'/faq'}>FAQ</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={18} sm={4} md={4}>
              <h5 className="title">QUICK LINKS</h5>
              <div id="links_container">
                <ul>
                  <li>
                    <Link to={'/search'}>Search</Link>
                  </li>
                  <li>
                    <Link to={'/privacy'}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={'/terms_of_service'}>Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={18} sm={4} md={4}>
              <h5 className="title">SUBSCRIBE</h5>
              <div id="links_container">
                <p>Receive 15% off when you subscribe to our pawsome newsletter!</p>
                <form>
                  <Row>
                    <input type="text"/>
                    <Button className="btn">OK</Button>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer;
