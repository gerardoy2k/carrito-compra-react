import { Button, Input } from '@nextui-org/react'
import React from 'react'

export const RegisterPhone = ({ onForward }) => {

    const goForward = () => {
        onForward()
    }

  return (
    <div className='flex flex-col items-center px-6'>
            <p className='my-2 text-md'>Registre número de teléfono</p>
            <Input type="text" size='sm' variant="flat" label="+00 000 000 000" className='my-1' isRequired isClearable />
            <div className='flex gap-2 mt-2 mb-6'>
                <Button size='sm' variant='solid' color='warning'> Enviar Whatsapp</Button>
                <Button size='sm' variant='solid' color='warning'> Enviar SMS</Button>
            </div>
            <Input type="text" size='sm' variant="flat" label="Ingrese código" className='my-1' isRequired isClearable />
        </div>
  )
}
