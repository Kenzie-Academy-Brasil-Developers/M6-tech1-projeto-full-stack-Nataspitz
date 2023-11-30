import Link from "next/link";
import { StyleMenu } from "./StyleMenu";
import { Router, useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";


export function Menu() {
    const fromHomePage = useRouter()

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        fromHomePage.push('/')
    }

    return (
       <StyleMenu>
           <Link href={"/clients/profile"}>Edtar perfil</Link>
           <button onClick={logout}>Sair</button>
       </StyleMenu>
    )
}