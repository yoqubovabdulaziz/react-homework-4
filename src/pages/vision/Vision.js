import React, { memo, useState } from 'react'
import "./Vision.scss"

import { FaApple, FaAngleRight } from "react-icons/fa";

import visionVideo from "../../assets/video/vision-pro.mp4"



function Vision() {
    const [state, setstate] = useState(false)

    const changevalueScroll = () => {

        const scrollvalue = document.documentElement.scrollTop
        if (scrollvalue > 50) {
            setstate(true)
        }
        else {
            setstate(false)
        }
    }

    window.addEventListener('scroll', changevalueScroll)

    return (
        <section id="vision">
            <div className="vision__header">
                <div className="container">
                    <div className="vision__header__content">
                        <h1>Apple Vision Pro</h1>
                        <div className="vision__header__end">
                            <a href="#!">Overview</a>
                            <a href="#!">Guided Tour</a>
                            <a href="#!">Tech Specs</a>
                            <a className='book__btn' href="#!">Book a demo</a>
                            <a className='buy__btn' href="#!">buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={state ? 'remove__vision__banner' : 'vision__hero'}>
                <div className="container">
                    <div className='vision__hero__banner'>
                        <h1 className="vision__title">
                            <FaApple />
                            Visioin Pro
                        </h1>
                        <p>Watch the Guided Tour <FaAngleRight /></p>
                    </div>
                </div>
            </div>
            <div className={state ? "vision__video" : "show__video"}>
                <video src={visionVideo} autoPlay muted />
            </div>
        </section>
    )
}

export default memo(Vision)