import { Container, Brand, Menu, Search, Content, NewNote} from './style'
import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { Notes } from '../../Components/Notes'
import { Section } from '../../Components/Section'
import { FiPlus, FiSearch} from 'react-icons/fi'
import {  Link } from 'react-router-dom'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="NodeJs"/>
                </li>

                
            
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelos título" icon={FiSearch}/>
            </Search>

            <Content>
                
                <Section title="Minhas Notas">

                <Notes data={{title: "React",
                 tags: [
                    {id: '1', name: 'react'},
                    {id: '2', name: 'Node.js'}
                ]
                 }}/>

                 

                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>

    )
}