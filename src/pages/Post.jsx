import React, { useState } from 'react'
import { Paso1 } from '../components/Post/Paso1'
import { Paso2 } from '../components/Post/Paso2'
import { Paso3 } from '../components/Post/Paso3'
import { Paso4 } from '../components/Post/Paso4'
import { Paso5 } from '../components/Post/Paso5'
import { Button, useDisclosure } from '@nextui-org/react'
import { Login } from '../components/Login'
import { ModalAccept } from '../components/Post/ModalAccept'

export const Post = () => {
    const [screen, setScreen] = useState(0)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleForward = () => {
        if (screen >= screens.length - 1) {
            console.log('Abridno modal')
            onOpen()
            return
        }
        setScreen(screen + 1)
    }

    const screens = [
        { id: 0, component: <Paso1 />, description: 'Paso 1: Información del Inmueble' },
        { id: 1, component: <Paso2 />, description: 'Paso 1: Información del Inmueble' },
        { id: 2, component: <Paso3 />, description: 'Paso 2: Confirmación del Inmueble' },
        { id: 3, component: <Paso4 />, description: 'Paso 3: Ubicación del Inmueble' },
        { id: 4, component: <Paso5 />, description: 'Paso 4: Información de Publicación' },
    ]

    return (
        <>
            <div className='grid place-items-center my-10 py-3 bg-slate-400'>
                <div className='my-2 '>
                    <p className=''>{screens[screen].description}</p>
                </div>
                <div className='{screen==4?"w-full":"w-2/4 h-[450px]"} border border-solid rounded-sm px-10 py-1 my-5 mx-3 flex flex-col justify-between'>
                    {screens[screen].component}
                    <div className='flex justify-end pt-3 pb-1'>
                        <Button
                            variant={"ghost"}
                            color="primary"
                            className="capitalize"
                            onClick={handleForward}
                        >
                            Continuar
                        </Button>
                    </div>
                </div>
            </div>
            <ModalAccept isOpen={isOpen} onClose={onClose} />
        </>
    )
}
