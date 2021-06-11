import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 5rem;
    .container::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    .container::-webkit-scrollbar {
        width: 6px;
        background: #EDD000;
    }
    .container::-webkit-scrollbar-thumb {
        background: #EDD000;
        
    }

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
    margin: 20px auto;
    flex-direction: column;
    padding: 2rem 5rem;
    border: 1px solid yellow;
    overflow-y: auto;
    height: 400px;

    h1 {
        font-size: 25px;
        margin-bottom: 20px;

    }

    p {
        letter-spacing: 3px;
        text-align: left;
        padding: 0 5rem;
    }

    span {
        text-align: right;
        margin-top: 10px;

    }

    a {
        margin-left: 80px;
    }
    


`;