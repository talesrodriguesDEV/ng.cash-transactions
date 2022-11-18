# NG.CASH - A carteira digital do futuro (Code Challenge)

## Preview

### Home
![Home](./home.png | width=100)

### Sign in
![SigIn](./sigIn.png | width=100)

### Log in
![LogIn](./logIn.png | width=100)

### User
![User](./user.png | width=100)

### Make transaction
![Transaction](./transaction.png | width=100)

### Transactions list
![Transactions](./transactions.png | width=100)

## Instalação (equivale ao download da pasta .zip e conseguinte descompactação)

```bash
git clone git@github.com:talesrodriguesDEV/ng.cash-transactions.git
```
## Configuração

### Backend

1. Entre no diretório ng.cash-transactions/backend e instale as dependências:

```bash
npm install
```

2. Renomeie o arquivo .env.example para .env e faça as devidas substituições, por exemplo:

```.env
POSTGRES_PASSWORD=suaSenha
POSTGRES_PORT=portaPostgress (ex: 5432)
ADMINER_PORT=portaAdminer (ex: 8080)
NODE_PORT=portaNode (ex: 3001)
JWT_SECRET=qualquercoisa
```

3. Inicialize o docker-compose:

```bash
docker-compose up -d
```

4. Execute os seguintes comandos para entrar no container node e inicializar o banco de dados:

```bash
docker exec -it ngcash_node bash
npx sequelize-cli db:create && npx sequelize-cli db:migrate
npm run build
npm start
```

### Frontend

1. Entre no diretório ng.cash-transactions/frontend e instale as dependências:

```bash
npm install
```

2. Altere o arquivo utils/nodePort.ts caso tenha escolhido uma porta node diferente da 3001

3. Rode os seguintes comandos para iniciar a aplicação React:

```bash
npm run build
npm start
```
