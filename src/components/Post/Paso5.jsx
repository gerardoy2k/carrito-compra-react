import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Inline from "yet-another-react-lightbox/plugins/inline";
import bedroom from '../../assets/images/bedroom.png'
import priceTag from '../../assets/images/price-tag.png'
import ruler from '../../assets/images/ruler.png'
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Input, Switch } from '@nextui-org/react';

export const Paso5 = () => {

  const slides = [
    {
      src: "https://placekitten.com/600/504",
      alt: "image 1",
      width: 600,
      height: 400,
    },
    {
      src: "https://placekitten.com/600/505",
      alt: "image 2",
      width: 600,
      height: 400,
    },
    {
      src: "https://placekitten.com/600/510",
      alt: "image 3",
      width: 600,
      height: 400,
    },
  ]

  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(30);
  const [padding, setPadding] = useState(0);
  const [gap, setGap] = useState(10);

  const updateIndex = ({ index: current }) => {
    setIndex(index)
  };

  return (
    <>
      <div className='grid grid-cols-[2fr_1fr] gap-x-4 gap-y-0'>
        <p className='text-center mt-2'>Vista Previa</p>
        <p className='text-center mt-2'>Ajustes</p>
        <div className='border grid grid-cols-2 gap-2 rounded-md'>
          <div className='p-2'>
            <Lightbox
              className='bg-white'
              slides={slides}
              plugins={[Inline, Thumbnails, Fullscreen]}
              on={{
                view: updateIndex,
              }}
              carousel={{
                padding: 0,
                spacing: 0,
                imageFit: "cover",
              }}
              inline={{
                style: {
                  maxWidth: "900px",
                  aspectRatio: "3 / 2",
                  margin: "0 auto",
                },
              }}
              thumbnails={{
                height,
                padding,
                gap,
              }}
            />
            <div className='mt-2'>
              <p>Tipo de bien: <b>Departamento</b></p>
              <p>Opción: <b>Alquiler</b></p>
              <p>Precio: <b>1.000.000,00</b></p>
              <p>Vende: <b className='underline'>Inmobiliaria 123 Inc.</b></p>
            </div>
          </div>
          <div className='p-2'>
            <div className='bg-slate-500 w-full h-60 rounded-md grid place-items-center'>
              <i className="fa-solid fa-map text-9xl"></i>
            </div>
            <div className="flex items-center py-1">
              <img src={ruler} alt="ruler" className="w-5 h-5" />
              <p className="pl-2"> 170.0 mts</p><p className="text-xs">2</p>
            </div>
            <div className="flex items-center py-1">
              <img src={bedroom} alt="bedroom" className="w-5 h-5" />
              <p className="px-2">3 Dormitorios 2 Baños</p>
            </div>
            <p className='mt-2'>Departamento con amplias habitaciones ubicado en la mejor zona de la ciudad, jardín, piscina, maletero...</p>
          </div>
        </div>
        <div className='border rounded-md p-2'>
          <div className='flex justify-between text-sm'>
            <p> <b>Departamento</b> | <b>Alquiler</b></p>
            <p className='underline text-blue-800'> <b>GUARDAR EN BORRADOR</b></p>
          </div>
          <div className='bg-slate-500 w-full h-60 rounded-md grid place-items-center mt-2'>
            <i className="fa-solid fa-photo-film text-9xl"></i>
            <p>Cargar fotos y/o videos</p>
          </div>
          <p className='text-right'>Máximo 10 fotos y una 360</p>
          <div className='mt-2 grid grid-cols-3 gap-1'>
            <Input type="text" size='sm' variant="flat" label="Número de habs."/>
            <Input type="text" size='sm' variant="flat" label="Número de baños"/>
            <Input type="text" size='sm' variant="flat" label="Precio"/>
            <Input type="text" size='sm' variant="flat" label="Requisitos de venta/Arriendo" className='col-span-3'/>
            <Input type="text" size='sm' variant="flat" label="Descripción del inmueble" className='col-span-3'/>
          </div>
          <div className='mt-2 grid grid-cols-2 gap-1'>
              <p className='col-span-2'>Otros:</p>
              <Switch defaultSelected>Aire Acond.</Switch>
              <Switch defaultSelected>Calefacción</Switch>
              <Switch defaultSelected>Piscina</Switch>
              <Input type="number" size='sm' variant="flat" label="Estacionamientos"/>
          </div>
        </div>
      </div>
    </>
  )
}
