const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Ini adalah Homepage!';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman ini tidak dapat diakses dengan method tersebut!';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'Ini adalah halaman About';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return `Halaman ini tidak dapat diakses dengan method tersebut!`;
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    },
];


module.exports = routes;