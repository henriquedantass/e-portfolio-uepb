import styled from 'styled-components';
import { Carousel as CarouselContainer} from 'react-responsive-carousel';


export const Carousel = styled(CarouselContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
    
    .carousel-slider {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
    }
`;

export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`;

export const BoxContent = styled.div`
    padding: 0 5rem;
    text-align: left;
    p {
        margin-bottom: 20px;
    }

`;

export const BoxImage = styled.div`
    img {
        widht: 200px;
        height: 200px;
    }
`;


export const Container = styled.div`
    padding: 1rem 4rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10rem;
    
    img {
        widht: 50px;
        height: 50px;
        margin-right: 20px;
    }

    span {
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 2px solid #EDD000;

    }

    .typing-animation {
        animation: typing 0.5s steps(40) 1s normal both;
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 130px;
        }
    }



`;