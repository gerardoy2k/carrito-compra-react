import { Button, ButtonGroup, Input } from '@nextui-org/react'
import React from 'react'

export const RegisterPassword = ({ onForward }) => {

    const goForward = () => {
        onForward()
    }

    return (
        <div className='flex flex-col items-center px-6'>
            <p className='my-2 text-md'>Crea tu contraseña</p>
            <p className='my-2 text-xs'>Asegúrate de poner minúsculas, mayúsculas, mínimo un número y un simbolo</p>
            <Input type="password" size='sm' variant="flat" label="Contraseña" className='my-1' isRequired isClearable />
            <Input type="password" size='sm' variant="flat" label="Repetir contraseña" className='my-1' isRequired isClearable />
        </div>
    )
}
