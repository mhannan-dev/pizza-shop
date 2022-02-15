import React from 'react'
import { SidebarContainer, Icon, SidebarMenu, CloseIcon, SideBtnWrap, SidebarRoute } from './SidebarElements'
function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarMenu to="/">Pizzas</SidebarMenu>
                <SidebarMenu to="/">Dessert</SidebarMenu>
                <SidebarMenu to="/">Full Menu</SidebarMenu>
                <SidebarMenu to="/">Soft Drinks</SidebarMenu>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
export default Sidebar