exports.home = (req, res) => {
    res.render('home', {
        formMessage: req.flash('form')
    });
};