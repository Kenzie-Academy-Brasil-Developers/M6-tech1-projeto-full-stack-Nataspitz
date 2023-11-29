import { css, styled } from 'styled-components';


export const StyleHeader = styled.header`
    box-shadow: 0 1px 10px 0 var(--grey-300);

    img{
        width: 180px;
        height: 60px;
    }

    .header__menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        min-width: 210px;
        
        svg{
            cursor: pointer;
            color: black;
        }
    }

    .header__search{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 100%;

        input{
            padding: 8px;
            width: 80%;
            border: 1px solid var(--brand-1);
            width: 100%;
            border-radius: 5px;
            transition: border 0.1s;
            outline: none;
        }
        input:focus{
            border: 2px solid var(--brand-1-hover);
        }

        svg{
            cursor: pointer;
            color: var(--brand-1);
            position: absolute;
            right: 12px;
            top: 9px;
            transition: border 0.1s;
        }
        svg:hover{
            color: var(--brand-1-hover);
        }
    }

    @media (min-width: 650px) {
        img{
            width: 250px;
            height: 80px;
        }

        .header__search{
            input{
                width: 50%;
                position: relative;
            }

            svg{
                position: absolute;
                left: 45%;
            }

        }
    }
`