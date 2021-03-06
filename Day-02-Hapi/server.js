'use strict';

const Hapi = require("hapi");
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.register(require('inert'), (err) => {
    if (err)
    {
        throw err;
    }

    server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        reply.file("./hello.html");
    }
});
});


server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});