import { Button, Image, Input } from '@nextui-org/react'
import facebook from '../../assets/images/facebook-logo.png'
import google from '../../assets/images/google-logo.png'
import { useState } from 'react'

export const RegisterType = ({ onForward }) => {
    
    const [email, setEmail] = useState('a')
    const [confirmEmail, setConfirmEmail] = useState('a')
    const isContinueEnabled = email === confirmEmail && email !== ''

    const goForward = () => {
        onForward()
    }

    return (
        <div className='flex flex-col items-center px-6 py-4'>
            <p className='mx-6 my-0 text-md'>Indique el tipo de registro</p>
            <Input type="email" value={email} onValueChange={setEmail} size='sm' variant="flat" label="Correo electrónico" className='my-4' isRequired isClearable />
            <Input type="email" value={confirmEmail} onValueChange={setConfirmEmail} size='sm' variant="flat" label="Confirmar correo electrónico" isRequired isClearable />
            <p className='my-2 text-lg'>ó</p>
            <div className='grid grid-cols-2 gap-12'>
                <Button isIconOnly color="transparent" aria-label="Like">
                    <Image
                        radius='none'
                        className='my-4'
                        alt="facebook"
                        src={facebook}
                    />
                </Button>
                <Button isIconOnly color="transparent" aria-label="Like">
                    <Image
                        radius='none'
                        className='my-4'
                        alt="google"
                        src={google}
                    />
                </Button>
            </div>
        </div>
    )
}
