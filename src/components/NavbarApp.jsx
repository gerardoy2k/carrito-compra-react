import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export const NavbarApp = () => {

  const { listaCompras } = useContext(CarritoContext)

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="text-2xl font-bold text-inherit">Carrito</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="left">
          <NavbarItem isActive>
            <NavLink to='/' className="nav-link active" aria-current="page">
              Compras
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <NavLink to='/carrito'>
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
