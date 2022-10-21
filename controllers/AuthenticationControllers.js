exports.login = (req, res) => {
    const { username, password } = req.body;
    if (!username, !password) return res.status(400).redirect('/error');
    if (username == "admin" && password == "Web999") {     
        req.session.isLoggedIn = true;          
        res.redirect("/");   
    }
};

exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.send('error');
        }
        else {
            res.redirect('/login')
        }
    })
}