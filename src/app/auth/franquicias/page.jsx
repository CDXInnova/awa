import React from 'react'
import Image from 'next/image'


import { IoPerson } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdPersonPin } from "react-icons/md";
import { MdPersonPinCircle } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="pt-6 bg-gradient-to-b from-zinc-900 to-zinc-700">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-[1200px] w-full flex lg:flex-row flex-col gap-x-5">
          <div className="lg:w-[55%] w-full px-3">
            <div className="w-full">
              <div className="flex flex-col border-b-[2px] border-gray-300 mb-6 pb-4 pt-6">
                <p className="text-white mb-3">
                  Ya tenes una cuenta?  <span className="hover:text-sky-600 text-sky-400 text-[18px] font-bold hover:font-bold cursor-pointer">
                    Logueate aquí
                  </span>
                </p>
              </div>

              <div className='lg:w-[100%] w-full bg-zinc-800 rounded-2xl border-[1px] border-zinc-700 shadow-lg shadow-sky-300/30 p-6 mb-6'>
                <div className="mb-3">
                  <h2 className="text-white text-[30px] font-bold">REGISTRATE</h2>
                  <p className='text-gray-100'>Completa los campos</p>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-gray-300" htmlFor="name-grid" >Nombres Completos: <span className="text-red-600 text-[20px]">*</span></label>

                  <div className="w-full relative mb-1 text-[17px] text-white">
                    <IoPerson className="fa-solid fa-user absolute left-2 top-4 text-sky-600"></IoPerson>
                    <input id="name-grid" type="text" name="fullName" placeholder="Nombres Completos"
                      className="py-3 pl-8 pr-4 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4 bg-zinc-700" />
                  </div>
                </div>
                <div className="w-full flex gap-x-2">
                  <div className="w-1/2 flex flex-col">
                    <label className="text-gray-300" htmlFor="pais" >País: <span className="text-red-600 text-[20px]">*</span></label>
                    <div className="w-full relative mb-1 text-[17px] text-white">
                      <BiWorld className="fa-solid fa-earth-americas absolute left-2 top-4 text-sky-600"></BiWorld>
                      <input id="pais" type="text" name="pais" placeholder="País"
                        className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <label className="text-gray-300" htmlFor="provincia">Provincia: <span className="text-red-600 text-[20px]">*</span></label>
                    <div className="w-full relative mb-1 text-[17px] text-white">
                      <MdPersonPin className="fa-solid fa-street-view absolute left-2 top-4 text-sky-600"></MdPersonPin>
                      <input id="provincia" type="text" name="provincia" placeholder="Provincia"
                        className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-x-2">
                  <div className="w-1/2 flex flex-col">
                    <label className="text-gray-300" htmlFor="ciudad">Ciudad: <span className="text-red-600 text-[20px]">*</span></label>
                    <div className="w-full relative mb-1 text-[17px] text-white">
                      <MdPersonPinCircle className="fa-solid fa-location-dot absolute left-2 top-4 text-sky-600"></MdPersonPinCircle>
                      <input id="ciudad" type="text" name="ciudad" placeholder="Ciudad"
                        className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <label className="text-gray-300" htmlFor="codigoPostal">Código Postal: <span className="text-red-600 text-[20px]">*</span></label>
                    <div className="w-full relative mb-1 text-[17px] text-white">
                      <FaBookmark className="fa-solid fa-bookmark absolute left-2 top-4 text-sky-600"></FaBookmark>
                      <input id="codigoPostal" type="text" name="codigoPostal" placeholder="Código postal"
                        className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <label className="text-gray-300" htmlFor="numeroContacto-grid">Número de Contacto: <span className="text-red-600 text-[20px]">*</span></label>
                  <div className="w-full relative mb-1 text-[17px] text-white">
                    <FaPhoneAlt className="fa-solid fa-phone absolute left-2 top-4 text-sky-600"></FaPhoneAlt>
                    <input id="numeroContacto" type="text" name="numeroContacto" placeholder="+54343518164"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <label className="text-gray-300" htmlFor="email-grid">Correo Electrónico: <span className="text-red-600 text-[20px]">*</span></label>
                  <div className="w-full relative mb-1 text-[17px] text-white">
                    <FaEnvelope className="fa-solid fa-envelope absolute left-2 top-4 text-sky-600"></FaEnvelope>
                    <input id="email" type="email" name="email" placeholder="ejemplo@email.com"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] w-full flex flex-col items-center lg:p-10 p-4 ">
            <div className="lg:w-[90%] w-full bg-zinc-800 rounded-2xl border-[1px] border-zinc-700 shadow-lg shadow-sky-300/30 p-6 mb-6">
              <h3 className="text-white w-full font-bold text-[30px]">Accesos:</h3>
              <div className="w-full flex flex-col">
                <label className="text-gray-300" htmlFor="username">Username: <span className="text-red-600 text-[20px]">*</span></label>
                <div className="w-full relative mb-1 text-[17px] text-white">
                  <IoPerson className="fa-solid fa-user absolute left-2 top-4 text-sky-600"></IoPerson>
                  <input id="username" type="text" name="username" placeholder="Username"
                    className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label className="text-gray-300" htmlFor="password">Password: <span className="text-red-600 text-[20px]">*</span></label>
                <div className="w-full relative mb-1 text-[17px] text-white">
                  <FaLock className="fa-solid fa-lock absolute left-2 top-4 text-sky-600"></FaLock>
                  <input id="password" type="password" name="password" placeholder="Password"
                    className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                  <FaEye
                    className="fa-solid fa-eye absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-600"></FaEye>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label className="text-gray-300" htmlFor="confirmPassword">Confirm password: <span
                  className="text-red-600 text-[20px]">*</span></label>
                <div className="w-full relative mb-1 text-[17px] text-white">
                  <FaLock className="fa-solid fa-lock absolute left-2 top-4 text-sky-600"></FaLock>
                  <input id="confirmPassword" type="password" name="confirmPassword"
                    placeholder="Confirm password"
                    className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-4" />
                  <FaEye
                    className="fa-solid fa-eye absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-600"></FaEye>
                </div>
              </div>
            </div>
            <div className="lg:w-[90%] w-full bg-zinc-800 rounded-2xl border-[1px] border-zinc-700  shadow-lg shadow-sky-300/30 p-6 mb-5">
              <h3 className="text-white w-full font-bold text-[30px]">Análisis Preliminar:</h3>
              <div className="w-full flex flex-col">
                <p className="text-gray-300 mb-1">¿El dinero para pagar el Canon proviene de...?: <span
                  className="text-red-600 text-[20px]">*</span></p>
                <textarea id="fuenteCanon" name="fuenteCanon" placeholder="Proviene de..."
                  className="py-3 pl-2 pr-2 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-400 w-full outline-none rounded-2xl mb-2" />
              </div>
              <div className="w-full flex flex-col">
                <p className="text-gray-300 mb-1">¿Tiene conocimiento de Manejo Administrativo?: <span
                  className="text-red-600 text-[20px]">*</span></p>
                <div className="w-full flex gap-x-2 mb-2">
                  <input type="radio" id="siManejoAdministrativo" name="manejoAdministrativo" value="si" />
                  <label className="text-gray-300" htmlFor="siManejoAdministrativo">Sí</label>
                  <input type="radio" id="noManejoAdministrativo" name="manejoAdministrativo" value="no" />
                  <label className="text-gray-300" htmlFor="noManejoAdministrativo">No</label>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-gray-300 mb-1">¿Cuenta con un local disponible de aprox. 60mt2?: <span
                  className="text-red-600 text-[20px]">*</span></p>
                <div className="w-full flex gap-x-2 mb-2">
                  <input type="radio" id="siLocal" name="disponibilidadLocal" value="si" />
                  <label className="text-gray-300" htmlFor="siLocal">Sí</label>
                  <input type="radio" id="noLocal" name="disponibilidadLocal" value="no" />
                  <label className="text-gray-300" htmlFor="noLocal">No</label>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-gray-300 mb-1">¿Conoce el Nivel de consumo de agua de la población?: <span
                  className="text-red-600 text-[20px]">*</span></p>
                <div className="w-full flex gap-x-2 mb-2">
                  <input type="radio" id="siConocimiento" name="conocimientoAgua" value="si" />
                  <label className="text-gray-300" htmlFor="siConocimiento">Sí</label>
                  <input type="radio" id="noConocimiento" name="conocimientoAgua" value="no" />
                  <label className="text-gray-300" htmlFor="noConocimiento">No</label>
                </div>
              </div>
              <div className="w-full flex items-start text-[13px] mb-3">
                <input type="checkbox" id="terminos_y_condiciones" name="terminos_y_condiciones" value="aceptar"
                  className="mr-2 mt-2" />
                <label className="text-gray-300" htmlFor="terminos_y_condiciones">
                  He leído y acepto los términos y condiciones de llenar este formulario, declarando que todos
                  los datos son reales y sustentables, de lo contrario aceptaré el proceso según las leyes
                  descriptas en el documento de términos y condiciones.
                </label>
              </div>
              <div className="w-full">
                <button className="w-full bg-blue-400 rounded-lg text-white py-3 text-[18px] font-semibold">
                  Registrarme al Canon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp