import { StyleContainerMain } from './StyleContainerMain'
import styles from './style.module.css'

interface IContainerMainProps{
    header?: "dashboard" | undefined;
    children: React.ReactNode
}

export function ContainerMain({ header, children }: IContainerMainProps){
    return(
        <StyleContainerMain header={header}>
            {children}
        </StyleContainerMain>
    )
}