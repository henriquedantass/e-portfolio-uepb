import React from 'react';
import { Navigation } from '../Navigation/Nagivation';
import { Container, Title } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DataMaps from '../../Mocks/DataMaps';
import {CarouselComponent} from '../Carousel/Carousel';


export const Resenha = () => {
    return (
        <Container>
            <Navigation/>
            <Title>
                <img src={images.resume} alt='Icone'/>
                <span className='typing-animation'>RESENHA CRITICA</span>
            </Title>
            <CarouselComponent data={DataMaps}/>
        </Container>
    )

}