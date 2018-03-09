exports.notFound = (req, res, next) => {
    const err = new Error('404 page not found');
    err.status = 404;
    next(err);
};

exports.catchErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};