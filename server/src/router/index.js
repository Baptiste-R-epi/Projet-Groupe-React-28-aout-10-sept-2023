const {Router} = require("express");
const routerDefault = require("./router_default");
const routerUser = require("./routerUser");
const routerEvent = require("./routerEvent");

const router = Router();

const routes = [
    {
        path: "/",
        router: routerDefault,
    },
    {
        path: "/user",
        router: routerUser,
    },
    {
        path: "/event",
        router: routerEvent,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

module.exports = router;