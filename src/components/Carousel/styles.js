import styled from 'styled-components';
import { Carousel as CarouselContainer} from 'react-responsive-carousel';


export const Carousel = styled(CarouselContainer)`
`;

export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;    
    padding: 3rem 0;
   
`;

export const BoxContent = styled.div`
    padding: 0 5rem;
    margin-top: -30px;
    text-align: left;

    h3 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
    }

    button {
        padding: 1rem 2rem;
        border-radius: 4px;
        background-color: transparent;
        border: 1px solid #EDD000;
        color: white;
        transition: 0.5s all;

        &:hover {
            border: 2px solid #EDD000;
        }

        a {
            color: white;
        }
    }

`;

export const BoxImage = styled.div`    
    img {
        width: 350px;
        height: 350px;
        margin-top: -20px;
    }
`;


export const Container = styled.div`
    padding: 2rem 4rem;
    width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10rem;
    
    img {
        widht: 50px;
        height: 50px;
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