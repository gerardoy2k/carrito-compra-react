import { useState } from 'react'
import { TermsOfService } from '../components/Register/TermsOfService'
import { RegisterType } from '../components/Register/RegisterType'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import logo from '../assets/images/logo.png'
import { ConfirmAccessCode } from '../components/Register/ConfirmAccessCode'
import { RegisterData } from '../components/Register/RegisterData'
import { RegisterPhone } from '../components/Register/RegisterPhone'
import { RegisterPassword } from '../components/Register/RegisterPassword'
import { UserType } from '../components/Register/UserType'

export const Register = () => {

    const [screen, setScreen] = useState(0)

    const handleForward = () => {
        if (screen >= screens.length - 1) {
            return
        }
        setScreen(screen + 1)
    }

    const goForward = () => {
        handleForward()
    }

    const screens = [
        { id: 0, component: <TermsOfService onForward={handleForward} /> },
        { id: 1, component: <RegisterType onForward={handleForward} /> },
        { id: 2, component: <ConfirmAccessCode onForward={handleForward} /> },
        { id: 3, component: <RegisterData onForward={handleForward} /> },
        { id: 4, component: <RegisterPhone onForward={handleForward} /> },
        { id: 5, component: <RegisterPassword onForward={handleForward} /> },
        { id: 6, component: <UserType onForward={handleForward} /> },
    ]

    return (
        <>
            <div className='flex justify-center my-10'>
                <Card className='my-2 py-1 w-2/4 h-[450px] flex flex-col items-center bg-slate-400 rounded-sm'>
                    <CardHeader className='flex justify-center'>
                        <Image
                            className='my-4'
                            width={80}
                            alt="Logo"
                            src={logo}
                        />
                    </CardHeader>
                    <CardBody className='py-0'>
                        <div className='overflow-hidden'>
                            {screens[screen].component}
                        </div>
                    </CardBody>
                    <CardFooter className='flex justify-end pt-3 pb-1'>
                        <Button
                            variant={"ghost"}
                            color="primary"
                            className="capitalize"
                            onClick={goForward}
                        >
                            Continuar
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
