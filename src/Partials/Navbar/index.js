import React from 'react'
import { Nav, NavLink,NavIcon, Bars } from './NavbarElements'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">NavLink</NavLink>
                <NavIcon to="/">
                    <p>Pizza</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
export default Navbar