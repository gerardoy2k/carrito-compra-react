import { Route, Routes, Navigate } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Compras } from "./pages/Compras"
import { Carrito } from "./pages/Carrito"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Compras />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
