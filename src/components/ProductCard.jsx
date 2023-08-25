import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useState } from "react"

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
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image}
          alt={title}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {price}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {added
          ? <Button onClick={removeProduct} color="amber" >Quitar</Button>
          : <Button onClick={addProduct} color="blue">Agregar</Button>
        }
      </CardFooter>
    </Card>

  )
}
