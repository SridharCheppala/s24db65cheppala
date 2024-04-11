var electronic = require('../models/electronic');
// List of all electronic
exports.electronic_list = async function (req, res) {
    try {
        theelectronic = await electronic.find();
        res.send(theelectronic);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.electronic_view_all_Page = async function (req, res) {
    try {
        theelectronic = await electronic.find();
        res.render('electronic', { title: 'electronic Search Results', results: theelectronic });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific electronic.
// for a specific Costume.
exports.electronic_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await electronic.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle electronic create on POST.
exports.electronic_create_post = async function (req, res) {
    console.log(req.body)
    let document = new electronic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.electronic_type = req.body.electronic_type;
    document.ratting = req.body.ratting;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle electronic delete from on DELETE.
exports.electronic_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: electronic delete DELETE ' + req.params.id);
};
// Handle electronic update form on PUT.
// Handle Costume update form on PUT.
exports.electronic_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await electronic.findById(req.params.id)
        // Do updates of properties
        if (req.body.electronic_type)
            toUpdate.electronic_type = req.body.electronic_type;
        if (req.body.ratting) toUpdate.ratting = req.body.ratting;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle Costume delete on DELETE.
exports.electronic_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await electronic.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle a show one view with id specified by query
exports.electronic_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await electronic.findById( req.query.id)
    res.render('electronicdetail',
    { title: 'electronic Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.electronic_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electroniccreate', { title: 'electronic Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
// query provides the id
exports.electronic_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await electronic.findById(req.query.id)
    res.render('electronicupdate', { title: 'electronic Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.electronic_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await electronic.findById(req.query.id)
    res.render('electronicdelete', { title: 'electronic Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
