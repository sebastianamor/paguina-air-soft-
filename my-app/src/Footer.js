import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>Sobre Nosotros</h3>
          <p>
            Nuestros abogados penalistas tienen un alto grado de especialización en el ámbito del Derecho Penal, y pueden prestarle la asistencia y el asesoramiento necesario para velar por sus intereses en todos los delitos contemplados por el Código Penal de Chile.
          </p>
      <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-toledo-cortez-88915b75/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="firma" >
      < FaLinkedin icon={FaLinkedin}  className="firma"  size={100}  />
      </a>
      <a href="https://www.instagram.com/miguelangeltoledocortez?utm_source=qr" target="_blank" rel="noopener noreferrer" className="firma" >
       <FaInstagram icon={<FaInstagram />}  className="firma"  size={100} />
      </a>
        </div>
        <div>
      <a href="https://jp.linkedin.com/in/sebastian-jacob-moreira-vergara-7b76717a" target="_blank" rel="noopener noreferrer" className="firma"  >
      Desarrollador moreiratek< FaLinkedin icon={FaLinkedin}  className="firma" />
      </a>
    </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <ul>
            <li><FcPhone /> +56 9 9293 0308 </li>
            <li> <FcAddressBook /> ibanez@dppjtoledoycia.cl </li>
            <li><FcDepartment /> Huérfano N°1147, Of.1025, Santiago Centro, Chile</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

