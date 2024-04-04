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
exports.electronic_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: electronic detail: ' + req.params.id);
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
exports.electronic_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: electronic update PUT' + req.params.id);
};