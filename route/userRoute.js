const express = require('express');
const router = express.Router();
const {createUser,login, getUsers} = require('../controller/userControllers');
const {verifyToken} = require('../middleware/jwdMiddleware');


// router.get('/getUser', getUser);
router.post('/createUser', createUser);
router.post('/login',login);
router.get('/getUsers', verifyToken,getUsers);

module.exports = router;