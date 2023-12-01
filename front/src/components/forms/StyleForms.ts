import { styled } from 'styled-components';

export const StyleForms = styled.div`
  background-color: var(--grey-200);
  box-shadow: 0 2px 10px 0 var(--grey-400);
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
  min-width: 200px; 
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  h3 {
    font-size: var(--font-title-two);
    font-weight: 700;
    color: var(--brand-1);
  }

  .edit__title{
     display: flex;
     flex-direction: column;

        p{
          font-size: var(--font-size-medium);
        }
   }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      margin-top: 15px;
      font-size: var(--font-size-medium);
      color: var(--grey-700);
    }

    input {
      padding: 8px 10px;
      border: 1px solid var(--brand-1);
      border-radius: 3px;
      transition: border 0.1s;
      outline: none;
    }

    input::placeholder {
      color: var(--grey-500);
    }

    input:focus {
      border: 2px solid var(--brand-1-hover);
    }

    .passwordView{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      height: 20px;

      label{
        font-size: var(--font-size-small);
        padding-bottom: 15px;
      }

    }

    button {
      border: none;
      border-radius: 3px;
      cursor: pointer;
      margin: 10px auto;
      height: 30px;
      width: 160px;
      color: var(--grey-100);
      font-weight: 500;
      background-color: var(--brand-1);
    }

    button:hover {
      background-color: var(--brand-1-hover);
      font-weight: 600;
      transform: scale(1.1);
    }

    .button_cancel{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--grey-100);
        font-size: var(--font-size-medium);
        background-color: var(--brand-1);
        width: 140px;
        height: 30px;
    }

    .button_cancel:hover {
        background-color: var(--brand-1-hover);
        font-weight: 600;
        transform: scale(1.1);
    }

}

    .edit__form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    
        input{
          width: 90%;
        }
      
    }

    .create_form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    
        input{
          width: 90%;
        }

        label{
          font-size: var(--font-size-medium);
          font-weight: 500;
        }
      
    }

    .login__register{
        display: flex;
        flex-direction: column;
        gap: 5px;
    
        .login__register--text{
            font-size: var(--font-size-small);
        }
      
        .login__register--link{
            cursor: pointer;
            font-size: var(--font-size-small);
            color: var(--brand-1);
        }
    }

    .register__login{
        display: flex;
        flex-direction: column;
        gap: 5px;
    
        .register__login--text{
            font-size: var(--font-size-small);
        }
      
        .register__login--link{
            cursor: pointer;
            font-size: var(--font-size-small);
            color: var(--brand-1);
        }
    }

    .form__delete{
        display: flex;
        margin-top: 10px;
        gap: 10px;

    p{
        font-size: var(--font-size-small);
    }

    button{
        cursor: pointer;
        border: none;
        background-color: red;
        border-radius: 3px;
        padding: 5px;
        color: var(--grey-100);
    }
}

@media (min-width: 768px) {
    .login__register{
        display: flex;
        flex-direction: row;
    }

    .register__login{
        display: flex;
        flex-direction: row;
    }
}
`