exports.getHome = (req, res, next) => {
    
    res.render('index');
};

exports.getInfo = (req, res, next) => {
    
    res.render('home');
};

