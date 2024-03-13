import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";
import {  Link } from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="http://github.com/novfutu.png"
                alt="foto do usuário"
                />

                <div>
                    <span>Seja Bem-Vindo</span>
                    <strong>Vitor Montesquieu</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>

    )
}