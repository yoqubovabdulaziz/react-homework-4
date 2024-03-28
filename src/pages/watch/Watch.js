import React, { memo } from 'react'

import "./Watch.scss"

import { WATCH_ITEMS } from '../../static'
import HeroItems from '../../components/heroItems/HeroItems'

import { FaApple, FaChevronRight } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";

function Watch() {
    return (
        <>
            <section id="watch">
                <div className="container-bigger watch">
                    <div className="hero__row">
                        {
                            WATCH_ITEMS.map(item => <HeroItems
                                key={item.id}
                                name={item.name}
                                img={item.img} />
                            )
                        }
                    </div>
                </div>
                <div className="watch__discount">
                    <p>Get 3 months of Apple Fitness+
                        when you buy any Apple Watch.1
                        <a href="#!">Shop Apple Watch</a></p>
                </div>
            </section>
            <section id="watch-banner">
                <div className="container-bigger watch__banner">
                    <div className="watch__banner__top">
                        <h1>
                            <FaApple />
                            WATCH
                        </h1>
                        <span>SERIES 9</span>
                        <p className="watch__description">
                            Smarter. Brighter. Mightier.
                        </p>
                        <h6>From $399</h6>
                        <button>Buy</button>
                        <div className="watch__links">
                            <a href="#!">
                                Learn more
                                <FaChevronRight />
                            </a>
                            <a href="#!">
                                Watch the film
                                <CgPlayButtonO />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="watch__banner__bottom"></div>
            </section>
        </>
    )
}

export default memo(Watch)