import { Button } from '@nextui-org/react'
import React from 'react'

export const ButtonsBar = () => {
    return (
        <div className='flex justify-end'>
            <Button
                variant="light"
                color="primary"
                className="capitalize h-5"
            >
                Ayuda
            </Button>
            <Button
                variant="light"
                color="primary"
                className="capitalize h-5"
            >
                Publica una propiedad
            </Button>
        </div>
    )
}
