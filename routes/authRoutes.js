const express = require('express');
const validInfo = require('../validInfo');
const { register, signin } = require('../controllers/auth.controller');

const router = express.Router();
router.post('/signup',validInfo, register);
router.post('/signin',validInfo, signin)

module.exports = router;