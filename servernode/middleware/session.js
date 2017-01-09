/**
 *  Jesus Juan Aguilar - 01/2017
 *  
 *  Middleware Express session user login control.
 */
function isLoggedIn(req, res, next) {

    if (req.session.user)
        return next();

    res.redirect('/');
}

exports.isAuth = isLoggedIn;