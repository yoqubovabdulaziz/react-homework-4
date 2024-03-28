import React, { memo } from 'react'

import "./HeroItems.scss"

function HeroItems({ name, img }) {
    return (
        <div className="hero__item">
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default memo(HeroItems)