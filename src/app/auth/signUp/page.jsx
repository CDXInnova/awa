"use client";

import React, { useState, useEffect } from 'react'

import axios, { AxiosError } from 'axios'

import Link from "next/link";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiMoneyDollarCircleLine,
  RiSmartphoneLine,
  RiListCheck3
} from "react-icons/ri";

import { Formik, Form, Field } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SignUp = () => {

  const [error, setError] = useState()

  const router = useRouter()

  const initialValues = {
    usuario: '',
    nombres: '',
    apellidos: '',
    email: '',
    patrocinador: '',
    password: '',
    confirmPassword: ''
  };

  const onSubmit = async (values) => {
    if (values.password !== values.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    const postData = {
      name: values.nombres,
      lastName: values.apellidos,
      email: values.email,
      username: values.usuario,
      sponsor: values.patrocinador,
      password: values.password,
    };

    try {
      // Validamos el registro del usuario
      const signupResponse = await axios.post('/api/auth/signUp', postData);
      console.log('Registro exitoso:', signupResponse.data);

      // Si el registro fue exitoso, intentamos iniciar sesión con las credenciales del nuevo usuario.
      if (signupResponse.data.username) {
        // Iniciar sesión con las credenciales del nuevo usuario
        const res = await signIn('credentials', {
          username: signupResponse.data.username,
          password: values.password,
          redirect: false  // No redirigir, manejar la respuesta manualmente
        });

        console.log('Sign-in response:', res);

        if (res.ok) {
          router.push('/home');  // Redirige al usuario al dashboard
        } else {
          throw new Error(res.error || 'Inicio de sesión fallido');
        }

      } else {
        console.error('Username missing in signup response');
        setError('Error al procesar la respuesta del registro.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof AxiosError && error.response) {
        setError(error.response.data.message);
      } else {
        setError('Un error ha ocurrido');
      }
    }

  }

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 5000); // Clears the error message after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [error]);

  const errorAnimation = {
    initial: { opacity: 0, y: 50, scale: 0.3 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
  };

  return (
    <>
      <div className="h-screen w-full bg-zinc-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100%-100px)]">
          <div className="flex flex-col gap-4 justify-center px-4 lg:px-12">
            <div className="my-4">
              <h2 className="text-[30px] font-bold">Regístrate</h2>
              <p>Crea tu cuenta aquí: </p>
            </div>

            <div className=" border-transparent flex flex-col border-t-[2px] border-zinc-600 pt-8 pb-2">
              <p className="text-white mb-3">
                {"Ya tenes cuenta?"}{" "}
                <Link
                  className="hover:text-sky-300 text-sky-400 text-[18px] font-bold hover:font-bold cursor-pointer"
                  href="/auth/login"
                >
                  Inicia sesion aqui
                </Link>
              </p>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form className="w-full">
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        variants={errorAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="p-4 mb-4 rounded-lg bg-red-500 text-white text-center"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="font-bold">NOMBRES</span>
                  <div className="relative mb-2">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="text"
                      name="nombres"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-2"
                      placeholder="Nombres"
                    />
                  </div>
                  <span className="font-bold">APELLIDOS</span>
                  <div className="relative mb-2">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="text"
                      name="apellidos"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-2"
                      placeholder="Apellidos"
                    />
                  </div>
                  <span className="font-bold">USUARIO</span>
                  <div className="relative mb-2">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="text"
                      name="usuario"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-2"
                      placeholder="Usuario"
                    />
                  </div>
                  <span className="font-bold">E-MAIL</span>
                  <div className="relative mb-2">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="email"
                      name="email"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-2"
                      placeholder="E-mail"
                    />
                  </div>
                  <span className="font-bold">PATROCINADOR</span>
                  <div className="relative mb-2">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="text"
                      name="patrocinador"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-2"
                      placeholder="Patrocinador"
                    />
                  </div>
                  <span className="font-bold">Contraseña</span>
                  <div className="relative mb-2">
                    <RiLockLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="py-3 px-8 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500  w-full outline-none rounded-2xl mb-2 "
                      placeholder="Password"
                    />
                    {showPassword ? (
                      <RiEyeOffLine
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-400"
                      />
                    ) : (
                      <RiEyeLine
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-400"
                      />
                    )}
                  </div>
                  <span className="font-bold">Confirmar Contraseña</span>
                  <div className="relative">
                    <RiLockLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="py-3 px-8 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500  w-full outline-none rounded-2xl mb-4 "
                      placeholder="Confirmar Password"
                    />
                    {showPassword ? (
                      <RiEyeOffLine
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-400"
                      />
                    ) : (
                      <RiEyeLine
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-6 -translate-y-1/2 right-2 hover:cursor-pointer text-sky-400"
                      />
                    )}
                  </div>
                  <div className="text-white mb-4">
                    {"No recuerdo mi contraseña,"}{" "}
                    <Link
                      href=""
                      className="text-sky-400 font-semibold cursor-pointer text-[19px] hover:text-sky-300"
                    >
                      Recordarmela
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-700 cursor-pointer font-bold text-white text-[18px] w-full py-3 px-4 rounded-lg transition-colors delay-50 mb-3"
                  >
                    Registrarme
                  </button>
                  <span></span>
                </Form>
              )}
            </Formik>
          </div>
          <div className="relative h-full lg:block hidden">
            <div className="absolute top-[40%] left-[5%] z-40 flex flex-col">
              <h3 className="text-[30px] font-bold mb-7">
                Beneficios de INAWAY
              </h3>
              <div className="flex items-center text-[18px] gap-x-3 font-semibold mb-3">
                <RiMoneyDollarCircleLine className="text-sky-400 text-[35px]" />
                Transformamos la inversión del agua.
              </div>
              <div className="flex items-center text-[18px] gap-x-3 font-semibold mb-3">
                <RiSmartphoneLine className="text-sky-400 text-[35px]" />
                proporcionamos una plataforma segura y transparente.
              </div>
              <div className="flex items-center text-[18px] gap-x-3 font-semibold mb-3">
                <RiListCheck3 className="text-sky-400 text-[35px]" />
                Tenemos el proyecto sistematizado, y contamos con fases de desarrollo.
              </div>
            </div>
            <div className="absolute top-0 w-full h-full bg-zinc-950 opacity-80"></div>
            <Image
              src="/images/aguaMano.jpg"
              className="object-cover h-[calc(100%-100px)] md:h-[44rem] xl:h-full"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
