import styled from "styled-components";

export const StyleContactsList = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 30px;
    width: 100%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .newContact {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    gap: 10px;
    border: 2px solid var(--brand-1-hover);
    border-radius: 5px;
    padding: 10px;

    p {
      font-size: var(--font-size-medium);
      color: var(--brand-1-hover);
      font-weight: 500;
    }

    svg {
      color: var(--brand-1-hover);
    }
  }

  .newContact:hover {
    border: 2px solid var(--brand-1);

    p {
      color: var(--brand-1);
    }

    sv {
      color: var(--brand-1);
    }
  }

  li {
    cursor: pointer;
    box-shadow: 0 1px 10px 0 var(--grey-300);
    border-bottom: 4px solid var(--grey-300);
    border-radius: 3px;
    background-color: var(--grey-200);
    padding: 15px;
    /* max-width: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5px;

    h3 {
      font-size: var(--font-size-medium);
      color: var(--grey-600);
      font-weight: 500;
      margin-bottom: 10px;
    }

    .title {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 20px;
      margin-bottom: 10px;
    }

    .info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      margin-bottom: 5px;

      p {
        font-size: var(--font-size-small);
        color: var(--grey-600);
      }

      .listEmails{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        
        li{
            box-shadow: none;
            border: none;
            height: 20px;
            font-size: var(--font-size-small);
            margin: 0;
        }
      }
    }
  }
  li:hover {
    border-bottom: 4px solid var(--brand-1);
  }
`
