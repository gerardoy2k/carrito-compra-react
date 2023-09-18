import { Button, Input } from '@nextui-org/react'
import React from 'react'

export const RegisterData = ({ onForward }) => {

    const goForward = () => {
        onForward()
    }

    return (
        <div className='flex flex-col items-center px-6'>
            <p className='my-2 text-md'>Complete los siguientes datos de su perfil</p>
            <Input type="text" size='sm' variant="flat" label="Ingresar RUT" className='my-1' isRequired isClearable />
            <div className='flex gap-6'>
                <Input type="text" size='sm' variant="flat" label="Nombre" className='my-1' isRequired isClearable />
                <Input type="text" size='sm' variant="flat" label="Apellido" className='my-1' isRequired isClearable />
            </div>
            <Input type="text" size='sm' variant="flat" label="Username" className='my-1' isRequired isClearable />
        </div>
    )
}
