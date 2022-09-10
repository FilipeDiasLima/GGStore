<div align="center">
  <h1> Programação Web II :computer: </h1>
  <h6> Repositório de Programação para Dispositivos Móveis Usando Tecnologia Web </h6>
</div>

<br />
<hr width="100%"/>
<br />
<div align="center">
  <h3>Preview da Loja</h3>
  <img src="./images/Home.png" width="800"/>
</div>
 
### Como rodar o projeto:
```
# Clone o projeto
git clone https://github.com/FilipeDiasLima/ProgWeb2.git

# Abra o projeto na raíz
cd progweb2

# Caso não tenha um arquivo .env, ao final do ReadMe terá as variaveis ambientes

# Execute o docker e rode o comando abaixo:
docker-compose up

# Entre na pasta "server"
cd server

# Crie as migrations e as seeds
yarn sequelize db:migrate
yarn sequelize db:seed:all

# Reincie o projeto e rode o docker
docker-compose up

```

### Login como admininstrador:
```
Email: admin@admin.com
Senha: admin
```

<div align="center"> 
  <h3>Mais imagens</h3>
  <img src="./images/Library.png" width="800"/>
  <img src="./images/Cart.png" width="800"/>
</div>

<br />
<hr width="100%"/>
<br />

<div align="center">
  <span>Design inspirado em: <a href='https://dribbble.com/shots/18271611-Game-Store-Website-animation'>Game Store Website animation, por Alexander Kontsevoy</a></span>
</div>

### Variaveis ambientes:
```
#DATABASE
POSTGRES_USER=docker
POSTGRES_PASSWORD=progweb2
POSTGRES_DB=ggstore
PORT_DATABASE=5432
# HOST_DATABASE=db_ggstore
HOST_DATABASE=localhost

#BACKEND
PORT_BACK=3333
#ggstoreencrypt
APP_SECRET=56f3ac85396124b960a622d95a78fc5e

#FRONTEND
PORT=3366
```
