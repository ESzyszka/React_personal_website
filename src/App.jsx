
import React, { Component } from "react";
import Hedder from './components/hedder/hedder';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';


class App extends Component {
  render() {
    return (

          <>
           
            <Hedder />
            <Nav />
            <About />
            <Contacts />
            <Experience />
            <Footer />
            <Portfolio />
            <Services />
          </>
    );
  }
}

export default App;
