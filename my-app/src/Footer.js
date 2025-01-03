import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";


function Footer({ onSelect } ) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
        <ul>
        <li>  <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('home')}>Inicio</button></li>
        <li>  <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('services')}>servicios</button></li>
        <li> <button   className="bn3637 bn38 " onClick={() => onSelect('contact')}>Contacto</button></li>
        <li>  <button   className="bn3637 bn38 "  href='/'  onClick={() => onSelect('location')}>Ubicación</button></li>
        <li> <button   className="bn3637 bn38 "   href='/'  onClick={() => onSelect('blog')}>blog</button></li>
      </ul>

        </div>
        <div>
      <a href="https://jp.linkedin.com/in/sebastian-jacob-moreira-vergara-7b76717a" target="_blank" rel="noopener noreferrer" className="firma"  >
      Desarrollador moreiratek< FaLinkedin icon={FaLinkedin}  className="firma" />
      </a>
    </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <ul>
          <li ><i ><span ><a href="tel:+56 9 7479 4026" title="telefono contacto"><FcPhone />+56 9 7479 4026 </a></span></i></li>
          <li ><i ><span ><a href="mailto:jmvimports01@gmail.com " title="email de contacto y cotiazacion"><FcAddressBook />ciudadairsoft@gmail.com</a></span></i></li>
            <li ><i ><span> <a href='https://maps.app.goo.gl/Uj5mXHBFWgPEoNer8'  > <FcDepartment />Av. Balmaceda 20694, 9670858 Talagante, Región Metropolitana, entrada por calle Loreto</a></span></i></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

