import { NavLink } from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from "@nextui-org/react";
import { Login } from "./Login";
import Logo from '../assets/images/Logo'
import Heart from "../assets/images/Heart";
import Bell from "../assets/images/Bell";
import DefaultAvatar from "../assets/images/DefaultAvatar";
import Run from "../assets/images/Run";
import Person from "../assets/images/Person";
import ExpandMore from "../assets/images/ExpandMore";

export const NavbarApp = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    onOpen();
  }

  return (
    <section>
      <Navbar shouldHideOnScroll className="w-full"
        classNames={{
          wrapper: [
            "max-w-[1920px]",
            "px-0"
          ],
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "text-cyan-950",
            "text-xl",
            "font-['Rosa Sans']",
            "data-[active=true]:text-red-500",
          ],
        }}
      >
        <NavbarBrand>
          <NavLink to='/' className="nav-link active" aria-current="page">
            <Logo />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarItem isActive>
            <NavLink to='/compras' aria-current="page">
              Inicio
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/inmuebles' aria-current="page">
              TasadoOnline
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/inmuebles' aria-current="page">
              Mi gestor
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/register' aria-current="page">
              <Heart />
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/register' aria-current="page">
              <Bell />
            </NavLink>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger className="bg-transparent px-0">
                <Button>
                  <DefaultAvatar />
                  <p className="text-xl">Username</p>
                  <div className="ml-[-10px]">
                    <ExpandMore  />
                  </div>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Cuenta"
              className="w-[180px]"
              itemClasses={{
                base: "gap-3 text-cyan-950",
              }}
            >
              <DropdownItem
                key="account"
                startContent={<Person />}
              >
                Mi cuenta
              </DropdownItem>
              <DropdownItem
                key="logout"
                startContent={<Run />}
              >
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <NavbarItem>
            <NavLink to='/register' className="flex items-center" aria-current="page">
              <DefaultAvatar />
              <p className="ml-1">Username</p>

            </NavLink>
          </NavbarItem> */}
          {/* <NavbarItem className="lg:flex">
            <Button
              variant="flat"
              color="warning"
              onPress={() => handleLogin()}
              className="capitalize"
            >
              Iniciar sesión
            </Button>
          </NavbarItem> */}
        </NavbarContent>
      </Navbar>
      <Login isOpen={isOpen} onClose={onClose} />
    </section>
  )
}
