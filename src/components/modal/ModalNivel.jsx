"use client"
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const ModalNivel = ({ isOpen, onOpenChange, nivel }) => {

  const getNivelContent = (nivel) => {
    switch (nivel) {
      case "nivel1":
        return {contribucion : "$ 100", acciones : "1", metrosC : "0", inaway : "0"};
      case "nivel2":
        return {contribucion : "$ 500", acciones : "5", metrosC : "1", inaway : "200"};
      case "nivel3":
        return {contribucion : "$ 2,000", acciones : "20", metrosC : "4", inaway : "800"};
      case "nivel4":
        return {contribucion : "$ 7,000", acciones : "70", metrosC : "14", inaway : "1,600"};
      case "nivel5":
        return {contribucion : "$ 25,000", acciones : "250", metrosC : "50", inaway : "3,600"};
      case "nivel6":
        return {contribucion : "$ 50,000", acciones : "500", metrosC : "100", inaway : "7,000"};
      case "nivel7":
        return {contribucion : "$ 100,000", acciones : "1,000", metrosC : "200", inaway : "10,000"};
      default:
        return "Nivel no reconocido";
    }
  };

  return (
    <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} >
      <ModalContent className='bg-zinc-800 text-white border-[2px] border-gray-700'>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center gap-x-2">
              <p className='uppercase'>{nivel}</p>
            </ModalHeader>
            <ModalBody className='w-full flex flex-col items-center justify-center'>
              <h3 className='text-[30px] text-sky-400 font-bold'>Momentum Pack</h3>
              <div className='w-full flex'>
                  <div className='w-full flex flex-col'>
                      <p className='w-full text-left mb-2 text-[18px] text-gray-300 font-bold'>Contribucion: <span className='ml-2 text-white'>{getNivelContent(nivel).contribucion}</span> </p>
                      <p className='w-full text-left mb-2 text-[18px] text-gray-300 font-bold'>Respaldo: <span className='ml-2 text-white'>{getNivelContent(nivel).metrosC}</span> </p>
                      <p className='w-full text-left mb-2 text-[18px] text-gray-300 font-bold'>Contribucion: <span className='ml-2 text-white'>{getNivelContent(nivel).contribucion}</span> </p>
                      <p className='w-full text-left mb-2 text-[18px] text-gray-300 font-bold'>Acciones: <span className='ml-2 text-white'>{getNivelContent(nivel).acciones}</span> </p>
                      <p className='w-full text-left mb-2 text-[18px] text-gray-300 font-bold'>Inaway: <span className='ml-2 text-white'>{getNivelContent(nivel).inaway}</span> </p>

                  </div>
              </div>
            </ModalBody>
            <ModalFooter className='w-full justify-center items-center'>
                <Button className='bg-sky-500 text-white px-4 py-2'>Contribuir</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalNivel