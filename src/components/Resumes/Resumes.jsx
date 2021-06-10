import { Container, Title, Content} from './styles';
import {Navigation} from '../Navigation/Nagivation';
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
            <Content>
                <h1>Nome da Aula</h1>
                <p>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has been the industry's s
                    tandard dummy text ever since the 1500s,
                     when an unknown printer took a galley 
                     of type and scrambled it to make</p>
            </Content>
        </Container>
        </>
    )

}