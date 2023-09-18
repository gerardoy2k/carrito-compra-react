import { Route, Routes, Navigate } from "react-router-dom"
import { NavbarApp } from "./components/NavbarApp"
import { Compras } from "./pages/Compras"
import { Carrito } from "./pages/Carrito"
import { CarritoProvider } from "./context/CarritoProvider"
import { NextUIProvider } from "@nextui-org/react";
import { InmueblesProvider } from "./context/InmueblesProvider"
import { ProductosProvider } from "./context/ProductosProvider"
import { PropertyList } from "./pages/PropertyList"
import { ButtonsBar } from "./components/ButtonsBar"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Register } from "./pages/Register"

export const RealStateApp = () => {
    return (
        <InmueblesProvider>
            <ProductosProvider>
                <CarritoProvider>
                    <NextUIProvider>
                        <NavbarApp />
                        <ButtonsBar />
                        <div className="container max-w-full px-10 bg-slate-950">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/compras" element={<Compras />} />
                                <Route path="/inmuebles" element={<PropertyList />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/carrito" element={<Carrito />} />
                                <Route path="/*" element={<Navigate to='/' />} />
                            </Routes>
                        </div>
                        <Footer />
                    </NextUIProvider>
                </CarritoProvider>
            </ProductosProvider>
        </InmueblesProvider>
    )
}
