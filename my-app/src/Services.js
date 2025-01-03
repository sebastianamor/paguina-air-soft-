import React, { useState } from 'react';
import './Services.css';
import llantas from './imagenes/llantas de autos.jpg';
import neumaticos from './imagenes/neumaticos.jpg';
import butacas from './imagenes/butacas racer.jpg';
import llan1  from './imagenes/llanta 1.jpg';
import llan2  from './imagenes/llanta 2.jpg'
import llan3  from './imagenes/llanta 3.jpg'
import llan4  from './imagenes/llanta 4.jpg'
import llan5  from './imagenes/llanta 5.jpg'
import neum1 from './imagenes/neumatico 1.jpg'
import neum2 from './imagenes/neumatico 2.jpg'
import butaca1 from './imagenes/butca 1.jpg'
import buta2  from './imagenes/butaca2.jpg'
import buta3 from './imagenes/butaca3.jpg'
import buta4 from './imagenes/butaca5.jpg'
import buta5 from './imagenes/butaca6.jpg'
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
  <img src={llan1}   alt="the beach"/>
  <img src={llan2}  alt="a girl doing kayak"/>
  <img src={llan3}  alt="a small boat in the sea"/>
  <img src={llan4}  alt="a mountain"/>
  <img src={llan5}  alt="a forest"/>
       </div></a>
        </p>
      case 'neumaticos':
        return <p><h1>Neumáticos</h1>
            <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={neum1}/>
  <img src={neum2}/>
  <img src={neum3}/>
  <img src={neum4}/>
  <img src={neum5}/>
       </div></a>
        </p>;
      case 'butacas':
        return <p><h1>Butacas</h1>
             <a   href="https://www.instagram.com/jmvimports_llantas/" target="_blank"  > <div class="gallery"    >
  <img src={butaca1}/>
  <img src={buta2}/>
  <img src={buta3}/>
  <img src={buta4}/>
  <img src={buta5}/>
       </div></a>
         </p>;
      default:
        return null;
    }
  };

  return (
    <section className="services">
      <h2>fotos y videos</h2>
      <div className="service-buttons">
        <div className="service-item">
          <button onClick={() => handleButtonClick('llantas')}>
            <img src={llantas} alt="Llantas" className="civ" />
          </button>
          {selectedService === 'llantas' && <div className="service-message">{renderMessage('llantas')}</div>}
        </div>
        <div className="service-item">
          <button onClick={() => handleButtonClick('neumaticos')}>
            <img src={neumaticos} alt="Neumáticos" className="civ" />
          </button>
          {selectedService === 'neumaticos' && <div className="service-message">{renderMessage('neumaticos')}</div>}
        </div>
        <div className="service-item">
          <button onClick={() => handleButtonClick('butacas')}>
            <img src={butacas} alt="Butacas" className="civ" />
          </button>
          {selectedService === 'butacas' && <div className="service-message">{renderMessage('butacas')}</div>}
        </div>
      </div>
    </section>
  );
}

export default Services;
