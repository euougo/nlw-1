## Dia 1: Conceitos e ambiente
## Dia 2: Back-end da Aplicação
- [*] Explicando conceitos
    - [*] Rotas e recursos
        * localhost:3333/users
        * Rota: localhost:3333/users
            * Rota: Endereço completo da requisição
        * Recurso: /users
            * Recurso: Qual entidade estamos acessando do sistema
    - [*] Métodos HTTP
        * GET: Buscar uma ou mais informações do back-end
        * POST: Criar uma nova informação no back-end
        * PUT: Atualizar uma informação existente no back-end
        * DELETE: Remover uma informação do back-end
            * POST: http://localhost:3333/users = Criar um usuário
            * GET: http://localhost:3333/users = Listar usuários
            * GET: http://localhost:3333/users/5 = Listar um usuário específico, com o "ID" de 5
    - [*] Tipos de parâmetros
        * Request Param: Parâmetros que vem na própria rota que identificam um recurso
        * Query Param: Parâmetros opcionais que vem na própria rota, filtrar por uma letra específica, paginação
        * Request Body: Parâmetros para criação/atualização de informações
- [*] Utilizando o Insomnia
- [*] Qual banco de dados vamos utilizar?
    - [*] SQL: Postgres, MySQL, SQLite, SQL Server
        * SQLite: database.sqlite
        * KNEXJS: Escrever as queries em formato de Javascript
            * QUERY: SELECT * FROM users WHERE name = 'Diego'
            * KNEX: knex('users').where('name', 'Diego').select('*')
    - [*] NoSQL: MongoDB, CouchDB
- [*] Configurando conexão com o banco
- [*] Identificando entidades da aplicação
    - [*] points (Pontos de coleta)
        - [*] image
        - [*] name
        - [*] email
        - [*] whatsapp
        - [*] latitude
        - [*] longitude
        - [*] city
        - [*] uf
    - [*] items (items para coletar)
        - [*] image
        - [*] title
    - [*] point_items (Relacionamento dos items que um ponto coleta)
        - [*] point_id
        - [*] item_id
    - [*] Muitos para muitos
    * Migrations = Histórico do banco de dados
    * Exemplo:
        * Dois devs no mesmo projeto, mas cada um cria uma tabela para mesma coisa com nomes diferentes.
        * create table points
        * create table users
- [ ] Funcionalidades da aplicação
- [ ] Construção do app
- [ ] Adicionando CORS