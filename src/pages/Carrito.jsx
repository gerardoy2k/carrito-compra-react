import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip } from "@nextui-org/react";


export const Carrito = () => {

  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcTotal = () => {
    return listaCompras.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)
  }

  return (
    <>
      <Table className="w-full min-w-max table-auto text-left">
        <TableHeader>
          <TableColumn>
            Producto
          </TableColumn>
          <TableColumn>
            Precio
          </TableColumn>
          <TableColumn>
            Cantidad
          </TableColumn>
          <TableColumn>
            Eliminar
          </TableColumn>
        </TableHeader>
        <TableBody>
          {listaCompras.map((producto) => (
            <TableRow key={producto.id}>
              <TableCell>
                {producto.title}
              </TableCell>
              <TableCell>
                {producto.price}
              </TableCell>
              <TableCell>
                <Button color='default' size='sm' radius="full" onClick={() => disminuirCantidad(producto.id)}><i className="fa-solid fa-minus"></i></Button>
                <span className='px-2'>{producto.cantidad}</span>
                <Button color='default' size='sm' radius="full" onClick={() => aumentarCantidad(producto.id)}><i className="fa-solid fa-plus"></i></Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => eliminarCompra(producto.id)} color="warning" size='sm' aria-label="Like">
                  <Tooltip color="default" content="Eliminar del carrito">
                    <i className="fa-solid fa-trash"></i>
                  </Tooltip>
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow key={'a1500'}>
            <TableCell className="p-4 border-b border-blue-gray-50">
              Total
            </TableCell>
            <TableCell className="p-4 border-b border-blue-gray-50">
              ${calcTotal()}
            </TableCell>
            <TableCell className="p-4 border-b border-blue-gray-50">
            </TableCell>
            <TableCell className="p-4 border-b border-blue-gray-50">
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className='py-5 float-right'>
        <Button disabled={listaCompras.length < 1} color="primary">Comprar</Button>
      </div>
    </>
  )
}
