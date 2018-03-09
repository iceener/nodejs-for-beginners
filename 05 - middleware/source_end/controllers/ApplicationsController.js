// Store new application
exports.store = (req, res) => {
    req.flash('form', req.body.first_name + ', you are a true hero!');
    res.redirect('/');
};

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');
    // Adam Gospodarczyk => ['Adam', 'Gospodarczyk']

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
};