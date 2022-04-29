module.exports = app => {
  const pages = require("../controllers/pages.controller.js");

  var router = require("express").Router();
  router.get("/recepcja", pages.reception);
  router.get("/market", pages.market);
  router.get("/thanks", pages.thanks);
  router.get("/error", pages.error);
  router.get("/", pages.gastro);
  router.get("/gastro", pages.gastro);

  app.use('/', router);
};
