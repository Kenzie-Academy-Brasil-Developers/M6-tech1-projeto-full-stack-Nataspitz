import { StyleHeader } from "./StyleHeeader";


export function Header({ children }: {children: React.ReactNode}) {
    return (
        <StyleHeader>
            {children}
        </StyleHeader>
    )
}