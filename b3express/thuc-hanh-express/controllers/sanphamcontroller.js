exports.getList = (req, res, next) => {
    
    let hoTen = "Nguyen van A";
    let objSP = {id:4, name: "Laptop"};

    res.render('sanpham/list', {user: hoTen, sp: objSP});
};

exports.addProduct = (req, res, next) => {
    
    res.render('sanpham/add');
};