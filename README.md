# M6-tech1-projeto-full-stack-Nataspitz

# Documentação 

## Requisitos

- Node
- Postgres

## Para rodar o projeto:

1. Crie um banco de dados Postgres.

2. Dentro da pasta Back, crie um arquivo `.env` utilizando o `.env.example` como base.

3. Abra um terminal e acesse a página Back:

    ```bash
    cd back
    ```

4. Instale todas as dependências do projeto:

    ```bash
    npm install
    ```

5. Rode as migrações:

    ```bash
    npm run typeorm:run -- -d ./src/migrations
    ```

6. Coloque a API para rodar no seu banco de dados:

    ```bash
    npm run dev
    ```

7. Abra outro terminal separado e acesse a pasta front:

    ```bash
    cd front
    ```

8. Instale todas as dependências:

    ```bash
    npm install
    ```

9. Rode a aplicação:

    ```bash
    npm run dev
    ```
