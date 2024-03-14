import { Container, Form, Background } from './style'
import { Input } from '../../Components/Input'
import {  FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../Components/Button'
import {  Link } from 'react-router-dom'
import { useState } from 'react'

import { api } from "../../services/api"




export function SingUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSingUp() {
        if(!name || !email || !password) {
             return alert("Preencha todos os campos")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível concluir o cadastro")
            }
        })
}


    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis </p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                    
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSingUp}/>

                <Link to="/">Voltar para  login</Link>
            </Form>

        </Container>
    )
}