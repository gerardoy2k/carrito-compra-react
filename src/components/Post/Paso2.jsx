import { Button, ButtonGroup, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'

export const Paso2 = () => {

  return (
    <div className='flex flex-col justify-center h-full'>
      <p className='mt-3 mb-5'>¿Cuál es tu tipo de venta?</p>
      <div className='grid place-items-center'>
        <RadioGroup
          label=""
          color="primary"
          defaultValue="london"
        >
          <Radio value="buenos-aires">Arriendo</Radio>
          <Radio value="sydney">Arriendo temporal</Radio>
          <Radio value="san-francisco">Venta</Radio>
          <Radio value="london">Venta-Arriendo</Radio>
        </RadioGroup>
      </div>
    </div>
  )
}
