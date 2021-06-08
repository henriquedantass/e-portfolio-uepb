import styled from 'styled-components';

export const Container = styled.div`
    widht: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 50px;
    height: 100vh;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    h1 {
        font-weight: bold;
        border-bottom: 2px solid yellow;
    }
    img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
    }
`;


export const ContainerContent = styled.div`
    width: 400px;
    height: 300px;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 15px;
    margin-top: 20px;
`;

export const Description = styled.div`
    p {
        font-size: 18px;
        margin-bottom: 10px;
    }

    span {
        display: flex;
        justify-content: flex-end;
        font-family: 'Roboto Bold', sans-serif;
        font-weight: bold;
    }
`;

export const BoxGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

`;