import { Card, Image } from "@nextui-org/react";
import bedroom from '../assets/images/bedroom.png'
import priceTag from '../assets/images/price-tag.png'
import ruler from '../assets/images/ruler.png'
import location from '../assets/images/location.png'
import propiedad from '../assets/images/propiedad.jpeg'
import heart from '../assets/images/heart.png'
import heartRed from '../assets/images/heart-red.png'

export const PropertyCard = ({ image, title, description, price }) => {
  return (
    <Card
      isFooterBlurred
      radius="sm"
      className="border-none bg-slate-300"
    >
      <div className="px-2 flex justify-around">
        <div className="w-5/12 pr-2 flex items-center justify-center">
          <Image
            alt={title}
            className="object-contain w-unit-5xl h-unit-5xl"
            height={200}
            src={propiedad}
            width={200}
          />
        </div>
        <div className="flex flex-col pt-5 pb-3px-2 text-sm text-black/80">
          <div>
            <div className="w-full flex justify-between pb-1">
              <div className="flex w-full justify-center">
                <p className="text-lg text-red-800">Departamento</p>
              </div>
              <img src={heart} alt="heart" className="w-5 h-5 float-right" />
              <img src={heartRed} alt="heartRed" className="w-5 h-5 float-right" />
            </div>
            <div className="flex items-center py-1">
              <img src={priceTag} alt="priceTag" className="w-5 h-5" />
              <p className="px-2 text-lg">$ {price}</p>
            </div>
            <div className="flex items-center py-1">
              <img src={ruler} alt="ruler" className="w-5 h-5" />
              <p className="pl-2"> 170.0 mts</p><p className="text-xs">2</p>
            </div>
            <div className="flex items-center py-1">
              <img src={bedroom} alt="bedroom" className="w-5 h-5" />
              <p className="px-2">3 Dormitorios</p>
            </div>
            <div className="flex items-start py-1">
              <img src={location} alt="location" className="w-5 h-5" />
              <p className="px-2">Urb.Altos de Nuevo Prado, Sec.Los Árboles, Ed.1C, Apto.114</p>
            </div>
            <div className="flex items-start py-1">
              <p className="px-2">Departamento grande en buena zona listo para vivir</p>
            </div>
          </div>
          <div className="flex justify-end pb-2 pt-3 pr-3">
            <p className="text-tiny text-black/80 ">Publicado por: Gerardo Villarroel</p>
          </div>
        </div>
      </div>
    </Card>

  )
}
