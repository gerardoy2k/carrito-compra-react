import { Button } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const HelpBar = () => {
    return (
        <div className='w-full px-10 flex justify-end items-center h-10 bg-primary'>
            <Button
                variant="light"
                color="primary"
                className="capitalize h-5 text-background text-xl px-0 mx-10"
            >
                Ayuda
            </Button>
            <NavLink to='/post' className="w-[241px] h-10 text-background text-xl bg-secondary rounded-xl flex items-center justify-center" aria-current="page">
                Publica una propiedad
            </NavLink>
        </div>
    )
}
