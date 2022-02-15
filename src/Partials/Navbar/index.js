import React from 'react'
import { Nav, NavLink,NavIcon, Bars } from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">NavLink</NavLink>
                <NavIcon to="/" onClick={toggle}>
                    <p>Pizza</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
export default Navbar