exports.getListUsers = (req, res, next) => {
    
    const items = [{id:1,fname: "Bui van a", uname: "abuivan231", fass: "a1231", email: "abuivan231@gmail.com", status: "active"},
                    {id:2,fname: "Bui van a", uname: "abuivan232", fass: "a1232", email: "abuivan232@gmail.com", status: "active"},
                    {id:3,fname: "Bui van a", uname: "abuivan233", fass: "a1233", email: "abuivan233@gmail.com", status: "active"},
                    {id:4,fname: "Bui van a", uname: "abuivan234", fass: "a1234", email: "abuivan234@gmail.com", status: "active"},
                    {id:5,fname: "Bui van a", uname: "abuivan235", fass: "a1235", email: "abuivan235@gmail.com", status: "active"},
                  ];

    res.render('nguoidung/listUser', {items});
};

let usersInfo = [];

exports.addUsers = (req, res, next) => {
    usersInfo = {
        fname2: req.body.fname,
        uname2: req.body.uname,
        fass2: req.body.fass,
        email2: req.body.email,
        status2: req.body.status,
    };
    //em không biết truyền dữ liệu lên list user dù đã tim mọi cách có thể biết
    res.render('nguoidung/addUsers', { usersInfo });
};