"use client"
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const ModalLanzamiento = ({ isOpen, onOpenChange }) => {

  return (
    <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} >
      <ModalContent className='bg-blue-900 text-white border-[2px] border-gray-700'>
        {(onClose) => (
          <>
            <ModalBody className='w-full flex flex-col items-center justify-center'>
                Faltan las mismas horas para que te cpoja un negro
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalLanzamiento