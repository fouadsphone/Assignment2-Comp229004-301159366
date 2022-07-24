// create a reference to the model
let businessContactsModel = require('../models/business_contacts');

module.exports.businessContactsList = function(req, res, next) {  
    businessContactsModel.find((err, businessContactsList) => {
        //console.log(businessContactsList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business_contacts/list', {

                title: 'Business Contacts List View', 
                BusinessContactsList: businessContactsList,
                userName: req.user ? req.user.username : '',
            })            
        }
    }).sort({"name":1});
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    businessContactsModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business_contacts/add_edit', {
                title: 'Update View', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedItem = businessContactsModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    businessContactsModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business_contacts/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    businessContactsModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business_contacts/list');
        }
    });

}


module.exports.displayAddPage = (req, res, next) => {

    let newItem = businessContactsModel();

    res.render('business_contacts/add_edit', {
        title: 'Add a new contact',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = businessContactsModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,

    });

    businessContactsModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business_contacts/list');
        }
    });
    
}