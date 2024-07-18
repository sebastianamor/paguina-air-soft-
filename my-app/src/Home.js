import React from 'react';
import './Home.css';
import profileImag from './imagenes/toledo.jpg';
import franLizama from './imagenes/franlizama.jpg';
import ale from './imagenes/ale reyes.jpg';
import nico from './imagenes/nicoleiba.jpg';
import firma from './imagenes/firma.jpg';

import { FcDiploma1 } from "react-icons/fc";

function Home() {
  return (
    <section className="home">
       <h2>Inicio</h2>
      <p className='iniciopag'>
        Somos un Estudio Jurídico especialista principalmente en el Área de Derecho Penal, pero contamos
        con diversos asociados especializados en Familia e Infancia, Responsabilidad Penal Adolescente,
        Derecho Civil y del Trabajo. Y para lograr las mejores soluciones legales, estos han sido formados
        en prestigiosas universidades a nivel nacional como internacional, entre ellas se encuentra la
        Pontificia Universidad Católica de Chile y la Universitat Pompeu Fabra de Barcelona, España.
        Nuestros abogados se enfocan en un servicio legal humano, cercano y de alto nivel, donde la
        relación de confianza con nuestros clientes es la base de todo; además contamos con Trabajadores
        Sociales y Psicólogos, con el fin de atender de manera eficaz y personalizada los requerimientos de
        cada uno de nuestros clientes.
      </p>
      <hr></hr>
      <div className="home-item">
        <img src={profileImag} alt="Perfil" className="profile-toledo" />
        <img src={firma} alt="firm" className="profile" />
        <div className="home-text">
          <div className="inicio" >
      </div>
      <div><h2>Defensor Penal</h2>
      <h1>Abogado Miguel Toledo</h1></div>
          <ul>
          <li><FcDiploma1 /> Defensor Penal</li>
          <li><FcDiploma1 /> Abogado Colegiado</li>

<li><FcDiploma1 /> Director Académico del Centro de Capacitación "Academia Internacional de Litigación"</li>
<li><FcDiploma1 /> Curso internacional de litigación sobre técnicas avanzadas del contraexamne,  California Western School Of Law, de EE.UU.</li>
<li><FcDiploma1 /> Certificado por la alianza interamericana de Abogacía oral de EE.UU.</li>
<li><FcDiploma1 /> Curso Criminalistica, Certificado por Criminalistic and Applied Criminology International Academy del Perú.</li>
<li><FcDiploma1 /> Certificación de la Asociación Chile de Seguridad (ACHS) como relator de Responsabilidad Legal.</li>
<li><FcDiploma1 /> Diplomado de Litigación Derecho de Familia de la Pontificia Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Diplomado de Litigación de Derecho Penal de la Pontificia Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Diplomado de Litigación Delitos Tributarios de la Pontifica Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Taller Internacional de Destreza en Litigación Oral, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de Preparación de los Testigos, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de la Teroría del Caso de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de Habilidades a la Hora de Litigar, de la Alianza Interamericana de Abogacía Oral EE.UU.</li>
<li><FcDiploma1 /> Diplomado Derecho Penal Universidad Pompeu Fabra, De España.</li>
<li><FcDiploma1 /> Diplomado Abuso Sexual y Violencia Habitual Infante Juvenil U.A.</li>
<li><FcDiploma1 /> C. Magister En Derecho Penal Universidad de Talca.</li>
<li><FcDiploma1 /> Magister en Ciencias Penales Universidad Pompe Fabra, De España.</li>
          </ul>
          </div>
          </div>
          <hr></hr>
          <div className="home-item">
          <img src={franLizama} alt="Perfil 2" className="profile-image" />
          <div className="home-text"></div>
          <p>
            <h2>Francisco Eduardo Lizama Acevedo (Abogado Asociado)</h2>
              <p>Abogado por la Excelentísima Corte Suprema</p>
             <h1>Antecedentes Académicos</h1>
             <p>Diplomado en Derecho Penal Sustantivo por la Universidad de Talca.
                Magíster en Derecho Penal Universidad de Talca
                Magíster en Derecho Penal Universitat Pompeau Fabra de España</p>
              <h1>Antecedentes Laborales</h1>
              <p>
                <ul>
              <li>-Tramitación y alegatos ante la Excelentísima Corte Suprema e Ilustrísima Corte de
               Apelaciones de Santiago.</li>
              <li>- Tramitación de causas penales tanto en calidad de querellante como de defensor, en
              todo tipo de procedimientos: Juicios ordinarios, procedimientos abreviados, juicios
              simplificados, audiencias de control de detención.</li>
              <li>- Tramitación de causas civiles, procedimientos ordinarios, sumarios, cobranzas
              Judiciales y tercerías.</li>
              <li>- Tramitación de causas de policía local, especializándose en accidentes de tránsito y
              asuntos de OS10</li>
              <li>-Oficial 4º grado XVI en el Juzgado de Garantía de Coquimbo.</li>
              </ul> </p>
          </p>
          </div>
          <hr></hr>
          <div className="home-item">
        <img src={ale} alt="Perfil 2" className="profile-image" />
        <div className="home-text"></div>
        <p>
          <h2>Sra. Alejandra Reyes López 
            (Jefa Departamento de Peritaje )</h2>
          <h1>Psicóloga Clínica Perito Forense</h1>
          <h1>Antecedentes Académicos</h1>
          <p>
          Psicóloga Universidad Diego Portales
          Diplomado en Psicología Jurídica Especialidad Perito Forense de la Pontificia
          Universidad Católica de Chile
          </p>
          <h1>Antecedentes profesionales</h1>
          <ul>
         <li> Psicóloga Clínica Perito Forense con más de 30 años de experiencia.
Centro para el Desarrollo Humano.  Consulta Psicológica</li>
<li>- Directora</li>
<li>- Psicodiagnósticos Adultos y Adolescentes</li>
<li>- Peritajes psicológicos forenses en los ámbitos de Tribunales de Familia, Garantía,
Laborales y de Juicio Oral en lo Penal.</li>
<li> <h1> Centro cultural San Antonio </h1> </li>
<li>2009- a 2016 Centro de Apoyo al Niño y la Familia-Sename, Programa de
Intervención Especializada PIE San Antonio, San Antonio, Región de Valparaíso.</li>
<li>- Directora Centro de atención a niños, niñas y adolescentes que presentan conductas
transgresoras y/o violentas, así como de aquellos que han tenido conductas
transgresoras en la esfera sexual.</li>
<li>- A cargo del diseño, ejecución y evaluación de estrategias de intervención en el ámbito
de la reparación a nivel individual, familiar y socio-comunitario.</li>
<li>- A cargo de la conducción de un equipo profesional multidisciplinario</li>
<li>- A cargo de la construcción y el fortalecimiento de la red interinstitucional asociada a
los ámbitos de derechos de los niños, niñas y adolescentes, así como al ámbito socio-
jurídico.
2005 a 2007 Hospital Claudio Vicuña, Servicio de Salud Valparaíso San Antonio</li>
<li>- Jefa Unidad de Salud Mental</li>
<li>- A cargo de la conducción de un equipo profesional interdisciplinario.</li>
<li>- A cargo del diseño, ejecución y evaluación de modelos de intervención destinados al
funcionamiento.</li>
<li>- Psicóloga: Psicoterapia Individual y Grupal para pacientes con diagnóstico de
Trastornos Psiquiátricos Severos y Residuales Compensados. Psicodiagnóstico Clínico
Diferencial.
1998 a 2004 Consultorio de Atención Primaria San Antonio, San Antonio V
Región.</li>
<li>- Psicoterapia individual Infanto-Juvenil.
 1995-2003 Arcadia Ltda.</li>
<li>- Directora de la institución dedicada al diseño y ejecución de programas de
intervención psicosocial.</li>
<li>- Psicóloga programas Desarrollo Juvenil y Encuentro Joven, de financiamiento
FOSIS y destinado al fortalecimiento de las habilidades organizaciones y la
participación juvenil organizada en sectores populares de la Provincia de San Antonio.</li>
<li>- Psicóloga programa Casa Taller, de financiamiento SENAME1994 a 1998
Municipalidad de San ANTONIO, V Región Psicóloga Oficina Comunal de la
Mujer</li>
<li> Atención Psicoterapéutica a Mujeres que viven Relaciones de Violencia. Talleres
terapéuticos y psicoeducativas para mujeres que viven relaciones de violencia.
1992-1996 Consejo de Defensa del Niño CAD Juan Mackenna</li>
<li>- Atención de casos de niños, niñas, adolescentes y sus familias, en condiciones de alto
riesgo biopsicosocial.
Asesoría Organizacional y de Recursos Humanos</li>

<li>2014    supervisora de Práctica Alumna Psicología Universidad Andrés Bello
Valparaíso</li>
<li>2005 Supervisora de Práctica y Tesis de Alumnos de Orientación Familiar (2) de la
Universidad de Los Lagos. Centro de Salud Tierra</li>
<li>2004 Supervisora de Práctica Alumnas (2) de Psicología Universidad Arcis. Consultorio
de Atención Primaria San Antonio</li>
<li>2001 Supervisora de Práctica Alumna de Psicología Universidad de Valparaíso.
Consultorio de Atención Primaria San Antonio.</li>
<li>1999 Supervisora de Práctica Alumna de Sociología de la Universidad de Chile.
Arcadia Ltda.</li>
<li>1992 Supervisora de Práctica Alumnos de psicología de la Universidad de Chile.</li>
          </ul>
          
          </p>
          </div>
          <hr></hr>
          <div className="home-item">
        <img src={nico} alt="Perfil" className="profile-image" />
        <div className="home-text">
          <div className="inicio" ></div>
          <p>
            <h2>Nicole Andrea Ibáñez</h2>
            <h1> (Administradora y Coordinadora de Causas)</h1>
            <h1><FcDiploma1 />  Ingeniera Comercial</h1>
          </p>
          </div>
          </div>
    </section>
  );
}

export default Home;
