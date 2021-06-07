import React from 'react';
import {Container, Logo} from './styles';
import * as images from '../../assets'
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <Container>
           <Logo >
               <img src={images.Logo} alt="Logo" className="logo"/>
               <Link to='/Home'>
                <img src = {images.home} alt="Home"/>
               </Link>
           </Logo>
        </Container>
    )
}