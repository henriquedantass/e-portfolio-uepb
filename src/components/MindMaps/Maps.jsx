import React from 'react';
import { Navigation } from '../Navigation/Nagivation';
import { Container, Title, Return } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DataMaps from '../../Mocks/DataMaps';
import {CarouselComponent} from '../Carousel/Carousel';
import { Link } from 'react-router-dom';


export const Maps = () => {
    return (
        <Container>
            <Navigation/>
            <Link to='/Trabalhos'>
            <Return src={images.backhome}/>
            </Link>
            <Title>
                <img src={images.mindMap} alt='Icone'/>
                <span className='typing-animation'>MAPAS MENTAIS</span>
            </Title>
            <CarouselComponent data={DataMaps}/>
        </Container>
    )

}