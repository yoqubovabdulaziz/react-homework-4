import React, { memo } from 'react'

import "./Iphone.scss"

import HeroItems from '../../components/heroItems/HeroItems'
import { IPHONE_ITEMS } from '../../static'

import video from "../../assets/video/mac-video.mp4"


function Iphone() {
    return (
        <>
            <section id="iphone">
                <div className="container-bigger iphone">
                    <div className="hero__row">
                        {
                            IPHONE_ITEMS.map(item => <HeroItems
                                key={item.id}
                                name={item.name}
                                img={item.img}
                            />)
                        }

                    </div>
                </div>
                <div className="iphone__discount">
                    <p>Get $180–$630 in credit toward iPhone 15 or iPhone 15
                        Pro when you trade in iPhone 11 or higher.1
                        <a href="#!">Shop iPhone</a></p>
                </div>
            </section>

            <section id="iphone-video">
                <div className="container-bigger iphone__video">
                    <div className="iphone__video__header">
                        <h1>iPhone</h1>
                        <p>Designed to be loved.</p>
                    </div>
                </div>
                <div className="iphone__video__video">
                    <video src={video} autoPlay muted loop />
                </div>
            </section>
        </>
    )
}

export default memo(Iphone)