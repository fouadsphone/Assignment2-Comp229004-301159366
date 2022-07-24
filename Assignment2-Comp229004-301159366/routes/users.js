/* File name: Assignment1-Comp229004-301159366, Student’s Name: Fouad Ouardi, StudentID: 301159366, and Date 2022/June/04 */
let express = require('express');
let router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
