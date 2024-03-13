 import { Container, Links, Content } from './style'
 import { Header } from '../../Components/Header' 
 import { Button } from '../../Components/Button' 
 import { Section } from '../../Components/Section' 
 import { Tag } from '../../Components/Tag' 
 import { ButtonText } from '../../Components/ButtonText' 


 export function Details() {
  
  
  return (
    <Container>
     <Header/>
        <main>
          <Content>
          <ButtonText title="Excluir Notas"/>

            <h1>Introdução ao React</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam recusandae sint beatae, quia incidunt quam quos illum dolor adipisci, doloribus rem. Fuga impedit non delectus modi voluptatibus, tempora nostrum. Eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit a, recusandae quae facere quaerat neque omnis? Fugit nam exercitationem placeat autem officia, est amet, nemo dolore quaerat ducimus, vero magni.

            </p>

      <Section title="Links Uteis">
          <Links>
           <a href="#">Linkdin</a>
          </Links>
      </Section>

        <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Nodejs"/>
        </Section>
      <Button title="Voltar"/>
      </Content>
        </main>
    </Container>

  )
}