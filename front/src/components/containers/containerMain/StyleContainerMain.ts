import { css, styled } from 'styled-components'

interface IStyleContainerMainProps {
    header?: "dashboard"
}

export const StyleContainerMain = styled.div<IStyleContainerMainProps>`
    width: 80%;
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 20px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    img{
        width: 250px;
        height: 72px;
    }

    .animation__home{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${({header}) => {
        if (header === "dashboard") {
            return css`
            @media (min-width: 1000px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 10px;

                .header__search{
                    width: 100%;
                }
            }

            `
        }
    }}
`