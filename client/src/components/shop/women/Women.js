import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import * as actions from '../../../actions';

import Product from '../../utils/product/Product';

import './_women.scss';

class Women extends Component {
  componentDidMount() {
    this.props.fetchWomen();
  }

  renderWomenProducts() {
    const womenProducts = this.props.women;
    console.log(womenProducts);

    if(!womenProducts) {
      return
    } else {
      return womenProducts.map((product) => {
        return (
          <Product key={product.id} values={product}/>
        )
      })
    }

  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Women's Product Page</h1>
        <Grid>
          {this.renderWomenProducts()}

        </Grid>
        {/* <Product /> */}
      </div>
    )
  }
}


function mapStateToProps({ women }) {
  return { women }
}

export default connect(mapStateToProps, actions)(Women);
