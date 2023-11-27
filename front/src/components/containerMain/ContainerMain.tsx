import { StyleContainerMain } from './StyleContainerMain'
import styles from './style.module.css'

export function ContainerMain({children}: {children: React.ReactNode}){
    return(
        <StyleContainerMain >
            {children}
        </StyleContainerMain>
    )
}