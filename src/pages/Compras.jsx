import { useContext } from "react"
import { ProductCard } from "../components/ProductCard"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const Compras = () => {

	const { productos } = useContext(ProductosContext)
	const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

	const handleAgregar = (producto) => {
		agregarCompra(producto)
	}

	const handleQuitar = (id) => {
		eliminarCompra(producto.id)
	}

	return (
		<>
			<h1 className="my-3 text-2xl font-bold">Productos</h1>
			<hr />
			<div className="grid grid-flow-row-dense gap-4 py-4 grid-cols-3 grid-rows-max ">
				{productos.map(producto => (
					<ProductCard
						key={producto.id}
						image={producto.image}
						title={producto.title}
						description={producto.description}
						price={producto.price}
						handleAgregar={() => handleAgregar(producto)}
						handleQuitar={() => handleQuitar(producto.id)}
					/>
				))}
			</div>
		</>
	)
}
