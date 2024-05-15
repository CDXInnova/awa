"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiMoneyDollarCircleLine,
  RiSmartphoneLine,
  RiListCheck3,
} from "react-icons/ri";
import { Formik, Form, Field } from "formik";
import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';

const SignIn = () => {

  const [error, setError] = useState("")

  const router = useRouter()

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    // Iniciar sesión con las credenciales del usuario
    const res = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false  // No redirigir, manejar la respuesta manualmente
    });

    console.log('Sign-in response:', res);

    if (res.error) return setError(res.error);

    if (res.ok) {
      router.push('/home');  // Redirige al usuario al dashboard
    } else {
      throw new Error(res.error || 'Inicio de sesión fallido');
    }

  }


  const [showPassword, setShowPassword] = useState(false);


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
              <h2 className="text-[30px] font-bold">INICIA SESIÓN</h2>
              <p>ingresa con tu cuenta de: </p>
            </div>
            <div className=" border-transparent flex flex-col border-t-[2px] border-zinc-600 pt-8 pb-4">
              <p className="text-white mb-3">
                {"Aún no tenes cuenta?"}{" "}
                <Link
                  className="hover:text-emerald-300 text-sky-400 text-[18px] font-bold hover:font-bold cursor-pointer"
                  href="/auth/signup"
                >
                  Registrate aqui
                </Link>
              </p>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form className="mb-7  w-full">
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
                  <div className="relative mb-3">
                    <RiMailLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type="email"
                      name="email"
                      className="py-3 pl-8 pr-4 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500 w-full outline-none rounded-2xl mb-4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <RiLockLine className="absolute left-2 top-4 text-sky-400" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="py-3 px-8 bg-zinc-700 border-[1px] border-zinc-700 focus:border-sky-500  w-full outline-none rounded-2xl mb-4 "
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
                  <div className="text-white mb-4">
                    {"No recuerdo mi contraseña,"}{" "}
                    <Link
                      href=""
                      className="text-sky-400 font-semibold cursor-pointer text-[19px] hover:text-sky-300"
                    >
                      Recordarmela
                    </Link>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-sky-500 hover:bg-sky-700 cursor-pointer font-bold text-white text-[18px] w-full py-3 px-4 rounded-lg transition-colors delay-50 mb-3"
                    >
                      Inicia Sesión
                    </button>
                  </div>
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
            <div className="absolute top-0 w-full h-full bg-zinc-800 opacity-60"></div>
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
  );
};
export default SignIn;