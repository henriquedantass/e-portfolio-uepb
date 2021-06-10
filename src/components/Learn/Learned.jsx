import {Container, Title, ContainerContent, Description, BoxGrid} from './styles'
import { Navigation } from '../Navigation/Nagivation';
import * as images from '../../assets';
import DataLearned from '../../Mocks/DataLearned';
export const Learned = () => {
    return (
        <>
        <Navigation/>
        <Container>
           <Title>
               <h1>Aprendizados</h1>
               <img src={images.cerebro} alt='Logo'></img>
           </Title>
           <BoxGrid>
           {DataLearned.map(item => {
               return (
                <ContainerContent>
                    <Description className='container'>
                        <p>{item.description}</p>
                        <span>{item.title}</span>
                    </Description>
                </ContainerContent>
               )
           })}
           </BoxGrid>
        </Container>
        </>
    )

}