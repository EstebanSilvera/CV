import React from 'react'
import foto from "../img/foto.png"
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className=''>

      <div className='container mx-auto flex shadow-2xl my-6'>

        {/* Parte de la izquierda */}

        <div className='bg-blue-200 w-3/6'>

          <img className='mx-auto p-8 mt-8 ' src={foto} alt='Foto HV' />

          <div className='text-2xl font-sans ml-14'>
            <p className='flex items-center'><MdEmail className='size-10 m-1' /> estebansilvera023@gmail.com</p>
            <p className='flex items-center'> <PiPhoneFill className='size-10 m-1' />3013144857</p>
            <p className='flex items-center'> <SiGooglemaps className='size-10 m-1' />Baranoa, Atlántico</p>
            <a className='flex items-center' href='https://github.com/EstebanSilvera'> <FaGithub className='size-10 m-1'/>https://github.com/EstebanSilvera</a>
          </div>

          <h4 className='text-3xl font-mono text-center text-sky-600 mt-8'><strong>HABILIDADES</strong></h4>

          <div className='bg-sky-800 ml-2 m-2 w-84 h-2' />

          <div className='text-center text-3xl'>
            <strong>
              <p className='my-2'>HTML y CSS</p>
              <p className='my-2'>JAVASCRIPT</p>
              <p className='my-2'>PHP</p>
              <p className='my-2'>JAVA</p>
              <p className='my-2'> SQL</p>
              <p className='my-2'>C#</p>
            </strong>
          </div>


          <div className='text-2xl p-8 '>

            <p><strong>Manejo de Framework:</strong> angular, vue.js y laravel.</p>
            <p><strong>Manejo de:</strong> Node js, react.</p>

            <p className='py-2'>• Creatividad e Innovación</p>
            <p className='py-2'>• Trabajo en equipo y bajo presión</p>
            <p className='py-2'>• Busco ideas y soluciones a nivel de backend y frontend</p>
            <p className='py-2'>• Diseño y desarrollo de aplicaciones</p>

          </div>


          <h4 className='text-3xl font-mono text-center text-sky-600 mt-2'><strong>REFERENCIAS</strong></h4>

          <div className='bg-sky-800 ml-2 m-2 w-84 h-2' />

          <div className='text-2xl px-16'>
            <p className='py-4'><strong>Helmun Andrés Utria Blanco</strong> –
              Trabajador Independiente,<br />
              3046152854.</p>
            <p className='py-4'><strong>Karla Andrea Rodríguez Pérez</strong> –
              Nutricionista Dietista,<br />
              3024277631.</p>
          </div>


        </div>



        {/* parte de la derecha */}

        <div className='w-full'>

          <div >
            <h1 className='text-5xl text-center font-mono mt-16 '><strong>ESTEBAN JOSE SILVERA <br /> SCALDAFERRO</strong></h1>
            <h2 className='text-5xl font-mono text-sky-600 m-5 ml-14'><b>Tecnologo en gestion de sistemas <br /> informaticos </b></h2>

            <h4 className='text-3xl font-mono text-sky-600 ml-16'><strong>PERFIL</strong></h4>

            <div className='bg-sky-800 ml-6 m-2 w-84 h-2' />

            <p className='text-2xl font-serif mx-16 mt-6' > Tecnólogo en sistema con conocimiento de varias plataformas
              centrado en los distintos lenguajes de programación, Conocimiento en
              backend y frontend, también en HTML, CSS, JavaScript, con manejo
              de varios framework y librerías, creatividad para el diseño web y
              adaptación efectiva a los lenguajes de programación, capaz de
              diseñar, desarrollar, probar, implementar, mantener y mejorar
              cualquier aplicación de software.<br />
              Con buen desempeño en la solución de problemas y toma de
              decisiones con el propósito de alcanzar los objetivos de la empresa y
              del equipo de trabajo.</p>

            <h4 className='text-3xl font-mono text-sky-600 mt-8 ml-16'><strong>FORMACIÓN ACADEMICA</strong></h4>

            <div className='bg-sky-800 ml-6 m-2 w-84 h-2' />

            <p className='text-2xl font-serif mx-16 mt-6'><strong>Tecnólogo:</strong> Tecnólogo en Gestión de Sistemas Informáticos,
              Institución Universitaria de Barranquilla, Barranquilla – Atlántico, 2023
            </p>
            <p className='text-2xl font-serif mx-16 mt-6'><strong>Técnico:</strong> Técnico en Mantenimiento de sistemas informáticos,
              Institución Universitaria ITSA, Barranquilla, Atlántico, 2022
            </p>
            <p className='text-2xl font-serif mx-16 mt-6'><strong>Secundaria:</strong> Normalista superior - especialidad pedagogía, Escuela
              Normal Superior Santa Ana, Baranoa, 2016.
            </p>

            <h4 className='text-3xl font-mono text-sky-600 mt-8 ml-16'><strong>EXPERIENCIA DE VOLUNTARIADO, SEMINARIOS, <br />CURSOS, ETC…</strong></h4>

            <div className='bg-sky-800 ml-6 m-2 w-84 h-2' />

            <p className='text-2xl font-serif mx-16 mt-2'>He realizado proyectos educativos tales como:</p>
            <p className='text-2xl font-serif mx-16 mt-2'>• Aplicación de inventario para el manejo de equipos de redes y
              cómputo para la empresa AUTOMOTORES FUJIYAMA S.A.S.</p>
            <p className='text-2xl font-serif mx-16 mt-2'>• Diseño y desarrollo de un prototipo de un aplicativo web y móvil de
              denuncias sobre casos de acoso o matoneo en los colegios públicos y
              privados del distrito de Barranquilla.</p>
            <p className='text-2xl font-serif mx-16 mt-2'>• Web App personalizada para pedidos en la PIZZERIA BROTHER’S
              PIZZA LA 40</p>
            <p className='text-2xl font-serif mx-16 mt-2'>• Seminario técnico profesional “Emprendimiento en la Era Digital” –
              Sede ITSA, Barranquilla.</p>



            <h4 className='text-3xl font-mono text-sky-600 mt-8 ml-16'><strong>IDIOMAS Y CONOCIMIENTO DE INFORMACIÓN</strong></h4>

            <div className='bg-sky-800 ml-6 m-2 w-84 h-2' />

            <p className='text-2xl font-serif mx-16 my-8'>• Idioma Extranjero: inglés, 7 módulos aprobados en el Centro de
              Idiomas teórico – práctico, ITSA</p>
            <p className='text-2xl font-serif mx-16 my-8'>• Sistemas Operativos e informáticos: Microsoft office: Word, Power
              point, Publisher, Excel.</p>

          </div>



        </div>

      </div>

    </div>
  )
}

export default Home