import { Card, Image } from "@nextui-org/react";
import bedroom from '../assets/images/bedroom.png'
import priceTag from '../assets/images/price-tag.png'
import ruler from '../assets/images/ruler.png'
import location from '../assets/images/location.png'
import propiedad from '../assets/images/property-image.png'
import heart from '../assets/images/heart.png'
import heartRed from '../assets/images/heart-red.png'

export const PropertyCard = ({ image, title, description, price }) => {
  return (
    <Card
      isFooterBlurred
      radius="sm"
      className="w-[25vw] h-[22vw] bg-background shadow border rounded-[14px] border-red-500"
    >
      <Image
        alt={title}
        className="w-[25vw] h-[13vw] rounded-b-none"
        classNames={{
          wrapper: [
            "max-w-none",
            "rounded-t-[14px]",
          ],
        }}
        src={propiedad}
      />
      <article className="p-3 h-full flex flex-col justify-center text-zinc-900 text-base leading-normal">
        <span className="text-zinc-900 text-base font-bold ">
          $ 00000<br />
        </span>
        <span>
          Arriendo / venta / Arriendo - t<br />
        </span>
        <span>
          Ciudad
        </span>
      </article>
    </Card>

  )
}
