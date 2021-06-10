import React from 'react';
import { Navigation } from '../Navigation/Nagivation';
import { Container, Title } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DataMaps from '../../Mocks/DataMaps';
import {CarouselComponent} from '../Carousel/Carousel';


export const Quiz = () => {
    return (
        <Container>
            <Navigation/>
            <Title>
                <img src={images.quiz} alt='Icone'/>
                <span className='typing-animation'>QUIZ</span>
            </Title>
            <CarouselComponent data={DataMaps}/>
        </Container>
    )

}