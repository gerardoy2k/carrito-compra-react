import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

export const ModalAccept = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <p>Atención</p>
        </ModalHeader>
        <ModalBody>
          Si está de acuerdo con la data suministrada presione finalizar
          <Checkbox><p className='text-sm'>¿Desea publicar en Marketplace de Facebook?</p></Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            Cerrar
          </Button>
          <Button color="primary" type="submit" >
            Finalizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
