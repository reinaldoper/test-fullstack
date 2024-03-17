## Teste técnico full-stack uol.

- Neste teste técnico, foi desenvolvida uma API que realiza operações de criação, busca, edição e exclusão de clientes. 
- Abaixo estão os detalhes relevantes sobre a aplicação:


---


### Tecnologias Utilizadas.

- Banco de Dados: PostgreSQL, hospedado no ElephantSQL.
- ORM: Prisma.
- Ambiente de Desenvolvimento: Node.js v16xx.


---


### Dependências:


```shell
 {
    "@prisma/client": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.1",
    "express": "^4.18.2"
 }
```

- Para instalar as dependências, execute o seguinte comando na raiz do projeto:


```shell
npm install
```

### Executando a Aplicação:


- Para iniciar a aplicação, utilize o seguinte comando::


```shell
npm run dev
```


### Rotas da Aplicação:


- GET /api/clients
- PUT /api/clients/:id
- DELETE /api/clients/:id
- GET /api/clients/:id
- POST /api/clients


### Corpo da Requisição para POST e PUT:


```shell
{
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
}
```

### Resposta Esperada para GET /api/clients:


```shell
message = [
  {
  "id": number,
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
  }
]
```


### Resposta esperada para GET /api/clients/:id:


```shell
{
  "status" : string,
  "email": string,
  "telefone": string,
  "cpf": string,
  "nome": string
}