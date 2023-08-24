import { useContext } from "react"
import { ProductCard } from "../components/ProductCard"
import { Grid } from "@mui/material"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const Compras = () => {

	const { productos } = useContext(ProductosContext)
	const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

	const handleAgregar = (producto) => {
		agregarCompra(producto)
	}

	const handleQuitar = (id) => {
		eliminarCompra(producto.id)
	}

	const handleAumentar = (id) => {
		aumentarCantidad(id)
	}

	const handleDisminuir = (id) => {
		disminuirCantidad(id)
	}

	return (
		<>
			<h1>Productos</h1>
			<hr />
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{productos.map(producto => (
					<Grid item xs={2} sm={4} md={4} key={producto.id}>
						<ProductCard
							key={producto.id}
							image={producto.image}
							title={producto.title}
							description={producto.description}
							price={producto.price}
							handleAgregar={() => handleAgregar(producto)}
							handleQuitar={() => handleQuitar(producto.id)}
						/>
					</Grid>
				))}
			</Grid>
		</>
	)
}
