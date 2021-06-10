import React, { useState }  from 'react';
import MediaItem from './MediaItem';
import {
  BoxSection,
  Container,
  Design,
  Infos,
  Carousel,
  Title,
} from './styles';
import * as images from '../../assets';
import DataMedias from '../../Mocks/DataMedias'
import { Navigation } from '../Navigation/Nagivation';

export const Medias = () => {
    const [itemOpen, setItemOpen] = useState(0);

    const toggleItemOpen = id => {
      setItemOpen(itemOpen === id ? null : id);
    };
    const renderArrow = direction => onClickHandler => {
        const styles = {
          position: 'absolute',
          top: '50%',
          zIndex: 2,
          background: 'transparent',
        };
        const stylesImage = {
          width: '50px',
          height: '50px',
        };
        if (direction === 'prev') {
          styles.left = '0%';
        } else {
          styles.right = '0%';
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
    <>
    <Navigation/>
    <Container>
      {DataMedias.map(item => (
        <MediaItem
          title={item.brand}
          key={item.id}
          isActive={itemOpen === item.id}
          handleOnClick={() => {
            toggleItemOpen(item.id);
          }}
        >
          <Carousel
            showStatus={false}
            autoPlay={false}
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
          >
            {item.data.map(content => (
            <>
              <BoxSection isVideo={item.video}>  
                <Infos>
                  <Title>
                  <span>{content.title}</span>
                  <a href={content.link} target="_blank"> <img src={item.icone} alt="icone" /> </a>
                 </Title>  
                  <p>{content.description}</p>
                </Infos>
                <Design>
                  <img src={content.image} alt="Design" />
                </Design>
              </BoxSection>
            </>
            ))}
          </Carousel>
        </MediaItem>
      ))}
    </Container>
    </>
  );
};

