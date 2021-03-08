import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { PRODUCT } from './products';

  class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCT
        };
    }

  render() {
      return (
          <div className="App">
              <Navbar dark color="dark">
              <div className="container">
                  <NavbarBrand href="/">MotaDME</NavbarBrand>
              </div>
              </Navbar>
              <Directory products={this.state.products} />
          </div>
      );
  }
}



export default App;
