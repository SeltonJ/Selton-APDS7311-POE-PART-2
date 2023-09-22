function hsts(req, res, next){
    if (req.secure){
        res.setHeader(
            'Strict-Transport-security',
            'max-age=31536000, includeSubDomains; preload'
        );
    }
    next();
}

module.exports = hsts;
