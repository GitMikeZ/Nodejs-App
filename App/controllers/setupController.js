var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        // seed database
        var starterTodos = [
            {
                username: 'John',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Jane',
                todo: 'Buy carrots',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Tom',
                todo: 'Buy oranges',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}