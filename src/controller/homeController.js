const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};
const CreateNewUser = (req, res) => {
    // console.log(typeof req.body);
    return res.send(req.body);
};

module.exports = {
    getHomePage,
    CreateNewUser,
};
