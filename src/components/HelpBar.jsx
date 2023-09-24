import { Button } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const HelpBar = () => {
    return (
        <section className='h-10 w-full'>
            <div className='absolute left-0 right-0  bg-primary'>
                <div className='container mx-auto flex justify-end items-center'>
                    <Button                        variant="light"
                        color="primary"
                        className="capitalize h-5 text-background text-xl px-0 mx-10"
                    >
                        Ayuda
                    </Button>
                    <NavLink to='/post' className="w-[241px] h-10 text-background text-xl bg-secondary rounded-xl flex items-center justify-center" aria-current="page">
                        Publica una propiedad
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
