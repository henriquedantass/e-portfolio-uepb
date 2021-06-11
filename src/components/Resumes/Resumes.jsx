import { Container, Title, Content} from './styles';
import {Navigation} from '../Navigation/Nagivation';
import  DataResume  from '../../Mocks/DataResume';
import * as images from '../../assets';

export const Resume = () => {
    return (
        <>
        <Navigation/>
        <Container>
            <Title>
            <span>Registro das Aulas</span>
            <img src= {images.register} alt="Icon" />
            </Title>
            {DataResume.map( item => (

            <Content className='container'>
                    <>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <span>{item.actor}</span>
                    </>
            </Content>
                ))}
        </Container>
        </>
    )

}