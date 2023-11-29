import Link from "next/link";
import { StyleMenu } from "./StyleMenu";


export function Menu() {

    return (
        <StyleMenu>
            <Link href={"/clients/profile"}>Edtar perfil</Link>
            <button>Sair</button>
        </StyleMenu>
    )
}