import { Route, Routes, Navigate } from "react-router-dom"
import { NavbarApp } from "./components/NavbarApp"
import { Compras } from "./pages/Compras"
import { Carrito } from "./pages/Carrito"
import { CarritoProvider } from "./context/CarritoProvider"
import { NextUIProvider } from "@nextui-org/react";
import { InmueblesProvider } from "./context/InmueblesProvider"
import { ProductosProvider } from "./context/ProductosProvider"
import { PropertyList } from "./pages/PropertyList"
import { HelpBar } from "./components/HelpBar"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Register } from "./pages/Register"
import { Post } from "./pages/Post"
import { useState } from "react"

export const RealStateApp = () => {
    
    const [isDark, setIsDark] = useState(false);

    return (
        <InmueblesProvider>
            <ProductosProvider>
                <CarritoProvider>
                    <NextUIProvider>
                        <NavbarApp className={`${isDark?'dark':'light'} text-foreground bg-background`} />
                        <HelpBar className={`${isDark?'dark':'light'} text-foreground bg-background`}/>
                        <div className={`${isDark?'dark':'light'} text-foreground bg-background container max-w-full px-10`}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/compras" element={<Compras />} />
                                <Route path="/inmuebles" element={<PropertyList />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/post" element={<Post />} />
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
