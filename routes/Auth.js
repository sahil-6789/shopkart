const express = require('express');
const jwt = require('jsonwebtoken');
const { createUser, loginUser, checkAuth} = require('../controller/Auth');
const passport=require('passport');
const router = express.Router();
//  /auth is already added in base path
// router.post('/signup', createUser).post('/login', loginUser);
router.post('/signup', createUser)
.post('/login', passport.authenticate('local'), loginUser)
.get('/check', passport.authenticate('jwt'),checkAuth);

exports.router = router;