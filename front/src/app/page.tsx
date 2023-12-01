"use client"
import { Footer } from '../components/footer/Footer'
import { ContainerMain } from '../components/containers/containerMain/ContainerMain'
import { GlobalStyles } from '../styles/GlobalStyle'
import { ListHome } from '../components/lists/listHomePage/ListHome'
import { useContext, useState } from 'react'
import { FormRegister } from '@/components/forms/registerClientsForm/FormRegister'
import { Header } from '@/components/header/Header'
import { FormLogin } from '@/components/forms/loginForm/FormLogin'
import { ClientsContext } from '@/contexts/clients/clientsContext'


export default function Home() {
  const [registerRender, setRegisterRender] = useState(false)
  const { loginRender, setLoginRender } = useContext(ClientsContext)

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <ContainerMain>
          <div className='animation__home'>
            {registerRender || loginRender ? (
              <>
                {registerRender? <FormRegister setLoginRender={setLoginRender} setRegisterRender={setRegisterRender}/>:null}
                {loginRender? <FormLogin setRegisterRender={setRegisterRender} setLoginRender={setLoginRender}/>:null}
              </>
            ) : (
                <ListHome setRegisterRender={setRegisterRender} setLoginRender={setLoginRender}/>
            )}
          </div>
        </ContainerMain>
      </main>
      <Footer/> 
    </>
  )
}
