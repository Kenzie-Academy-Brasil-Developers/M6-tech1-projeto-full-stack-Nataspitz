"use client"
import Image from 'next/image'
import { Footer } from '../components/footer/Footer'
import { ContainerMain } from '../components/containers/containerMain/ContainerMain'
import logo from '../assets/imgs/Logo.png'
import { GlobalStyles } from '../styles/GlobalStyle'
import { ListHome } from '../components/lists/listHomePage/ListHome'
import { useState } from 'react'
import { FormRegister } from '@/components/forms/register/FormRegister'
import { Header } from '@/components/header/Header'
import { FormLogin } from '@/components/forms/login/FormLogin'
import { ContainerUpAnimation } from '@/components/animations/upDownAnimation/ContainerUpAnimation'
import { ContainerDownAnimation } from '@/components/animations/upDownAnimation/ContainerDownAnimation'

export default function Home() {
  const [registerRender, setRegisterRender] = useState(false)
  const [loginRender, setLoginRender] = useState(false)

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
