import React from 'react'

import "./Ipad.scss"

import { IPAD_ITEMS } from '../../static'

import m2Img from "../../assets/images/m2-chip.png"
import HeroItems from '../../components/heroItems/HeroItems'


function Ipad() {
    return (
        <>
            <section id="ipad-hero">
                <div className="container-bigger hero">
                    <div className="hero__row">
                        {
                            IPAD_ITEMS.map(item => <HeroItems
                                key={item.id}
                                name={item.name}
                                img={item.img} />
                            )
                        }
                    </div>
                </div>
                <div className="hero__discount">
                    <p>Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest-free when you choose to check out with Apple Card Monthly Installments.* <br />

                        <a href="#!">Learn more</a></p>
                </div>
            </section>
            <section id="ipad">
                <div className="container-bigger ipad">
                    <div className="ipad__left">
                        <h1>iPad Pro</h1>
                        <p>Supercharged by <img src={m2Img} alt="" /></p>
                        <h6>From $799</h6>
                        <button>Buy</button>
                        <a href="#!">Learn more</a>
                    </div>
                    <div className="ipad__right"></div>
                </div>
            </section>
        </>
    )
}

export default Ipad