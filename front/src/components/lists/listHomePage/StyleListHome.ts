import { styled } from 'styled-components';


export const StyleListHome = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 30px;

    li{
        box-shadow: 0 2px 10px 0 var(--grey-400);
        background-color: var(--grey-200);
        border-radius: 5px;
        padding: 15px;
        min-width: 200px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        cursor: pointer;
        transition: transform 0.3s ease;
        overflow: hidden;

        h2{
            font-size: var(--font-title);
            color: var(--grey-600);
            font-weight: 500;
        }

        p{
            font-size: var(--font-size-medium);
            color: var(--grey-600);
            line-height: 1.5;
        }
    }
    li:hover{
        transform: scale(1.1);

        h2{
            color: var(--brand-1);
            font-weight: 700;
        }

        p{
            font-weight: 500;
        }
        
    }

    @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  
    li{
      width: 150px;
    }
  
  
  }
`