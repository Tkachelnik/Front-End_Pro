const express = require('express');
const usersRouter = express.Router();

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
let users = [new Person(1, 'Sasha', 18), new Person(2, 'Anya', 21), new Person(3, 'Misha', 47)];

usersRouter.use('/', express.static(`${__dirname}/public/users`));

usersRouter.use('/all', (request, response) => {
     response.send(users);
});

usersRouter.use('/:userId', (request, response) => {
    let userId = request.params['userId']
    if (request.method === 'GET') {
        let user = users[userId - 1];
        user === undefined ? response.send('No user with such id') : response.send(JSON.stringify(user));
    } else if (request.method === 'POST') {
        let user = request.body;
        if (user) {
            user = new Person(userId, 'someName', 0);
            users.push(user);
            response.send('User id added or changed');
        } else {
            response.send('Can not do this operation');
        }
    }
});


module.exports = usersRouter;