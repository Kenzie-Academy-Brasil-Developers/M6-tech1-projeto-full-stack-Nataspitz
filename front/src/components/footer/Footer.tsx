import { ContainerMain } from '../containers/containerMain/ContainerMain';
import { StyleFooter } from './StyleFooter';


export function Footer() {
    return(
        <StyleFooter>
            <ContainerMain>
                <p>&copy; 2023 Kenzie Contacts.</p>
                <p>Todos os direitos reservados.</p>
            </ContainerMain>
        </StyleFooter>
    )
}