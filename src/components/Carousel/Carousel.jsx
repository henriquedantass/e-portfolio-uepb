import React from 'react';
import { Container, Carousel, Box, BoxContent, BoxImage } from './styles';
import * as images from '../../assets';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const CarouselComponent = ({data}) => {
    const renderArrow = direction => onClickHandler => {
        const styles = {
          position: 'absolute',
          top: '75%',
          zIndex: 2,
          background: 'transparent',
        };
        const stylesImage = {
          width: '50px',
          height: '50px',
        };
        if (direction === 'prev') {
          styles.left = '8%';
        } else {
          styles.left = '15%';
        }
    
        return (
          <button
            type="button"
            onClick={onClickHandler}
            style={styles}
          >
            <img
              src={
                direction === 'prev'
                  ? `${images.ArrowPrev}`
                  : `${images.ArrowNext}`
              }
              alt="arrows"
              style={stylesImage}
            />
          </button>
        );
      };
    
    return (
        <Container>
            <Carousel 
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            >
                {data.map( item => {
                    return (
                        <Box>
                        <BoxContent>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </BoxContent>
                        <BoxImage>
                            <img src={item.icone} alt="Logo" />
                        </BoxImage>
                    </Box>
                    )
                })}
            </Carousel>
        </Container>
    )

}