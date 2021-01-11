import express, { request, response } from 'express';

const app = express();

app.use(express.json());

// Rotas: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Métodos HTTP
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST: http://localhost:3333/users = Criar um usuário
// GET: http://localhost:3333/users = Listar usuários
// GET: http://localhost:3333/users/5 = Listar um usuário específico, com o "ID" de 5

// Tipos de parametros
// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros opcionais que vem na própria rota, filtrar por uma letra específica, paginação
// Request Body: Parâmetros para criação/atualização de informações

// Banco de dados SQL: SQLite
// SELECT * FROM users WHERE name = 'Diego'
// knex('users')
// 30:00 min

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

// Lista usuários
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

// Lista um único usuário
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

// Cadastra um novo usuário
app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})

app.listen(3333);