import styled from 'styled-components';

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
            width: 150px;
        }
    }



`;