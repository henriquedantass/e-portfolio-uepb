import styled from 'styled-components';
import { Carousel as CarouselContainer} from 'react-responsive-carousel';


export const Carousel = styled(CarouselContainer)`
    widht: 400px;
        
    .carousel-slider {
        widht: 400px;
    }
`;
export const Container = styled.div`
    widht: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 50px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    h1 {
        font-weight: bold;
        border-bottom: 2px solid yellow;
        font-size: 26px;
    }
    img {
        width: 50px;
        height: 50px;
        margin-left: 20px;
    }
`;


export const BoxGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin: 0 30px;
        widht: 150px;
        height: 150px;
        cursor: pointer;
    }
    span {
        margin-top: 20px;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 2px;
    }

`;
export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid yellow;
    height: 90vh;
    border-radius: 20px;
`;

export const ImageContainer = styled.div`
    img {
        width: 200px !important;
        height: 200px;
        margin-bottom: 20px;
    }

`;

export const AboutContainer = styled.div``;


export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 10px 60px;
`;


export const CloseContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px; 
    cursor: pointer;
`;