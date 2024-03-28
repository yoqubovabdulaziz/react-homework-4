import React, { memo } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Iphone from "../iPhone/Iphone"

import "./Home.scss"

function Home() {
    return (
        <>
            <Link to={"/iPhone"} className='hero__section'>
                <div className="containre hero">
                    <h1 className="hero__title">iPhone 15 Pro</h1>
                    <p className="hero__body">Titanium. So strong. So light. So Pro.</p>
                    <div className="hero__buttons">
                        <button className="learn__more__btn">Learn more</button>
                        <button className="buy__btn">Buy</button>
                    </div>
                </div>
            </Link>
            <Routes>
                <Route path='/iPhone' element={<Iphone />} />
            </Routes>
        </>
    )
}

export default memo(Home)