import React from 'react';
import './Home.css';

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";


function Home() {
  return (
    <section   className="home">
       <h2>ciudad airsoft</h2>
      <p className='iniciopag'>
     
      </p>
      <hr></hr>
        <div className="home-text">
          <div className="inicio" >
          <p><h3></h3> </p>
          </div>
          </div>
          <div className="home-item">
         
          <div className="home-text"></div>
          </div>
          <hr></hr>
          <div className="home">
      
        <div className="iniciopag">
          <div className="inicio" ></div>
          <p>
          
          </p>
          </div>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/56976923044 "> <BiLogoWhatsappSquare  className="firma"  size={100}   />  </a>
          </div>
          <hr></hr>
          <div className="home-r">
        <div className="home-text"></div>
          <p>siguenos en estas redes sociales </p>
          <a href="https://www.instagram.com/jmvimports_llantas/" target="_blank" rel="noopener" className="firmai" >
          <FaInstagramSquare icon={<FaInstagramSquare />}  className="firma"  size={50} /></a>
          <a href="https://www.facebook.com/jmvimports/" target="_blank" rel="noopener noreferrer" className="firmaf" >
       <FaFacebookSquare icon={<FaFacebookSquare />}  className="firma"  size={50} /></a>
          </div>
          
    </section>
  );
}

export default Home;
