import { useEffect, useState } from "react"
import { InmueblesContext } from "./InmueblesContext"

export const InmueblesProvider = ({children}) => {

    const [inmuebles, setInmuebles] = useState([])

    const fetchInmuebles = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        console.log(data)
        setInmuebles(data.products)
    }

    useEffect(() => {
        fetchInmuebles()
    }, [])

    return (
        <InmueblesContext.Provider value={{inmuebles}}>
            {children}
        </InmueblesContext.Provider>
    )
}
