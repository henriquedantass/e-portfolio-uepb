import React from 'react';
import { Container, Content, Section, SectionBox } from './styles';
import { Navigation } from '../Navigation/Nagivation';
import { Link } from 'react-router-dom';
import DataCards from '../../Mocks/DataCards';

export const Works = () => {
    return (
        <Container>
            <Navigation/>
            <Content>
                <Section>
                    {DataCards.map(item => {
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
