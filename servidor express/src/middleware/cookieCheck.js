module.exports = function(req, res, next){
    if(req.cookies.userLoveLook){
        req.session.user = req.cookies.userLoveLook;
        next()
    } else {
        next()
    }
}