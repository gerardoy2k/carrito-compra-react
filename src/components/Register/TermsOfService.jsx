import { Button, Checkbox } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const TermsOfService = ({ onForward }) => {

    const [termsAccepted, setTermsAccepted] = useState(false)

    const goForward = () => {
        onForward();
    }

    return (
        <div className='grid grid-cols-1 h-full px-6 py-6 content-around'>
            <p className='mx-6 mt-4 mb-6 text-md'>Para registrar su cuenta debe aceptar los terminos del servicio</p>
            <Checkbox
                isSelected={termsAccepted}
                onValueChange={setTermsAccepted}
                radius="full" size='sm' className='text-sm'>
                Aceptar términos de servicio
            </Checkbox>
            <div className='grid grid-cols-2 gap-20 mt-14'>
                <NavLink to='/inmuebles' className="nav-link text-sm text-blue-700 pt-2 underline" aria-current="page">
                    Términos de servicio
                </NavLink>
            </div>
        </div>
    )
}
