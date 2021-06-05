import React from 'react';
import {Container, Logo} from './styles';
import * as images from '../../assets'


export const Navigation = () => {
    return (
        <Container>
           <Logo>
               <img src={images.Logo} alt="Logo" />
           </Logo>
        </Container>
    )
}