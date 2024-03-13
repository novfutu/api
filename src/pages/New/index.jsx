import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Textarea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'
import { Button } from '../../Components/Button'
import { Container, Form } from './style'
import {  Link } from 'react-router-dom'

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/"> Voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observações"/> 

                    <Section title="Links uteis">
                        <NoteItem value="adsdddddddafsdafgsdg"/> 
                        <NoteItem isNew/> 
                    </Section>
                          <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/> 
                             <NoteItem isNew placeholder="Nova tag"/> 
                        </div>
                         </Section>

                        <Button title="Salvar"/>
                  
                </Form>
            </main>
        </Container>
    )
}