import React from 'react';
import { Navigation } from '../Navigation/Nagivation';
import { Container, Title, Return } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DataResenha from '../../Mocks/DataResenha';
import {CarouselComponent} from '../Carousel/Carousel';
import { Link } from 'react-router-dom';


export const Resenha = () => {
    return (
        <Container>
            <Navigation/>
            <Link to='/Trabalhos'>
            <Return src={images.backhome}/>
            </Link>
            <Title>
                <img src={images.resume} alt='Icone'/>
                <span className='typing-animation'>FICHAMENTO</span>
            </Title>
            <CarouselComponent data={DataResenha}/>
        </Container>
    )

}