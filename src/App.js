import React, {Component} from 'react';
import './resources/styles.css';


import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';
import { Element } from 'react-scroll';


class App  extends Component{
  render(){
    return (
      <div className="App" style={{
                                    height:'1000px',
                                    background:'cornflowerblue'

                                   }}>
         <Header/>
        <Element  name='featured'>
        <Featured/>
          </Element>

          <Element name='venue-info'>
          <VenueNfo/>
          </Element>

          <Element name='highlights'>
          <Highlight/>
          </Element>

          <Element name='pricing'>
          <Pricing/>
          </Element>

          <Element name='location'>
          <Location/>
          </Element>                      
        
        
        
        
        
        
        <Footer/>
      </div>
    );

  }
  
}

export default App;
 