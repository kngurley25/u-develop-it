// central for all api routes

const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
route.use(require("./voterRoutes"));

module.exports = router;