import { Container, Form, Avatar} from './style'
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from 'react-icons/fi'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import {  Link } from 'react-router-dom'

export function Profile() {
    return (
        <Container>
            <header>
                    <Link to="/">
                        <FiArrowLeft/>
                    </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/novfutu.png" 
                    alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}