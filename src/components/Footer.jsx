import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export const Footer = () => {
    return (
        <div className='bg-slate-500 h-40 mt-4 p-5 grid grid-cols-3'>
            <div className='ml-7'>
                <NavLink to='/' className="nav-link active" aria-current="page">
                    <Image
                        isZoomed
                        width={120}
                        alt="Logo"
                        src={logo}
                    />
                </NavLink>
            </div>
            <div className='flex justify-center items-center'>
                <Button
                    variant="ghost"
                    color="default"
                    className="capitalize"
                >
                    Publica una propiedad
                </Button>
            </div>
            <div className='text-sm'>
                <p className='text-slate-300'>© 2021 Inmobiliaria. Todos los derechos reservados.</p>
                <p className='text-slate-300'>Contacto: inmobiliaria@sitio.com</p>
                <p className='text-slate-300'>Teléfono: +56 9 1234 5678</p>
                <p className='text-slate-300'>Dirección: Av. Siempre Viva 1234, Santiago, Chile</p>
            </div>
        </div>
    )
}
