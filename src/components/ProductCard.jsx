import { useState } from "react"
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export const ProductCard = ({ image, title, description, price, handleAgregar, handleQuitar }) => {

  const [added, setAdded] = useState(false)

  const addProduct = () => {
    handleAgregar()
    setAdded(true)
  }
  const removeProduct = () => {
    //handleQuitar()
    setAdded(false)
  }

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <div className="px-2 flex justify-around">
        <div className="flex flex-col justify-center">
          <p className="text-tiny text-black/80 text-sm">${price}</p>
        </div>
        <Image
          alt={title}
          className="object-cover"
          height={200}
          src={image}
          width={200}
        />
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80 text-sm">{title}</p>
        {added
          ? <Button className="text-tiny text-white bg-black/20" onClick={removeProduct} variant="flat" color="default" radius="lg" size="sm">
            Quitar
          </Button>
          : <Button className="text-tiny text-white bg-black/20" onClick={addProduct} variant="flat" color="default" radius="lg" size="sm">
            Agregar
          </Button>
        }
      </CardFooter>
    </Card>

  )
}
