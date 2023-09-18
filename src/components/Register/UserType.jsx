import { Button, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'

export const UserType = ({ onForward }) => {

    const goForward = () => {
        onForward()
    }

    return (
        <div className='flex flex-col items-center px-6'>
            <p className='mt-2 text-md'>¿Es usted un corredor?</p>
            <div className='flex gap-2 my-1 mt-4'>
                <RadioGroup
                    orientation="horizontal"
                >
                    <Radio value="buenos-aires">Si, lo soy</Radio>
                    <Radio value="sydney">No, soy un usuario regular</Radio>
                </RadioGroup>
            </div>
        </div>
    )
}