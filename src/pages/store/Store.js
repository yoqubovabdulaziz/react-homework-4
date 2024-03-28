import React, { memo } from 'react'
import { SiApple } from "react-icons/si";

import "./Store.scss"

import StoreSister from "../../assets/images/storedagi-opa.jpg"
import { LATEST_CARDS, STORE_ITEMS } from '../../static';

function Store() {
    let storeItems = STORE_ITEMS.map(item => (
        <div key={item.id} className="hero__row__item">
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
        </div>
    ))

    let latestCard = LATEST_CARDS.map(item => (
        <div style={{
            background: `url(${item.bgImg}) center no-repeat`,
            backgroundSize: "cover"
        }} key={item.id} className="latest__card">
            <h6>{item.name}</h6>
            <h2>{item.description}</h2>
            <p>{item.price}</p>
        </div>
    ))
    return (
        <>
            <section id="hero">
                <div className="container-bigger hero">
                    <div className="hero__header">
                        <h2 className="hero__title"><span>Store.</span>The best way to buy the products you love.</h2>
                        <div className="hero__right">
                            <div className="hero__right__top">
                                <span>
                                    <img src={StoreSister} alt="store sister" />
                                </span>
                                <div className="hero__right__top__right">
                                    <h5>Need shopping help</h5>
                                    <a href="#!">Ask a Specialist</a>
                                </div>
                            </div>
                            <div className="hero__right__top">
                                <span>
                                    <SiApple />
                                </span>
                                <div className="hero__right__top__right">
                                    <h5>Visit an Apple Store</h5>
                                    <a href="#!">Find one near you</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__row">
                        {storeItems}
                    </div>
                </div>
            </section>
            <section id="latest">
                <div className="container-bigger latest">
                    <h2 className="latest__title">The latest. <span>Take a look at what's new, right now.</span></h2>
                    <div className="latest__row">
                        {latestCard}
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Store)