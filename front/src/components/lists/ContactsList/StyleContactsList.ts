import styled from "styled-components";


export const StyleContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 30px;
    width: 100%;

    li{
        cursor: pointer;
        box-shadow: 0 1px 10px 0 var(--grey-300);
        border-bottom: 4px solid var(--grey-300);
        border-radius: 3px;
        background-color: var(--grey-200);
        /* max-width: 80%; */
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 5px;


        h3{
            font-size: var(--font-size-medium);
            color: var(--grey-600);
            font-weight: 500;
        }
    }
    li:hover{
        border-bottom: 4px solid var(--brand-1);
    }
`