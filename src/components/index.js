import React, { useState } from 'react';
import CarouselHeader from './home/carouselHeader';
import WhoWeAreSection from './home/whoWeAreSection';
import WebinarSeriesSection from './home/webinarSeriesSection';
import PodcastSeriesSection from './home/podcastSeriesSection';
import BuzzSeriesSection from './home/buzzSeriesSection';


/*Home Page*/
export default function Index({ homePageData, buzzContainer, slideData, webinarImgs, podcastImgs, whoWeAreImg }) {


    /*home page slides*/
    const [homeSlides] = useState(slideData[0]);

    /*home page sections*/
    const [whoWeAreSection] = useState(homePageData[0]);
    const [webinarSeriesSection] = useState(homePageData[1]);
    const [podcastSeriesSection] = useState(homePageData[2]);

    /* Podcast Series Images */
    const [whoWeAre] = useState(whoWeAreImg[0]);

    /* Webinar Series Images */
    const [webImgs] = useState(webinarImgs[0]);

    /* Podcast Series Images */
    const [podImgs] = useState(podcastImgs[0]);


    console.log(buzzContainer, "buzzzzz")

    return (
        <>
            <CarouselHeader slides={homeSlides} />
            <WhoWeAreSection content={whoWeAreSection} img={whoWeAre} />
            <WebinarSeriesSection content={webinarSeriesSection} imgs={webImgs} />
            <PodcastSeriesSection content={podcastSeriesSection} imgs={podImgs} />
            <BuzzSeriesSection content={buzzContainer} />
        </>
    )
}
