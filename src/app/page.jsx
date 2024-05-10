"use client"

import Image from 'next/image';
import imageHero from "../../public/images/Water-PNG-Transparent.png"
import logo from "../../public/images/logoHero.png"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const calculateCountdown = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 3, 30); // El 30 de abril (meses en JavaScript son base 0, por lo que 3 representa abril)
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { days, hours };
  }

  const [showLauncher, setShowLauncher] = useState(false);
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(()=>{
    setShowLauncher(true);
    return () => setShowLauncher(false)
  },[]);

  useEffect(() => {
    let timer;
    if(showLauncher) {
      timer = setInterval(() => {
        setCountdown(calculateCountdown());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showLauncher]);

  const handleCloseLauncher = () => {
    setShowLauncher(false);
  }

  return (
    <div className="bg-zinc-800 relative">
      {
        showLauncher && 
        <div className="w-full fixed bottom-0 left-0 h-[100px] bg-sky-900 opacity-90 text-white z-50 text-[30px] font-bold">
            <div className="w-full relative h-[100px] flex items-center justify-center">
              <div onClick={handleCloseLauncher} className="absolute top-0 right-2 text-[20px] font-extrabold cursor-pointer">x</div>
              INAWAY Official launch ! ... faltan {countdown.days} dias {countdown.hours} hrs.
            </div>            
        </div>
      }
      <nav className="w-full flex gap-x-3 justify-end items-center h-[60px] pr-4 pt-4">
          <Link className="px-4 py-2 border-[1px] border-sky-500 text-sky-300 hover:bg-sky-500 hover:text-white transition-colors rounded-xl" href={"/auth/login"}>Iniciar Sesión</Link>
          <Link className="px-4 py-2 border-[1px] bg-sky-500 border-sky-500 hover:bg-sky-600 transition-colors font-bold text-white rounded-xl" href={"/auth/franquicias"}>CANON Franquicias</Link>
      </nav>
      <div className="top-[70px] left-[45%] w-[200px] h-[200px] absolute">
        <Image
          src={logo} placeholder="blur" quality={100} sizes="100vw" className="w-[200px] h-[200px]" 
          alt=''
          />
      </div>

      {/* Contenido de la landing page */}
      <div className="w-full">
        <div className="relative w-full h-[800px]">
          <div className="absolute top-0 left-0 h-full w-full custom-dark-gradient"></div>
          <div className="absolute lg:top-[25%] lg:left-[20%] top-[10%] left-[8%] flex flex-col text-left">
            <h1 className="lg:text-[90px] md-[80px] text-[60px] text-left mb-1 text-sky-400 font-extrabold">
              INAWAY
            </h1>
            <p className="text-left md:text-[30px] text-[17px] text-white">
              Transforma la inversión en
              <span className="text-blue-400 font-extrabold md:text-[40px] text-[20px]">
                {" "}AGUA
              </span>
            </p>
            <p className="mb-7 text-left md:text-[25px] text-[15px] text-gray-200">
              Y PROMUEVE
              <span className="text-white font-extrabold md:text-[27px] text-[18px]">
                {" "}SOSTENIBILIDAD AMBIENTAL
              </span>
            </p>
            <div className="flex sm:flex-row flex-col items-center sm:gap-x-4 gap-4">
              <button
                className="sm:w-auto w-[200px] px-9 py-3 font-semibold rounded-lg text-white bg-sky-500 md:text-[20px] text-[17px] hover:bg-sky-600 transition delay-50 shadow-xl">
                Sobre nosotros
              </button>

              <button
                className="sm:w-auto w-[200px] px-5 py-3 font-bold border-[2px] border-sky-500 rounded-lg text-sky-300 bg-transparent md:text-[20px] text-[17px] hover:bg-sky-600 shadow-xl hover:text-white transition delay-50">
                Contáctanos
              </button>
            </div>
          </div>
          <Image
            src={imageHero} alt="Descripción" placeholder="blur" priority className="h-[800px] w-full object-cover" />
        </div>
        <div className="secondLandingFirstSection flex flex-col w-full justify-center items-center pt-8 xl:p-0 p-3">
          <div
            className="xl:w-[1200px] w-full flex md:flex-row flex-col md:gap-0 gap-4 lg:justify-between justify-around mb-20">
            <div className="md:w-[29%] w-full flex flex-col justify-center items-center text-center">
              <h3 className="text-[35px] font-extrabold text-sky-300 mb-1">
                <i className="fa-solid fa-hand-holding-droplet"></i> Propósito
              </h3>
              <p className="text-center text-[20px] text-gray-200 font-semibold">
                INAWAY es un proyecto en desarrollo que busca transformar la
                inversión en agua y promover la sostenibilidad ambiental
              </p>
            </div>
            <div className="md:w-[29%] w-full flex flex-col justify-center items-center text-center">
              <h3 className="text-[35px] font-extrabold text-sky-300 mb-1">
                <i className="fa-brands fa-bitcoin"></i> Tokenización
              </h3>
              <p className="text-center text-[20px] text-gray-200 font-semibold">
                Operamos en la red
                <span className="text-sky-500 font-bold">Binance Smart Chain (BNB)</span>
                y requiere el uso de la billetera digital Metamask para participar
                en la plataforma.
              </p>
            </div>
            <div className="md:w-[29%] w-full flex flex-col justify-center items-center text-center">
              <h3 className="text-[35px] font-extrabold text-sky-300 mb-1">
                <i className="fa-solid fa-pen-nib"></i> Compromiso
              </h3>
              <p className="text-center text-[20px] text-gray-200 font-semibold">
                Estamos comprometidos a proporcionar una plataforma segura y
                transparente para la inversión en agua y esperamos contar con su
                apoyo.
              </p>
            </div>
          </div>

          <div className="xl:w-[1200px] w-full flex flex-col bg-zinc-700 hover:bg-zinc-900 cursor-pointer shadow-xl rounded-xl mb-5 containerDivChangeColor"
            style={{ transition: "background-color 1.2s ease" }}>
            <div className="w-full py-8 px-8">
              <h3 className="text-[35px] font-extrabold text-white">Introducción</h3>
            </div>
            <div className="w-full flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full flex justify-center">
                <div className="w-full rounded-xl px-8">
                  <p className="text-[19px] text-gray-200 font-bold mb-1">
                    La tokenización del agua, mediante la cual el agua se
                    convierte en activos digitales intercambiables en una
                    plataforma blockchain, representa una
                    <span className="text-sky-400">solución innovadora</span> para
                    abordar estos desafíos y garantizar un acceso equitativo y
                    sostenible al agua para todos
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex justify-center px-8">
                <div className="text-[50px] font-extrabold overflow-hidden divChangeColor"
                  style={{ lineHeight: "1", marginLeft: "-10px" }}>
                  <p className="m-0 p-0">
                    <span className="changeColor">WAY</span>AGUATOKENBLOCKCHAINWEB3<span
                      className="changeColor">WATER</span>
                  </p>
                  <p className="m-0 p-0" style={{ lineHeight: "1", marginLeft: "-10px" }}>
                    AGUATOKENBLOCKCHAINWEB3<span className="changeColor">INAWAY</span>TECHNNICIANSREPAIR
                  </p>
                  <p className="m-0 p-0" style={{ lineHeight: "1", marginLeft: "-10px" }}>
                    NESS<span className="changeColor">INAWAY</span>AGUATOKENBLOCKCHAINWEB3
                  </p>
                  <p className="m-0 p-0" style={{ lineHeight: "1", marginLeft: "-10px" }}>
                    <span className="changeColor">INAWAY</span>AGUATOKENBLOCKCHAINWEB3
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 mb-5">
              <p className="text-[18px] text-sky-400 font-bold cursor-pointer">
                Ver mas sobre productos
              </p>
            </div>
          </div>
          <div className="xl:w-[1200px] w-full flex lg:flex-row flex-col lg:gap-x-5 gap-5 mb-20">
            <div className="lg:w-1/2 w-full flex flex-col bg-zinc-700 cursor-pointer hover:bg-zinc-900 shadow-xl rounded-xl"
              style={{ transition: "background-color 1.2s ease" }}>
              <div className="w-full py-8 px-8">
                <h3 className="text-[35px] font-extrabold text-white">
                  Beneficios Generales
                </h3>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex justify-center">
                  <div className="w-full rounded-xl px-8">
                    <p className="text-[17px] text-gray-200 font-bold mb-1">
                      &#9679;
                      <span className="text-sky-300 font-extrabold text-[20px]">CALIDAD</span>
                      de los productos y precios competitivos
                    </p>
                    <p className="text-[17px] text-gray-200 font-bold mb-1">
                      &#9679; Nuestro desarrollo de marca e Imagen del negocio
                      <span className="text-sky-300 font-extrabold"></span>
                    </p>
                    <p className="text-[17px] text-gray-200 font-bold mb-1">
                      &#9679; Capacidad de atender distintos mercados
                      <span className="text-sky-300 font-extrabold"></span>
                    </p>
                    <p className="text-[17px] text-gray-200 font-bold mb-1">
                      &#9679; Mix de productos con
                      <span className="text-sky-300 font-extrabold text-[20px]">VENTAS</span>
                      todo el año
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <Image
                    src="/images/general2.png" className="w-[250px]" alt=""
                    width={150} height={150}
                  />
                </div>
              </div>
              <div className="px-8 mb-5">
                <p className="text-[18px] text-sky-300 font-bold cursor-pointer">
                  Ver mas sobre Beneficios
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col bg-zinc-700 cursor-pointer hover:bg-zinc-900 shadow-xl rounded-xl"
              style={{ transition: "background-color 1.2s ease" }}>

              <div className="w-full py-8 px-8">
                <h3 className="text-[35px] font-extrabold text-white">Visión</h3>
              </div>
              <div className="w-full flex flex-col mb-3">
                <div className="w-full flex justify-center mb-2">
                  <div className="w-full rounded-xl px-8">
                    <p className="text-[18px] text-gray-200 font-bold mb-1">
                      La visión de INAWAY es convertirse en un líder global en la
                      tokenización del agua, ofreciendo soluciones tecnológicas
                      avanzadas para la gestión eficiente y equitativa de este
                      recurso vital. Nuestra visión es promover la sostenibilidad
                      ambiental, la justicia social y el desarrollo económico a
                      través de la democratización del acceso al agua.
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center mb-5">
                  <Image
                    src="/images/franquicias.jpg" className="w-[240px]" alt="franquicias"
                    width={130} height={130}
                  // AJUSTAR TAMAÑO DE LA IMAGEN SEGÚN SEA NECESARIO
                  />
                </div>
              </div>
              <div className="px-8 mb-6">
                <p className="text-[18px] text-sky-300 font-bold cursor-pointer">
                  Ver mas sobre la visión
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[1200px] w-full flex flex-col mb-20">
            <h3 className="w-full text-center text-[50px] text-white font-extrabold mb-3">
              Conoce sobre las fases del proyecto
            </h3>
            <p className="w-full text-center text-[20px] text-gray-200 font-semibold mb-7">
              El proyecto INAWAY se divide en varias fases principales:
            </p>
            <div className="w-full flex lg:flex-row flex-col gap-x-4 mb-8">
              <div
                className="lg:w-1/5 w-full opacity-60  rounded-xl shadow-xl py-4 px-2 flex flex-col justify-center items-center">
                <p className="w-full text-center text-sky-300">
                  Fase <span className="font-bold text-sky-400">UNO</span>
                </p>
                <p className="w-full text-center text-[23px] font-extrabold mb-4 text-white">
                  LANZAMIENTO
                </p>
                <i className="fa-brands fa-gg-circle w-full text-center text-sky-400 text-[90px] mb-2"></i>
                <p className="text-[17px] w-full text-center font-semibold text-gray-200 mb-2">
                  Adquiere tus token INAWAY
                </p>
                <button className="cursor-default w-full px-2 py-3 bg-sky-500 rounded-lg text-[18px] text-white font-bold">
                  Fase Culminada
                </button>
              </div>
              <div
                className="lg:w-1/5 w-full opacity-60 h-[80%] rounded-xl shadow-xl py-4 px-2 flex flex-col justify-center items-center">
                <p className="w-full text-center text-gray-400">
                  Fase <span className="font-bold text-gray-400">DOS</span>
                </p>
                <p className="w-full text-center text-[23px] font-extrabold mb-4 text-white">
                  DESARROLLO
                </p>
                <i className="fa-solid fa-file-contract w-full text-center text-gray-400 text-[90px] mb-2"></i>
                <p className="text-[17px] w-full text-center font-semibold text-gray-200 mb-2">
                  Infraestructura tecnológica y legal
                </p>
                <button className="cursor-default w-full px-2 py-3 bg-gray-500 rounded-lg text-[18px] text-white font-bold">
                  Fase Culminada
                </button>
              </div>
              <div
                className="lg:w-1/5 bg-zinc-900 w-full h-[80%] rounded-xl shadow-xl py-4 px-2 flex flex-col justify-center items-center">
                <p className="w-full text-center text-yellow-400">
                  Fase <span className="font-bold text-yellow-400">TRES</span>
                </p>
                <p className="w-full text-center text-[23px] font-extrabold mb-4 text-white">
                  CROWFUNDING
                </p>
                <i
                  className="fa-solid fa-hand-holding-dollar w-full text-center text-yellow-400 text-[90px] mb-2"></i>
                <p className="text-[17px] w-full text-center font-semibold text-gray-200 mb-2">
                  Crowdfunding en la red BNB para financiamiento
                </p>
                <button className="cursor-default w-full px-2 py-3 bg-yellow-500 rounded-lg text-[18px] text-white font-bold">
                  Proceso ...3%
                </button>
              </div>
              <div
                className="lg:w-1/5 w-full h-[80%] rounded-xl shadow-xl py-4 px-2 flex flex-col justify-center items-center">
                <p className="w-full text-center text-blue-500">
                  Fase <span className="font-bold text-blue-500">CUATRO</span>
                </p>
                <p className="w-full text-center text-[23px] font-extrabold mb-4 text-white">
                  CONSTRUCCIÓN
                </p>
                <i className="fa-solid fa-industry w-full text-center text-blue-500 text-[90px] mb-2"></i>
                <p className="text-[17px] w-full text-center font-semibold text-gray-200 mb-2">
                  Construcción de la mega planta de extracción y envasado de agua
                </p>
              </div>
              <div
                className="lg:w-1/5 w-full h-[80%] rounded-xl shadow-xl py-4 px-2 flex flex-col justify-center items-center">
                <p className="w-full text-center text-white">
                  Fase <span className="font-bold text-white0">CINCO</span>
                </p>
                <p className="w-full text-center text-[23px] font-extrabold mb-4 text-white">
                  IMPLEMENTACIÓN
                </p>
                <i className="fa-solid fa-truck-fast w-full text-center text-white text-[90px] mb-2"></i>
                <p className="text-[17px] w-full text-center font-semibold text-gray-200 mb-2">
                  Red de distribución y comercialización
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-[1200px] w-full flex flex-col bg-zinc-700 shadow-xl rounded-xl mb-20">
            <div className="w-full py-8 px-8">
              <h3 className="text-[35px] font-extrabold text-white">
                Conoce a nuestro equipo
              </h3>
            </div>
            <div className="w-full flex flex-col mb-3">
              <div className="w-full flex justify-center items-center">
                <div className="w-[400px] p-4">
                  <div className="bg-zinc-600 rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/director.jpg"
                      alt="Director Comercial"
                      className="w-full h-[400px] object-cover rounded-t-lg"
                      width={400} height={400}
                    />
                    <div className="p-4 relative">
                      {/* Nombre y rol con los colores ajustados */}
                      <h4 className="font-bold text-xl mb-2 text-white">Nombre del Director Comercial</h4>
                      <p className="text-zinc-300 mb-4">CEO. Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Gestor de Proyectos Economista y Diseñador Gráfico */}
              <div className="w-full flex justify-evenly">
                <div className="md:w-[300px] sm:w-[150px] w-1/3 p-4">
                  <div className="bg-zinc-600 md:h-[420px] h-[250px]  rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/directorAdministrativo.jpg"
                      alt="Gestor de Proyectos"
                      className="w-full md:h-[300px] h-[190px] object-cover rounded-t-lg"
                      width={300} height={300}
                    // AJUSTAR TAMAÑO DE LA IMAGEN SEGÚN SEA NECESARIO
                    />
                    <div className="md:p-4 p-2 relative">
                      <h4 className="font-bold md:text-xl text-[15px] mb-2 text-white">
                        Gerardo Telleria
                      </h4>
                      <p className="text-zinc-800 mb-4">
                        Director administrativo y de expansión
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[300px] sm:w-[150px] flex items-center justify-center  w-1/3 p-4">
                  <div className="flex items-center justify-center rounded-full bg-zinc-800 w-[250px] h-[250px]">
                      <Image src={"/images/CDX-INNOVA-01.png"} alt="Logo CDX" width={180} height={180} /> 
                  </div>
                </div>
                <div className="md:w-[300px] sm:w-[150px] w-1/3 p-4">
                  <div className="bg-zinc-600 md:h-[420px] h-[250px] rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/directorDesarrollo.jpg" alt="Gestor de Proyectos"
                      className="w-full md:h-[300px] h-[190px] object-cover rounded-t-lg"
                      width={150} height={150}
                    // AJUSTAR TAMAÑO DE LA IMAGEN SEGÚN SEA NECESARIO
                    />
                    <div className="md:p-4 p-2 relative">
                      <h4 className="font-bold md:text-xl text-[15px] mb-2 text-white">
                        Juan José García
                      </h4>
                      <p className="text-zinc-800 mb-4">
                        Director de desarrollo tecnológico
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desarrolladores */}
              <div className="w-full flex justify-evenly">
                <div className="md:w-[300px] sm:w-[150px] w-1/3 p-4">
                  <div className="bg-zinc-600 md:h-[420px] h-[250px]  rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/developer.png"
                      alt="Gestor de Proyectos"
                      className="w-full md:h-[300px] h-[190px] object-cover rounded-t-lg"
                      width={300} height={300}
                    // AJUSTAR TAMAÑO DE LA IMAGEN SEGÚN SEA NECESARIO
                    />
                    <div className="md:p-4 p-2 relative">
                      <h4 className="font-bold md:text-xl text-[15px] mb-2 text-white">
                        Jared Delgado
                      </h4>
                      <p className="text-zinc-800 mb-4">
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[300px] sm:w-[150px] w-1/3 p-4">
                  <div className="bg-zinc-600 md:h-[420px] h-[250px] rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/disenadoraGrafica.jpg"
                      alt="Desarrollador"
                      className="w-full md:h-[300px] h-[190px] object-cover rounded-t-lg"
                      width={300}
                      height={300}
                    />
                    <div className="md:p-4 p-2 relative">
                      <h4 className="font-bold md:text-xl text-[15px] mb-2 text-white">
                        Irene Blanco
                      </h4>
                      <p className="text-zinc-800 mb-4">
                        Diseñadora Gráfica
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[300px] sm:w-[150px] w-1/3 p-4">
                  <div className="bg-zinc-600 md:h-[420px] h-[250px] rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b to-[#38BDF8] from-[#262628] via-[#18181B] opacity-40 rounded-lg"></div>
                    <Image
                      src="/images/Fredy_Almeyda.png"
                      alt="Desarrollador"
                      className="w-full md:h-[300px] h-[190px] object-cover rounded-t-lg"
                      width={300}
                      height={300}
                    />
                    <div className="md:p-4 p-2 relative">
                      <h4 className="font-bold md:text-xl text-[15px] mb-2 text-white">
                        Fredy Almeyda
                      </h4>
                      <p className="text-zinc-800 mb-4">
                        Desarrollador
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full flex justify-center items-center bg-blue-900 text-white py-4">
          <div className="w-[1200px] flex flex-col justify-center items-center">
            <div className="w-full flex justify-between items-center border-b-[2px] border-blue-700 pb-6 mb-4">
              <div className="flex">
                <Image src={"/images/logoBlanco.png"} alt="Logo Away" width={150} height={150} />
                <Image src={logo} alt="Logo CDX" width={100} height={100} />
                <Image src={"/images/CDX-INNOVA-01.png"} alt="Logo CDX" width={100} height={100} />
              </div>
              <div className="text-center">
                <p>contacto@inaway.app</p>
                <p>Lambayeque, Perú</p>
              </div>
              {/* <div className="flex flex-col items-end">
                <p className="mb-2">Impulsado por tecnología:</p>
                <div className="flex">
                  <Image src={"/images/logoBNB.png"} alt="Logo BNB" width={120} height={40} />
                  <Image src={"/images/logoMetaMask.png"} alt="Logo MetaMask" width={40} height={40} />
                </div>
              </div> */}
            </div>
            <p className="text-center">
              &copy; 2024 Franquicias Away. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div >
  );
}
