import { Button, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'

export const Paso1 = () => {
    
     return (
        <div className='flex flex-col justify-center h-full'>
            <p className='mt-3 mb-5'>Elige el tipo de inmueble que quieres publicar:</p>
            <div className='grid place-items-center'>
            <RadioGroup
                label=""
                color="primary"
                defaultValue="london"
            >
                <Radio value="buenos-aires">Departamento</Radio>
                <Radio value="sydney">Casa</Radio>
                <Radio value="san-francisco">Oficina</Radio>
                <Radio value="london">Local</Radio>
                <Radio value="tokyo">Otro</Radio>
            </RadioGroup>
            </div>
        </div>
    )
}
