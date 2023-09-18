import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        console.log(data)
        setProductos(data.products)
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
