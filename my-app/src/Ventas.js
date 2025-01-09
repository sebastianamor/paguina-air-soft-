import React from 'react';
import foto1 from './imagenes/foto1.jpg'
import foto2 from './imagenes/foto2.jpg'

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";

function Ventas({onSelect}) {
  return (
      <section className="home">
      
        <hr></hr>
          <div className="home-text">
            <div className="inicio" >
            </div>
            </div>
            <hr></hr>
            <div className="home">
          <div className="iniciopag">
            <div className="inicio" ></div>
            <p  className='final' >
            ¡Prepárate para la acción con nuestros insumos  airsoft! ofrecemos una amplia gama de equipos diseñados para maximizar la diversión y el rendimiento en cada partida. Desde replicas de alta precisión hasta réplicas de airsoft realistas, contamos con opciones para jugadores principiantes y expertos.
Además, te asesoramos para que elijas el equipo perfecto según tu estilo de juego y necesidades. Equiparte con lo mejor nunca fue tan fácil. ¡Visítanos y lleva tu experiencia al siguiente nivel!
            </p>
            </div>
            <hr></hr>
            <div className='bodyA'  >
            <div class="containeA">
           
             <div class="box right">
             <img   src={foto1}  alt='foto1' className='equipo1'  /> 
             <img   src={foto2}  alt='foto1' className='equipo1'  /> 

             <p> ventas de variedad de insumos de airsoft  </p>
             <button class="reserve-btn"  onClick={() => onSelect('contact')} >Cotiza</button>
            </div>
            
            </div>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/5697479402"> <BiLogoWhatsappSquare  className="firma"  size={100}   />  </a>
            </div>
            </div>
            <hr></hr>
            <div className="home-r">
          <div className="home-text"></div>
            <p>siguenos en estas redes sociales </p>
            <a href=" https://www.instagram.com/ciudadairsoft/?igsh=MWp6eG13Mnk2OHppcg%3D%3D " target="_blank" rel="noopener" className="firmai" >
            <FaInstagramSquare icon={<FaInstagramSquare />}  className="firma"  size={50} /></a>
            <a href=" https://www.facebook.com/profile.php?id=100078725806219" target="_blank" rel="noopener noreferrer" className="firmaf" >
         <FaFacebookSquare icon={<FaFacebookSquare />}  className="firma"  size={50} /></a>
            </div>
            
      </section>
  );
}

export default Ventas;