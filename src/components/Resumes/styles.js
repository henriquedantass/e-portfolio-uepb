import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 5rem;

`;

export const Title = styled.div `
    display: flex;
    align-items: center;

    span {
        border-bottom: 2px solid #EDD000;
        font-size: 26px;
        font-weight: bold;
    }

    img {
        margin-left: 15px;
        widht: 50px;
        height: 50px;
    }

`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 5rem;

    h1 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    p {
        letter-spacing: 3px;
        text-align: left;
        padding: 0 5rem;
    }


`;