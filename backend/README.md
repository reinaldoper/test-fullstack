## Teste técnico full-stack uol.


---


### API que cria, buscar, edita e exclui clientes.

- Para está aplicação foi utilizado o DB PostgreSQL.
- Como ORM foi utilizado o Prisma.
- Ambiente de desenvolvimento nodeJs v16xx.


---


### Dependências:


```shell
"dependencies": {
    "@prisma/client": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.1",
    "express": "^4.18.2"
 }
```


- Clone o projeto.

- Na raiz do projeto:



```shell
npm install
```


- Rode a aplicação:


```shell
npm run dev
```


### Rotas da aplicação:

- GET /api/clients
- PUT /api/clients/:id
- DELETE /api/clients/:id
- GET /api/clients/:id
- POST /api/clients


### Corpo da requisição para POST:


```shell
{
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
}
```


### Corpo da requisição para PUT:


```shell
{
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
}
```

### Resposta esperada para getClients GET:


```shell
message = [
  {
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
  }
]
```