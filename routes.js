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
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat ditemukan';
        },
    },
];


module.exports = routes;