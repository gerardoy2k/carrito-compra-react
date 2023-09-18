import { Button, Input } from '@nextui-org/react'
import React from 'react'

export const ConfirmAccessCode = ({ onForward }) => {

    const goForward = () => {
        onForward()
    }

    return (
        <div className='flex flex-col items-center px-6'>
            <p className='mx-6 my-4 text-md'>Se le envió un código a su buzón de correo electrónico</p>
            <Input type="text" size='sm' variant="flat" label="Ingrese código" className='my-4' isRequired isClearable />
        </div>
    )
}
