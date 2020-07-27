var http = require('http');
var fs = require('fs');
var server = require('server');

const items = filteredNav(server, [
    {
        name: "home_page0",
        url: '/',
    },
    {
        name: "home_page",
        url: '/home_page',
    },
    {
        name: "load_more",
        url: '/load_more',
    },
    {
        name: "ajwain",
        url: '/ajwain',
    },
]);
