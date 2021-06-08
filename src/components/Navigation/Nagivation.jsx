import React from 'react';
import {Container, Logo} from './styles';
import * as images from '../../assets'
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <Container>
             <Link to='/Home'>
                <Logo >
                     <img src={images.Logo} alt="Logo" className="logo"/>
                 </Logo>
           </Link>
        </Container>
    )
}