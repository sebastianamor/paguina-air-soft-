import React from 'react';
import './Home.css';
import dosa from './imagenes/dos a.jpg'
import tresP from './imagenes/tres.jpg'
import general from './imagenes/general.jpg'
import equipo1 from './imagenes/p1.jpg'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";


function Home({ onSelect }) {
  return (
    <section className="home">
      <div>
      <p className='iniciopag'>
      <img src={dosa} alt='dosa' className='dosa' /> 
      "Somos dos apasionados del Paintball y Airsoft con más de 11 años de experiencia en estos emocionantes deportes.
       Nuestra pasión nos llevó a crear un campo de juego exclusivo para que los amantes de estas actividades puedan disfrutar de una experiencia única y segura.
      </p>
      </div>
      <hr></hr>
        <div className="home-text">
          <div className="inicio" >
          </div>
          </div>
          <div className="home-item">
          <img src={tresP} alt='tres' className='tres' /> 
          Nuestra cancha está diseñada para proporcionar un entorno de juego emocionante y desafiante, con obstáculos y terrenos variados que pondrán a prueba tus habilidades y estrategias.
          <div className="home-text"></div>
          </div>
          <hr></hr>
          <div className="home">
        <div className="iniciopag">
          <div className="inicio" ></div>
          <p  className='final' >
          ¿Estás listo para unirte a la acción y vivir una experiencia inolvidable? ¡Ven y únete a nosotros en nuestra cancha de Paintball y Airsoft!"
          </p>
          </div>
          <hr></hr>
          <div className='bodyA'  >
          <div class="containeA">
          <div class="box left">
          <p>
          <img src={general} alt='general' className='general' /> 
            Entrada general: 
          6.000</p>
          <button class="reserve-btn" onClick={() => onSelect('')}>Reserva</button>
           </div>
           <div class="box right">
           <img src={equipo1} alt='equipo1' className='equipo1' /> 
           <p>Arriendo de equipo: 25000</p>
           <button class="reserve-btn">Reserva</button>
          </div>
          <div class="box right">
           <p> hacemos eventos de todo tipo !  precios y cotizaciones aqui   </p>
           <button class="reserve-btn">Reserva</button>
          </div>
          </div>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/56976923044 "> <BiLogoWhatsappSquare  className="firma"  size={100}   />  </a>
          </div>
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
