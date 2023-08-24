import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

export const Carrito = () => {

  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcTotal = () => {
    return listaCompras.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaCompras.map((producto) => (
              <TableRow
                key={producto.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {producto.title}
                </TableCell>
                <TableCell align="right">{producto.price}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={() => disminuirCantidad(producto.id)}><RemoveCircleOutline /></IconButton>
                  {producto.cantidad}
                  <IconButton variant="contained" onClick={() => aumentarCantidad(producto.id)}><AddCircleOutline /></IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => eliminarCompra(producto.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th">
                <Typography gutterBottom variant="subtitle1" component="div">
                  Total
                </Typography>
              </TableCell>
              <TableCell align="right">${calcTotal()}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button variant="contained" disabled={listaCompras.length<1} color="primary">Comprar</Button>
      </div>
    </>
  )
}
