import React from 'react';
import { Container, Content, Section, SectionBox } from './styles';
import * as images from '../../assets'
import { Navigation } from '../Navigation/Nagivation';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <Container>
            <Navigation/>
            <Content>
                <Section>
                    <Link to='/Maps'>
                    <SectionBox>
                        <img src={images.mindMap} alt="" />
                        <p>Mapas mentais</p>
                    </SectionBox>
                    </Link>
                    <SectionBox>
                        <img src={images.quiz} alt="" />
                        <p>Quiz</p>
                    </SectionBox>
                    <SectionBox>
                        <img src={images.resume} alt="" />
                        <p>Resenha Crítica</p>
                    </SectionBox>
                </Section>
            </Content>
        </Container>
    )
}