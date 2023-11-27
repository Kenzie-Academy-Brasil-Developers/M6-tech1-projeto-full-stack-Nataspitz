import { StyleUpAnimation } from "./StyleUpDownAnimation";


export function ContainerUpAnimation({children}: {children: React.ReactNode}) {
    return (
        <StyleUpAnimation>
            {children}
        </StyleUpAnimation>
    )
}