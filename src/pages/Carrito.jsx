import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Card, Typography, Button, IconButton } from "@material-tailwind/react";

export const Carrito = () => {

  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcTotal = () => {
    return listaCompras.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)
  }

  return (
    <>

      <Card className="h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Producto
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Precio
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Cantidad
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Eliminar
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((producto) => (
              <tr
                key={producto.id}
              >
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.title}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.price}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <IconButton variant="text" onClick={() => disminuirCantidad(producto.id)}><i class="fa-solid fa-minus"></i></IconButton>
                  {producto.cantidad}
                  <IconButton variant="text" onClick={() => aumentarCantidad(producto.id)}><i class="fa-solid fa-plus"></i></IconButton>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <IconButton
                    variant="text"
                    onClick={() => eliminarCompra(producto.id)}
                  >
                    A
                  </IconButton>
                </td>
              </tr>
            ))}
              <tr key={'a1500'}>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-bold">
                    Total
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    ${calcTotal()}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  </Typography>
                </td>
              </tr>
          </tbody>
        </table>
      </Card>

      <div className='py-5 float-right'>
        <Button variant="contained" disabled={listaCompras.length < 1} color="primary">Comprar</Button>
      </div>
    </>
  )
}
