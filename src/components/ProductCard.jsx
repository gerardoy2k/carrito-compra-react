import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from "@mui/material"
import { useState } from "react"

export const ProductCard = ({ image, title, description, price, handleAgregar, handleQuitar, handleAumentar, handleDisminuir}) => {

  const [added, setAdded] = useState(false)

  const addProduct = () => {
    handleAgregar()
    setAdded(true)
  }
  const removeProduct = () => {
    handleQuitar()
    setAdded(false)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {added
          ? <Button variant="contained" onClick={removeProduct} color="secondary">Quitar</Button>
          : <Button variant="contained" onClick={addProduct} color="primary">Agregar</Button>
        }
      </CardActions>
    </Card>
  )
}
