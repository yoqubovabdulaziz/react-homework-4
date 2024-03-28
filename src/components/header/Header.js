import React, { memo } from 'react'
import { NavLink } from "react-router-dom"

import "./Header.scss"

import { NAV_ITEMS } from '../../static'

import { IoSearchOutline, IoBagOutline } from "react-icons/io5";


function Header() {
    const navItems = NAV_ITEMS?.map(item => <NavLink key={item.id} to={item.url}>{item.name}</NavLink>)

    return (
        <header>
            <nav className="container nav">
                {navItems}
                <button><IoSearchOutline className='nav__btn' /></button>
                <button><IoBagOutline className='nav__btn' /></button>
            </nav>
        </header>
    )
}

export default memo(Header)