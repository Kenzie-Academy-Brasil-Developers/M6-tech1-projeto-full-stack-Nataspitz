import styled from "styled-components";


export const StyleMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;

    a{
        text-decoration: none;
        font-size: var(--font-size-medium);
        color: var(--brand-1);
        font-weight: 700;
    }
    a:hover{
        color: var(--brand-1-hover);
    }

    button{
        cursor: pointer;
        border: none;
        font-size: var(--font-size-medium);
        color: var(--grey-100);
        font-weight: 700;
        background-color: var(--brand-1);
        height: 25px;
        width: 40px;
        border-radius: 5px;
        transition: background-color 0.1s;
        outline: auto;
    }
    button:hover{
        background-color: var(--brand-1-hover);
    }

    @media (min-width: 900px) {
        button{
            width: 80px;
        }
    }
`