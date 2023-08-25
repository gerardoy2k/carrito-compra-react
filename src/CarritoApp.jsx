import { Route, Routes, Navigate } from "react-router-dom"
import { NavbarApp } from "./components/NavbarApp"
import { Compras } from "./pages/Compras"
import { Carrito } from "./pages/Carrito"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import { NextUIProvider } from "@nextui-org/react";


export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NextUIProvider>
                    <NavbarApp />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Compras />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path="/*" element={<Navigate to='/' />} />
                        </Routes>
                    </div>
                </NextUIProvider>
            </CarritoProvider>
        </ProductosProvider>
    )
}
