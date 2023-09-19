import { Textarea } from '@nextui-org/react'

export const Paso4 = () => {


  return (
    <div className='flex flex-col justify-center h-full'>
      <p className='mt-3 mb-0'>Dirección exacta:</p>
      <Textarea
        size='xs'
        maxRows={2}
        variant="faded"
        placeholder="Ingrese su dirección"
        className="max-w-x"
      />
      <p className='mt-3 mb-0'>O seleccione en el mapa la ubicación del inmbueble:</p>
      <div className='bg-slate-500 w-full h-60 rounded-md grid place-items-center'>
        <i className="fa-solid fa-map text-9xl"></i>
      </div>
    </div>
  )
}
