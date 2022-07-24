var express = require('express');
var router = express.Router();

let businessContactsController = require('../controller/business_contacts');

// Connect to our model
let business_contacts = require('../models/business_contacts');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET list of items */
router.get('/list', requireAuth, businessContactsController.businessContactsList);

// Routers for edit
router.get('/edit/:id', requireAuth, businessContactsController.displayEditPage);
router.post('/edit/:id', requireAuth, businessContactsController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, businessContactsController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessContactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, businessContactsController.processAddPage);

module.exports = router;