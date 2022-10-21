exports.index = (req, res) => {
    //handle checklogin or something
    res.render('page1');
};

exports.admission = (req, res) => {
    res.render('page2');
}
exports.academic = (req, res) => {
    res.render('page3')
}

exports.research = (req, res) => {
    res.render('page4')
}

exports.contact = (req, res) => {
    res.render('page5')
}

exports.login = (req, res) => {
    res.render('page6',{isLoggedIn: req.session.isLoggedIn})
}
 
exports.error = (req, res) => {
    res.send('Error something went wrong');
}