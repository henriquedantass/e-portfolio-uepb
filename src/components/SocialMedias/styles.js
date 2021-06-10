import styled from 'styled-components';
import { Carousel as CarouselContent } from 'react-responsive-carousel';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
    padding: 0 5rem;
    padding-bottom: 200px;
`;

export const Carousel = styled(CarouselContent)`

`;

export const Arrow = styled.a`
  background: none;
  border: none;
  height: 10px;
  width: 10px;
  border-style: solid;
  border-width: 0px 2px 2px 0px;
  transform: ${props =>
    props.rot ? `rotate(${props.rot}deg)` : 'rotate(45deg)'};
  margin-top: 10px;
`;

export const Item = styled.div`
  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    margin-left: 10px;

    span {
      color: white;
      font-size: 20px;
      line-height: 67px;
      margin-left: 20px;
      font-family: 'FuturaPT Bold', sans-serif;
      cursor: pointer;
    }

    svg {
      transition: 0.2s ease-in-out;
      transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
      cursor: pointer;
      margin-left: 25px;
    }
  }

  main {
    max-height: ${props => (props.isOpen ? 1000 : 0)}px;
    overflow: hidden;
    transition: 1s ease-in-out;
  }
`;


export const BoxSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items:center;
  color: white;
  padding: 0 5rem;
  padding-bottom: 3rem;
`;

export const Infos = styled.section`
  height: 200px;
  margin-top: -40px;
  p {
    color: white;
    font-size: 18px;
    text-align: left;
    letter-spacing: 2px;
    font-family: 'FuturaPT Light', sans-serif;
    margin-bottom: 10px;
    width: 380px;
  }
`;

export const Design = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 10px;
    height: 400px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 150px;

  img {
    object-fit: cover;
    width: 55px;
    height: 40px;
    margin-top: -30px;
    margin-bottom: 30px;
    z-index: 100;
  }

  h1 {
    font-size: 20px;
    font-family: 'FuturaPT Light', sans-serif;
    font-weight: 600;
    text-align: center;
    color: black;
    span {
      font-family: 'FuturaPT Bold', sans-serif;
    }
  }
`;



export const Logo = styled.img`
  width: 30px;
  height: 30px;

`;


export const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;

  h2 {
    color:white;
    letter-spacing: 1px;
  }

  img {
    width: 35px;
    height: 35px;
    cursor: pointer !important;
    z-index: 999999;
  }
`