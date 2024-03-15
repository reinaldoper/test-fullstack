# Projeto full-stack teste uol:

- Este projeto tem a finalidade de criar, listar, editar e excluir clientes.

## Este projeto necessita do backend em execução:

- Entre na pasta backend e siga os passos para rodar a API.


---

### Dependencies: 

```shell
  {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "cross-fetch": "^4.0.0",
    "react-router-dom": "^6.21.3"
  }
```

---

### Dependencias de desenvolvimento: 

```shell
{
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
```


## Clone a aplicação.


### dentro da pasta frontend:

 
 ```shell
 npm install && npm run dev
 ```

### Estrutura do Projeto:

- O projeto Clients segue uma estrutura organizada para garantir clareza e manutenibilidade do código. 
- Abaixo está uma visão geral da estrutura de diretórios:

```shell
frontend/
|-- src/
|   |-- .jest/
|   |-- assets/
|   |-- environment/
|   |-- components/
|   |-- pages/
|   |-- services/
|   |-- styles/
|   |-- routers/
|   |-- types/
|   |-- utils/
|   |-- tests/
|-- main.tsx
|-- tsconfig.json
|-- package.json
|-- ...
```

- src/: Contém os principais códigos fonte do projeto.
- .jest/ Configuração do jest.
- assets/: Contém as imgens do projeto.
- components/: Componentes React reutilizáveis.
- pages/: Páginas da aplicação.
- services/: Serviços para integração com API ou lógica de negócios.
- styles/: Estilos globais ou compartilhados.
- routers/: Rotas da aplicação.
- environment/: Variaveis.
- types/: Todas as tipagens da aplicação.
- tests/: Todos os testes da aplicação.
- utils/: Funções de validação cpf/telefone.
- main.tsx: Ponto de partida da aplicação.
- tsconfig.json: Configurações TypeScript.
- package.json: Dependências e scripts do projeto.


