## Teste técnico full-stack uol.


---


### Aplicação que cria, buscar, edita e exclui clientes.
- Para está aplicação foi utilizado o DB PostgreSQL.
- Como ORM foi utilizado o Prisma.


---


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