import { Button, Radio, RadioGroup } from '@nextui-org/react'

export const Paso3 = () => {


  return (
    <div className='flex flex-col justify-center h-full'>
      <p className='mt-3 mb-5'>Confirme la información suministrada:</p>
      <div className='grid place-items-center'>
        <p className='mb-2'>Resumen:</p>
        <ul>
          <li>Tipo de bien: {"Alquiler"}</li>
          <li>Modalidad: {"Venta"}</li>
        </ul>
      </div>
    </div>
  )
}
