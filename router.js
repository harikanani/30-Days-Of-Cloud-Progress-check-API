const express = require("express");
const APIController = require("./controllers/api");
const apiRouter = express.Router();

apiRouter.get("/find-data", APIController.findData);

apiRouter.get("/leaderboard", APIController.leaderboard);

module.exports = apiRouter;
