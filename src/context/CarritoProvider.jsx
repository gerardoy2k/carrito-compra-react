import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({children}) => {

	const comprasReducer = (state = initialState, action) => {
		switch (action.type) {
			case '[CARRITO] agregar':
				return [...state, action.payload]
			case '[CARRITO] aumentar':
				return state.map(item => {
					const cant = item.cantidad + 1
					if (item.id === action.payload) return {...item, cantidad: cant}
					else return item
				})
			case '[CARRITO] disminuir':
				return state.map(item => {
					const cant = item.cantidad >0 ? item.cantidad - 1 : 0
					if (item.id === action.payload) return {...item, cantidad: cant}
					else return item
				})
			case '[CARRITO] eliminar':
				return state.filter(item => item.id !== action.payload)
			default:
				return state
		}
	}

	const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

	const agregarCompra = (compra) => {
		compra.cantidad = 1
		dispatch({
			type: '[CARRITO] agregar',
			payload: compra
		})
	}

	const aumentarCantidad = (id) => {
		dispatch({
			type: '[CARRITO] aumentar',
			payload: id
		})
	}

	const disminuirCantidad = (id) => {
		dispatch({
			type: '[CARRITO] disminuir',
			payload: id
		})
	}

	const eliminarCompra = (id) => {
		dispatch({
			type: '[CARRITO] eliminar',
			payload: id
		})
	}

	return (
		<CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
			{children}
		</CarritoContext.Provider>
	)
}
