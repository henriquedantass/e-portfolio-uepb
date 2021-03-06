import React from 'react';
import { Container, Content, Section, SectionBox } from './styles';
import { Navigation } from '../Navigation/Nagivation';
import { Link } from 'react-router-dom';
import DataHome from '../../Mocks/DataHome';

export const Home = () => {
    return (
        <Container>
            <Navigation/>
            <Content>
                <Section>
                    {DataHome.map(item => {
                        return (
                            <Link to={item.to}>
                            <SectionBox>
                                <img src={item.icone} alt="" />
                                <p>{item.title}</p>
                            </SectionBox>
                            </Link>
                        )
                    })}
                </Section>
            </Content>
        </Container>
    )
}