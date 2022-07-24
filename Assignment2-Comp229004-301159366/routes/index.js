/* File name: Assignment1-Comp229004-301159366, Student’s Name: Fouad Ouardi, StudentID: 301159366, and Date 2022/June/04 */
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page', statement: 'An aspiring software developer trying their best to become one of the best'  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', about: 'My name is Fouad Ouardi and I′m software engineering student who studied all about html, css, javascript, nodejs, MYSQL, Express, C#, Java, python. I′ve also accumulated knowledge of many software development methodologies such as agile software! ' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', projects: 'Welcome to my Projects page.' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', services: 'Welcome to my Services page.' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', contact: 'fouadsphone@gmail.com' });
});
module.exports = router;
