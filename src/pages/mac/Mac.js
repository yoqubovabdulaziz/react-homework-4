import React from 'react'

import "./mac.scss"

import video from "../../assets/video/mac-video.mp4"
import { MAC_ITEMS } from '../../static'
import HeroItems from '../../components/heroItems/HeroItems'


function Mac() {
    return (
        <>
            <section id="mac-hero">
                <div className="container-bigger hero">
                    <div className="hero__row">
                        {
                            MAC_ITEMS.map(item => <HeroItems
                                key={item.id}
                                name={item.name}
                                img={item.img} />
                            )
                        }

                    </div>
                </div>
                <div className="hero__discount">
                    <p>Get 3% Daily Cash back with Apple Card. And pay for your new Mac over
                        12 months, interest‑free when you choose to check out with Apple Card <br />
                        Monthly Installments.◊ <a href="#!">Learn more</a></p>
                </div>
            </section>
            <section id="mac-video">
                <div className="container-bigger mac__video">
                    <div className="mac__video__header">
                        <h1>Mac</h1>
                        <p>If you can dream it, <br /> Mac can do it.</p>
                    </div>
                </div>
                <div className="mac__video__video">
                    <video src={video} autoPlay muted loop />
                </div>
            </section>
        </>
    )
}

export default Mac