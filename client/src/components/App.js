import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// component imports
// import ScrollToTop from './utils/ScrollToTop';

import Header from './header/Header';
import Landing from './landing/Landing';
import Blog from './blog/Blog';
import Events from './events/Events';
import Footer from './footer/Footer';
import Faq from './footer/Faq';
import Privacy from './footer/Privacy';
import ReturnAndExchange from './footer/ReturnAndExchange';
import Search from './footer/Search';
import Shipping from './footer/Shipping';
import TermsOfService from './footer/TermsOfService';
import BagsAndAccessories from './shop/bags_accessories/BagsAndAccessories';
import Jewelry from './shop/jewelry/Jewelry';
import Men from './shop/men/Men';
import Sales from './shop/sales/Sales';
import Socks from './shop/socks/Socks';
import Women from './shop/women/Women';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/be_a_pup_star" component={Blog}/>
          <Route exact path="/howloween" component={Events}/>
          <Route exact path="/shop/bags_and_accessories" component={BagsAndAccessories}/>
          <Route exact path="/shop/jewelry" component={Jewelry}/>
          <Route exact path="/shop/men" component={Men}/>
          <Route exact path="/shop/sales" component={Sales}/>
          <Route exact path="/shop/socks" component={Socks}/>
          <Route exact path="/shop/women" component={Women}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/privacy" component={Privacy}/>
          <Route exact path="/returns_exchange" component={ReturnAndExchange}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/shipping" component={Shipping}/>
          <Route exact path="/terms_of_service" component={TermsOfService}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
