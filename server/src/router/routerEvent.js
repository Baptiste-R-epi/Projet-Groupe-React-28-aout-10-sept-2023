const httpStatus = require("http-status");
const { Router } = require("express");
const { getAll, getOne } = require("../apiService/apiAgendaService");
const catchAsync = require("../utils/catchAsync").default;

const routerEvent = Router();

routerEvent.get("/details", async (req, res) => {
  res.send(await getOne(req));
});

routerEvent.get("/", async (req, res) => {
  res.send(await getAll(req));
});

routerEvent.get("/search", async (req, res) => {
  res.send(await getBySearch(req));
});

module.exports = routerEvent;
