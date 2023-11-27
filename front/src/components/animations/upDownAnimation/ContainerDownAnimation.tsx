import { StyleDownAnimation } from "./StyleDownAnimation";


export function ContainerDownAnimation({children}: {children: React.ReactNode}) {
    return (
        <StyleDownAnimation>
            {children}
        </StyleDownAnimation>
    )
}