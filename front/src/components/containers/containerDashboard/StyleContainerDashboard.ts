import styled from "styled-components";


export const StyleContainerDashboard = styled.div`
    width: 80%;
    max-width: 900px; 
    margin: 0 auto; 
    padding: 20px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    h2{
        margin-top: 20px;
        font-size: var(--font-title-two);
        color: var(--brand-1);
        font-weight: 700;
    }
`