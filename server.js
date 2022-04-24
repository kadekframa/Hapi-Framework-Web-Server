const Hapi = require('@hapi/hapi');
const { route } = require('@hapi/hapi/lib/cors');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.info(`Server berjalan pada ${server.info.uri}`);
}

init();