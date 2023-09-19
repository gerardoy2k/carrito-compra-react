import { Button } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const HelpBar = () => {
    return (
        <div className='flex justify-end'>
            <Button
                variant="light"
                color="primary"
                className="capitalize h-5"
            >
                Ayuda
            </Button>
            <NavLink to='/post' className="nav-link text-sm text-blue-600" aria-current="page">
                Publica una propiedad
            </NavLink>
        </div>
    )
}
