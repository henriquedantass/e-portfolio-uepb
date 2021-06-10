import {
    Container, 
    BoxGrid, 
    Title, 
    Content, 
    ModalContainer, 
    ImageContainer, 
    AboutContainer,
    DescriptionContainer,
    Carousel,
    CloseContainer,
} from './styles';
import {Navigation} from '../Navigation/Nagivation';
import * as images from '../../assets';
import DataAbout from '../../Mocks/DataAbout';
import Modal from 'react-modal';
import { useState } from 'react';

export const About = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [thumbActive, setThumbActive] = useState(0);

    function handleThumbClick(index) {
        setThumbActive(index);
        setIsOpen(true);
      }

    function closeModal(){
        setIsOpen(false);
    }
    const renderArrow = direction => onClickHandler => {
        const styles = {
          position: 'absolute',
          top: '50%',
          zIndex: 2,
          background: 'transparent',
        };
        const stylesImage = {
          width: '35px',
          height: '35px',
        };
        if (direction === 'prev') {
          styles.left = '2%';
        } else {
          styles.right = '2%';
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
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '500px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          border: '0',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: '100000',
        },
      };
    return (
        <>
        <Navigation/>
        <Container>
            <Title>
                <h1>Sobre Nós</h1>
                <img src={images.aboutus} alt="Sobre Nós" />
            </Title>
            <BoxGrid>
                {DataAbout.map((item, index )=> {
                    return (
                        <Content >
                            <img active={thumbActive} src={item.icone} alt={item.title} onClick={() => handleThumbClick(index)} />
                            <span>{item.title}</span>
                        </Content>
                    )
                })}
            </BoxGrid>
        </Container>

        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <Carousel    
            infiniteLoop={true}
            renderArrowPrev={renderArrow('prev')}
            renderArrowNext={renderArrow('next')}
            selectedItem={thumbActive}
            showThumbs={false}
            showStatus={false}>
                {DataAbout.map((item, index) => {
                    return (
                        <ModalContainer>
                            <CloseContainer onClick={closeModal}>
                             <img src={images.close} alt="Close"  />
                            </CloseContainer>
                            <ImageContainer>
                            <img src={item.icone} alt={item.title}/>
                            </ImageContainer>
                            <AboutContainer>
                            <h3>{item.title}</h3>
                            <span>{item.age}</span>     
                            </AboutContainer>
                            <DescriptionContainer>
                            <p>{item.description}</p>
                            </DescriptionContainer>       
                        </ModalContainer>
                    )
                })}
            </Carousel>
        </Modal>
        </>
    )
}