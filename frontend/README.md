# Aplicativo de Gerenciamento de Clientes:

- Este é um aplicativo desenvolvido em React-vite e TypeScript, utilizando a biblioteca w3.css para criar, listar e editar clientes.

## Pré-requisitos:

- Para executar este projeto, é necessário ter o backend em execução. Siga as instruções na pasta "backend" para iniciar a API.


---


### Dependencies: 


```shell
  {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
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
    "vite": "^5.0.8"
  }
```


### Instalação e Execução:


- Dentro da pasta "frontend", execute os seguintes comandos:

 
 ```shell
 npm install && npm run dev
 ```

### Testes:


- Para executar os testes, utilize os seguintes comandos:


```shell
npm run test
```


```shell
npm run test:coverage
```



### Estrutura do Projeto:

- O projeto Clients segue uma estrutura organizada para garantir clareza e manutenibilidade do código. 
- Abaixo está uma visão geral da estrutura de diretórios:

```shell
frontend/
|-- .jest/
|-- src/
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


### Considerações:

- Este projeto inclui um verificador de CPF.
- Números de telefone devem seguir o formato (xx) xxxxx-xxxx.
- E-mails devem ser únicos no sistema.