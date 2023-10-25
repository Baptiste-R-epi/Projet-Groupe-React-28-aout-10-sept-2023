const httpStatus = require("http-status");
const {Router} = require("express");
const catchAsync = require("../utils/catchAsync").default;

const routerUser = Router();

routerUser.get(
    "/user/",
    catchAsync(async (req, res) => {
        res.status(httpStatus.OK).send({
            message: "YOLO user",
            success: true
        });
    })
);

module.exports = routerUser;
