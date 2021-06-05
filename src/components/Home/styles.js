import  styled  from 'styled-components' ;

export const Container = styled.div ``;

export const Content = styled.div`
    margin: 0 auto;
    widht: 1000px;
    display: grid;
    align-items: center;
    justify-items: center;



`;

export const Section = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media(max-width:900px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionBox = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid #EFEFEF;
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    color: white;


    &:hover {
        border: 2px solid #EDD000;
        transition: 0.5s;
        margin-top: -10px;
    }

    img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }
`;
