import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Button, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from "@nextui-org/react";
import { Login } from "./Login";
import logo from '../assets/images/logo.png'

export const NavbarApp = () => {

  const { listaCompras } = useContext(CarritoContext)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    onOpen();
  }

  return (
    <>
      <Navbar shouldHideOnScroll className="bg-black text-slate-50">
        <NavbarBrand>
          <NavLink to='/' className="nav-link active" aria-current="page">
            <Image
              isZoomed
              width={60}
              alt="Logo"
              src={logo}
            />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="left">
          <NavbarItem isActive>
            <NavLink to='/compras' className="nav-link" aria-current="page">
              Comprass
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink to='/inmuebles' className="nav-link active" aria-current="page">
              Inmuebles
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <NavLink to='/register' className="nav-link text-sm font-bold text-blue-600" aria-current="page">
              Registrarse
            </NavLink>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Button
              variant="flat"
              color="warning"
              onPress={() => handleLogin()}
              className="capitalize"
            >
              Iniciar sesión
            </Button>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <NavLink to='/carrito'>
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Login isOpen={isOpen} onClose={onClose} />
    </>
  )
}
