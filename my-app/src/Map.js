import React from 'react';

function Map() {
  return (
    <div className="map">
      <h2>Ubicación</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.692620971495!2d-70.88425251208656!3d-33.63921110451083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662e1138916282b%3A0xf3b1a450078d2706!2sAv.%20Balmaceda%2020694%2C%208150000%20Talagante%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sjp!4v1734961276541!5m2!1ses!2sjp"
        width="400"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
