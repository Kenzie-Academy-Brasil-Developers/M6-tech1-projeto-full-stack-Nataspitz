import { StyleListHome } from './StyleListHome'

export function ListHome({ setRegisterRender, setLoginRender }: any) {
    return(
        <StyleListHome>
            <li onClick={() => setRegisterRender(true)}>
              <h2>Sou novo(a)</h2>
              <p>Junte-se a melhor plataforma de gestão de contatos clicando aqui!!</p>
            </li>
            <li onClick={() => setLoginRender(true)}>
              <h2>Vamos entrar</h2>
              <p>Faça o login, crie e gerencie seus contatos para ter controle sobre eles</p>
            </li>
        </StyleListHome>
    )
}