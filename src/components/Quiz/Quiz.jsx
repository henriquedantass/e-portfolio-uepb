import React from 'react';
import { Navigation } from '../Navigation/Nagivation';
import { Container, Title, Return } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DataQuiz from '../../Mocks/DataQuiz';
import {CarouselComponent} from '../Carousel/Carousel';
import { Link } from 'react-router-dom';


export const Quiz = () => {
    return (
        <Container>
            <Navigation/>
            <Link to='/Trabalhos'>
            <Return src={images.backhome}/>
            </Link>
            <Title>
                <img src={images.quiz} alt='Icone'/>
                <span className='typing-animation'>QUIZ</span>
            </Title>
            <CarouselComponent data={DataQuiz}/>
        </Container>
    )

}