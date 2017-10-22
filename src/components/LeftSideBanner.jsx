import React from 'react';
import {Thumbnail} from "react-bootstrap"

import CarouselBar from './CarouselBar';

import bannerSlides from '../data/bannerSlides.json'

function LeftSideBanner() {
    return (
        <div className="left-side-banner">
            <img src="/img/doctor.jpg" alt="doctor-img"/>

            {/*<CarouselBar interval={null} slides={bannerSlides}/>

            <Thumbnail href="#" src="/img/guarantee_nobg.gif" />*/}
        </div>
    )
}

export default LeftSideBanner