import React, { useState } from 'react';
import './Services.css';
import portada1 from './imagenes/fotos.jpg';
import neumaticos from './imagenes/logo emp1.jpg';
import general from './imagenes/general.jpg'
import foto1 from './imagenes/dos a.jpg';
import foto2 from './imagenes/header2.jpg';
import llan3  from './imagenes/tres.jpg'
import llan5  from './imagenes/p1.jpg'
import neum1 from './imagenes/neumatico 1.jpg'
import neum2 from './imagenes/neumatico 2.jpg'
import neum3 from './imagenes/neumat3.jpg'
import neum4 from './imagenes/neumat4.jpg'
import neum5 from './imagenes/neumat5.jpg'

function Services() {
  const [selectedService, setSelectedService] = useState('');

  const handleButtonClick = (service) => {
    setSelectedService(service);
  };

  const renderMessage = (service) => {
    switch (service) {
      case 'llantas':
        return <p>
          <h1>fotos    
          </h1>
       <a   href="https://www.instagram.com/ciudadairsoft/profilecard/?igsh=MWp6eG13Mnk2OHppcg==" target="_blank"  > <div class="gallery"    >
  <img src={general}   alt="the beach"/>
  <img src={foto1}  alt="a girl doing kayak"/>
  <img src={foto2}  alt="a small boat in the sea"/>
  <img src={llan3}  alt="a mountain"/>
  <img src={llan5}  alt="a forest"/>
       </div></a>
        </p>
      case 'neumaticos':
      /*  return <p><h1>Neumáticos</h1>
            <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={neum1}/>
  <img src={neum2}/>
  <img src={neum3}/>
  <img src={neum4}/>
  <img src={neum5}/>
       </div></a>
        </p>;*/
        return null;
    }
  };

  return (
    <section className="services">
      <h2>fotos y videos</h2>
      <div className="service-buttons">
        <div className="service-item">
          <button onClick={() => handleButtonClick('llantas')}>
            <img src={portada1} alt="Llantas" className="civ" />
          </button>
          {selectedService === 'llantas' && <div className="service-message">{renderMessage('llantas')}</div>}
        </div>
           <div className="service-item">
          <button onClick={() => handleButtonClick('neumaticos')}>
            <img src={neumaticos} alt="Neumáticos" className="civ" />
          </button>
          {selectedService === 'neumaticos' && <div className="service-message">{renderMessage('neumaticos')}</div>}
         </div> 
      </div>
    </section>
  );
}

export default Services;
