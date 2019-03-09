var express = require('express');
var passport = require('passport');
var router = express.Router();

var csv = require('csv-express');
var Sta = require('../models/State.models.js');
var Cty = require('../models/City.models.js');
var Ara = require('../models/Area.models.js');
var Cmp = require('../models/Company.models.js');
var Sup = require('../models/Supplier.models.js');
var Bnd = require('../models/Brand.models.js');
var Siz = require('../models/Size.models.js');
var Cteg = require('../models/Category.models.js');
var Colr = require('../models/Color.models.js');
var Off = require('../models/Offer.models.js');
var Typwrk = require('../models/TypesOfWork.models.js');
var Prod = require('../models/Product.models.js');
var Tler = require('../models/Tailor.models.js');
var Pur = require('../models/Purchase.models.js');
var PurReturn = require('../models/PurchaseReturn.models.js');
var Cont = require('../models/ContactUs.models.js');
var Nw = require('../models/NewsletterSubscription.models.js');
var Custom = require('../models/CustomeOrder.models.js');
var AddTo = require('../models/AddToCart.models.js');
var Fed = require('../models/Feedback.models.js');
var Sals = require('../models/Sales.models.js');

/* GET home page. */




/** demo report */


router.get('/CustomeOrderReport', function(req, res, next) {
    var filename = "CustomeOrder.csv";
    var dataArray;
    Custom.find().lean().exec({}, function(err, products) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(products, true);
    });
});





router.get('/exporttocsv', function(req, res, next) {
    var filename = "products.csv";
    var dataArray;
    Prod.find().lean().exec({}, function(err, products) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(products, true);
    });
});

/**supplier report */

router.get('/SupplierReport', function(req, res, next) {
    var filename = "Supplier.csv";
    var dataArray;
    Sup.find().lean().exec({}, function(err, products) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(products, true);
    });
});


/** Purchase report */
router.get('/PurchaseReport', function(req, res, next) {
    var filename = "Purchase.csv";
    var dataArray;
    Pur.find().lean().exec({}, function(err, products) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(products, true);
    });
});

/** tailor report */
router.get('/TailorReport', function(req, res, next) {
    var filename = "Tailor.csv";
    var dataArray;
    Tler.find().lean().exec({}, function(err, products) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(products, true);
    });
});


/** */







router.get('/Tailor', function(req, res, next) {

    Cmp.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render('Tailor', {
                users: users
            });
            console.log(users);
        }
    });

});

router.post('/Tailor', function(req, res, next) {

    const st = new Tler({
        id: 0,
        Tailor_Name: req.body.Tailor_Name,
        Address: req.body.Address,
        Mobile: req.body.Mobile,
        Email_ID: req.body.Email_ID,
        Company_Name: req.body.Company_Name


    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Tailor');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllTailor', function(req, res, next) {
    Tler.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllTailor', {
            ShowAllTailor: data
        });
    });
});

router.get('/deletesTailor/:id', function(req, res) {
    Tler.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllTailor');
        } else {
            res.redirect('/ShowAllTailor');
        }
    });
});


router.get('/edtTailor/:id', function(req, res) {
    console.log(req.params.id);
    Tler.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            Cmp.find(function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(user);

                    res.render('EditTailor', {
                        EditTailor: user,
                        users: users
                    });
                }
            });
        }
    });
});

/* UPDATE types of work */
router.post('/edtTailor/:id', function(req, res) {
    Tler.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllTailor');
        }
    });
});

/**start Types Of Work */
router.get('/TypesOfWork', function(req, res, next) {
    res.render('TypesOfWork');
});

router.post('/TypesOfWork', function(req, res, next) {

    const st = new Typwrk({
        id: 0,
        Work_Name: req.body.Work_Name,

    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/TypesOfWork');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllTypesOfWork', function(req, res, next) {
    Typwrk.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllTypesOfWork', {
            ShowAllTypesOfWork: data
        });
    });
});
router.get('/deletesTypesOfWork/:id', function(req, res) {
    Typwrk.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllTypesOfWork');
        } else {
            res.redirect('/ShowAllTypesOfWork');
        }
    });
});

router.get('/edtTypesOfWork/:id', function(req, res) {
    console.log(req.params.id);
    Typwrk.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditTypesOfWork', {
                EditTypesOfWork: user
            });
        }
    });
});

/* UPDATE types of work */
router.post('/edtTypesOfWork/:id', function(req, res) {
    Typwrk.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllTypesOfWork');
        }
    });
});


/**city start*/
router.get('/City', function(req, res, next) {
    console.log("error area",req.query);
    Sta.find(function(err, users) {

        if (err) {
            console.log(err);
        } else {
            res.render('City', {
                users: users,
                error:(req.query.error=="true"?true:false)
            });
            console.log(users);
        }
    });

});
/** add city */
router.post('/City', function(req, res, next) {
    Cty.find({
        City_Name: req.body.City_Name
    }, function(err, city) {
        if (city.length == 0) {

            const st = new Cty({
                id: 0,
                State_Name: req.body.State_Name,
                City_Name: req.body.City_Name,


            });
            st.save().then(() => {
                console.log("insert success");
                res.redirect('/City');

            }).catch(() => {
                console.log("error");
            });

        } else {
            res.redirect('/City?error=true');
        }
    })

});

router.get('/ShowAllCity', function(req, res, next) {
    Cty.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllCity', {
            ShowAllCity: data
        });
    });
});

router.get('/deletes/:id', function(req, res) {
    Cty.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllCity');
        } else {
            res.redirect('/ShowAllCity');
        }
    });
});

router.get('/edt/:id', function(req, res) {
    console.log(req.params.id);
    Cty.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditCity', {
                EditCity: user
            });
        }
    });
});

/* UPDATE city */
router.post('/edt/:id', function(req, res) {
    Cty.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllCity');
        }
    });
});

/**state add */
router.post('/State', function(req, res, next) {
    Sta.find({
        State_Name: req.body.State_Name
    }, function(err, state) {
        if (state.length == 0) {
            const st = new Sta({
                id: 0,
                State_Name: req.body.State_Name,

            });
            st.save().then(() => {
                console.log("insert success");
                res.redirect('/State');

            }).catch(() => {
                console.log("error");
            });
        } else {
            res.redirect('/State?error=true');
        }
    })
});
//List Table Data
router.get('/ShowAllState', function(req, res, next) {
    Sta.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllState', {
            ShowAllState: data
        });
    });
});
/**state delete */
router.get('/delete/:id', function(req, res) {
    Sta.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllState');
        } else {
            res.redirect('/ShowAllState');
        }
    });
});
/**edit state */
/* GET SINGLE User BY ID */
router.get('/edits/:id', function(req, res) {
    console.log(req.params.id);
    Sta.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditState', {
                EditState: user
            });
        }
    });
});

/* UPDATE Supplier */
router.post('/edits/:id', function(req, res) {
    Sta.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllState');
        }
    });
});


router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/State', function(req, res, next) {
    res.render('State',{
        error:(req.query.error=="true"?true:false)
        
    });
});

router.get('/login', function(req, res, next) {
    res.render('login.ejs', {
        message: req.flash('loginMessage')
    });
});

router.get('/signup', function(req, res) {
    res.render('signup.ejs', {
        message: req.flash('signupMessage')
    });
});

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user: req.user
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

/**Start Area */

router.get('/Area', function(req, res, next) {
    console.log("error area",req.query);
    Cty.find(function(err, users) {
        
        if (err) {
            console.log(err);
        } else {
            res.render('Area', {
                users: users,
                error:(req.query.error=="true"?true:false)
            });
            console.log(users);
        }
    });

});
router.post('/Area', function(req, res, next) {
    Ara.find({
        Area_Name: req.body.Area_Name
    }, function(err, area) {
        if (area.length == 0) {
            const st = new Ara({
                id: 0,
                Area_Name: req.body.Area_Name,
                City_Name: req.body.City_Name,
                Pincode: req.body.Pincode


            });
            st.save().then(() => {
                console.log("insert success");
                res.redirect('/Area');

            }).catch(() => {
                console.log("error");
            });
        } else {
            res.redirect('/Area?error=true');
        }
    })

});

router.get('/ShowAllArea', function(req, res, next) {
    Ara.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllArea', {
            ShowAllArea: data
        });
    });
});

router.get('/deleteArea/:id', function(req, res) {
    Ara.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllArea');
        } else {
            res.redirect('/ShowAllArea');
        }
    });
});

router.get('/edts/:id', function(req, res) {
    console.log(req.params.id);
    Ara.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditArea', {
                EditArea: user
            });
        }
    });
});

/* UPDATE city */
router.post('/edts/:id', function(req, res) {
    Ara.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllArea');
        }
    });
});


/**company start */
router.get('/Company', function(req, res, next) {
    res.render('Company');
});

router.post('/Company', function(req, res, next) {

    const st = new Cmp({
        id: 0,
        Company_Name: req.body.Company_Name,
        Address: req.body.Address,
        Mobile: req.body.Mobile,
        Email_ID: req.body.Email_ID,
        Area: req.body.Area,


    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Company');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllCompany', function(req, res, next) {
    Cmp.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllCompany', {
            ShowAllCompany: data
        });
    });
});

router.get('/deleteCompany/:id', function(req, res) {
    Cmp.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllCompany');
        } else {
            res.redirect('/ShowAllCompany');
        }
    });
});

router.get('/edtsCompany/:id', function(req, res) {
    console.log(req.params.id);
    Cmp.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditCompany', {
                EditCompany: user
            });
        }
    });
});

/* UPDATE city */
router.post('/edtsCompany/:id', function(req, res) {
    Cmp.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllCompany');
        }
    });
});

/**start supplier */

router.get('/Supplier', function(req, res, next) {
    Cty.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            Ara.find(function(err, arusers) {
                if (err) {
                    console.log(err);
                } else {
                    return res.render('Supplier', {
                        users: users,
                        arusers: arusers
                    });
                    console.log(users);
                }
            });
            // res.render('Supplier', { users: users });
            // console.log(users);
        }
    });

});

router.post('/Supplier', function(req, res, next) {

    const st = new Sup({
        id: 0,
        Supplier_Name: req.body.Supplier_Name,
        Address: req.body.Address,
        Mobile: req.body.Mobile,
        Email_ID: req.body.Email_ID,
        Area_Name: req.body.Area_Name,
        City_Name: req.body.City_Name,


    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Supplier');

    }).catch(() => {
        console.log("error");
    });
});


router.get('/getarea', function(req, res, next) {
    Ara.find({
        City_Name: req.query.city_name
    }, function(err, data) {
        res.json({
            area: data
        })
    })
});


router.get('/ShowAllSupplier', function(req, res, next) {
    Sup.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllSupplier', {
            ShowAllSupplier: data
        });
    });
});
router.get('/deleteSupplier/:id', function(req, res) {
    Sup.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllSupplier');
        } else {
            res.redirect('/ShowAllSupplier');
        }
    });
});
router.get('/edtsSupplier/:id', function(req, res) {
    console.log(req.params.id);
    Sup.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            Cty.find(function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    Ara.find(function(err, arusers) {
                        if (err) {
                            console.log(err);
                        } else {
                            return res.render('EditSupplier', {
                                users: users,
                                arusers: arusers,
                                EditSupplier: user
                            });
                            console.log(users);
                        }
                    });
                    // res.render('Supplier', { users: users });
                    // console.log(users);
                }
            });
        }
    });
});
/* UPDATE Supplier */
router.post('/edtsSupplier/:id', function(req, res) {
    Sup.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllSupplier');
        }
    });
});
/**brand */
router.get('/Brand', function(req, res, next) {
    res.render('Brand');
});


router.post('/Brand', function(req, res, next) {

    const st = new Bnd({
        id: 0,
        Brand_Name: req.body.Brand_Name,

    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Brand');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllBrand', function(req, res, next) {
    Bnd.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllBrand', {
            ShowAllBrand: data
        });
    });
});

router.get('/deleteBrand/:id', function(req, res) {
    Bnd.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllBrand');
        } else {
            res.redirect('/ShowAllBrand');
        }
    });
});

router.get('/edtsBrand/:id', function(req, res) {
    console.log(req.params.id);
    Bnd.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditBrand', {
                EditBrand: user
            });
        }
    });
});

/* UPDATE Brand */
router.post('/edtsBrand/:id', function(req, res) {
    Bnd.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllBrand');
        }
    });
});

router.get('/Size', function(req, res, next) {
    res.render('Size');
});

router.post('/Size', function(req, res, next) {

    const st = new Siz({
        id: 0,
        Size: req.body.Size,

    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Size');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllSize', function(req, res, next) {
    Siz.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllSize', {
            ShowAllSize: data
        });
    });
});
router.get('/deleteSize/:id', function(req, res) {
    Siz.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllSize');
        } else {
            res.redirect('/ShowAllSize');
        }
    });
});

router.get('/edtsSize/:id', function(req, res) {
    console.log(req.params.id);
    Siz.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditSize', {
                EditSize: user
            });
        }
    });
});

/* UPDATE Brand */
router.post('/edtsSize/:id', function(req, res) {
    Siz.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllSize');
        }
    });
});

/**start category */

router.get('/Category', function(req, res, next) {
    res.render('Category');
});
router.post('/Category', function(req, res, next) {
    Cteg.find({
        Category_Name: req.body.Category_Name
    }, function(err, category) {
        if (category.length == 0) {
            const st = new Cteg({
                id: 0,
                Category_Name: req.body.Category_Name,

            });
            st.save().then(() => {
                console.log("insert success");
                res.redirect('/Category');

            }).catch(() => {
                console.log("error");
            });
        } else {
            res.redirect('/Category');
        }
    })

});

router.get('/ShowAllCategory', function(req, res, next) {
    Cteg.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllCategory', {
            ShowAllCategory: data
        });
    });
});

router.get('/deleteCategory/:id', function(req, res) {
    Cteg.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllCategory');
        } else {
            res.redirect('/ShowAllCategory');
        }
    });
});


router.get('/edtsCategory/:id', function(req, res) {
    console.log(req.params.id);
    Cteg.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditCategory', {
                EditCategory: user
            });
        }
    });
});

/* UPDATE Brand */
router.post('/edtsCategory/:id', function(req, res) {
    Cteg.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllCategory');
        }
    });
});
/**start color */
router.get('/Color', function(req, res, next) {
    res.render('Color');
});

router.post('/Color', function(req, res, next) {

    const st = new Colr({
        id: 0,
        Color_Name: req.body.Color_Name,

    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Color');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllColor', function(req, res, next) {
    Colr.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllColor', {
            ShowAllColor: data
        });
    });
});


router.get('/deleteColor/:id', function(req, res) {
    Colr.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllColor');
        } else {
            res.redirect('/ShowAllColor');
        }
    });
});

router.get('/edtsColor/:id', function(req, res) {
    console.log(req.params.id);
    Colr.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditColor', {
                EditColor: user
            });
        }
    });
});

/* UPDATE Brand */
router.post('/edtsColor/:id', function(req, res) {
    Colr.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllColor');
        }
    });
});

router.get('/Offer', function(req, res, next) {
    res.render('Offer');
});


router.post('/Offer', function(req, res, next) {

    const st = new Off({
        id: 0,
        Title: req.body.Title,
        Description: req.body.Description,
        Start_Date: req.body.Start_Date,
        End_Date: req.body.End_Date,


    });
    st.save().then(() => {
        console.log("insert success");
        res.redirect('/Offer');

    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllOffer', function(req, res, next) {
    var moment = require('moment');
    Off.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllOffer', {
            ShowAllOffer: data,
            moment: moment
        });
    });
});
router.get('/deleteOffer/:id', function(req, res) {
    Off.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllOffer');
        } else {
            res.redirect('/ShowAllOffer');
        }
    });
});
router.get('/edtsOffer/:id', function(req, res) {
    console.log(req.params.id);
    Off.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('EditOffer', {
                EditOffer: user
            });
        }
    });
});

/* UPDATE Brand */
router.post('/edtsOffer/:id', function(req, res) {
    Off.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllOffer');
        }
    });
});
router.get('/Product', function(req, res, next) {
    Cteg.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            Bnd.find(function(err, user) {
                if (err) {
                    console.log(err);
                } else {
                    Siz.find(function(err, anuser) {
                        if (err) {
                            console.log(err);
                        } else {
                            Colr.find(function(err, cole) {
                                if (err) {
                                    console.log(err);
                                } else {

                                    Off.find(function(err, ofe) {
                                        if (err) {
                                            console.log(err);
                                        } else {

                                            res.render('Product', {
                                                users: users,
                                                user: user,
                                                anuser: anuser,
                                                cole: cole,
                                                ofe: ofe
                                            });
                                            console.log(users);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

/**edit product */
var multer = require('multer');
var storage = multer.diskStorage({
    destination: './public/images/upload',
    filename: function(req, file, callback) {
        console.log("here");

        callback(null, Date.now() + file.originalname);
    }
})
var upload = multer({
    storage
})

router.post('/Product', upload.any(), function(req, res, next) {
    console.log('files', req.files[0].filename);
    const pro = new Prod({
        id: 0,
        Product_Name: req.body.Product_Name,
        Price: req.body.Price,
        Description: req.body.Description,
        QTY: req.body.QTY,
        Category_Name: req.body.Category_Name,
        Brand_Name: req.body.Brand_Name,
        Size: req.body.Size,
        Color_Name: req.body.Color_Name,
        Offer: req.body.Offer,
        Image: req.files[0].filename

    });
    pro.save().then(() => {
        console.log("insert success");
        res.redirect('/Product');


    }).catch(() => {
        console.log("error");
    });
});

router.get('/ShowAllProduct', function(req, res, next) {
    Prod.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllProduct', {
            ShowAllProduct: data
        });
    });
});

router.get('/deleteProduct/:id', function(req, res) {
    Prod.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('/ShowAllProduct');
        } else {
            res.redirect('/ShowAllProduct');
        }
    });
});

/**update product */
router.get('/edtsProduct/:id', function(req, res) {
    Prod.findById(req.params.id, function(err, use) {
        if (err) {
            console.log(err);
        } else {
            Cteg.find(function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    Bnd.find(function(err, user) {
                        if (err) {
                            console.log(err);
                        } else {
                            Siz.find(function(err, anuser) {
                                if (err) {
                                    console.log(err);
                                } else {

                                    Colr.find(function(err, cole) {
                                        if (err) {
                                            console.log(err);
                                        } else {

                                            Off.find(function(err, ofe) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    return res.render('EditProduct', {
                                                        EditProduct: use,
                                                        users: users,
                                                        user: user,
                                                        anuser: anuser,
                                                        cole: cole,
                                                        ofe: ofe
                                                    });
                                                    console.log(users);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });

                }
            });
        }
    });
});

router.post('/edtsProduct/:id', function(req, res) {
    console.log("-------------------", req.body);

    Prod.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllProduct');
        }
    });
});

/** purchase */
router.get('/Purchase', function(req, res, next) {
    Sup.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            Prod.find(function(err, arusers) {
                if (err) {
                    console.log(err);
                } else {
                    return res.render('Purchase', {
                        users: users,
                        arusers: arusers
                    });
                    console.log(users);
                }
            });
            // res.render('Supplier', { users: users });
            // console.log(users);
        }
    });

});

router.post('/Purchase', function(req, res, next) {

    const pro = new Pur({
        id: 0,
        Purchase_Date: req.body.Purchase_Date,
        Supplier_Name: req.body.Supplier_Name,
        Product_Name: req.body.Product_Name,
        QTY: req.body.QTY,
        Price: req.body.Price,
        CGST: req.body.CGST,
        SGST: req.body.SGST,
        Total: req.body.Total,


    });
    pro.save().then(() => {
        console.log("insert success");
        res.redirect('/Purchase');


    }).catch(() => {
        console.log("error");
    });
});


router.get('/ShowAllPurchase', function(req, res, next) {
    var moment = require('moment');
    Pur.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllPurchase', {
            ShowAllPurchase: data,
            moment: moment
        });
    });
});

router.get('/PurchaseReturn/:id', function(req, res) {
    console.log(req.params.id);
    Pur.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            Sup.find(function(err, users) {
                if (err) {
                    console.log(err);
                } else {

                    Prod.find(function(err, arusers) {
                        if (err) {
                            console.log(err);
                        } else {

                            console.log(user);

                            res.render('PurchaseReturn', {
                                PurchaseReturn: user,
                                users: users,
                                arusers: arusers,
                                success: req.query.success
                            });
                        }
                    });
                }
            });
        }

    });
});

/* UPDATE Brand */
router.post('/PurchaseReturn/:id', function(req, res) {
    Pur.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllPurchase');
        }
    });
});


// edit purchase*

router.get('/EditPurchase/:id', function(req, res) {
    console.log(req.params.id);
    Pur.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            Sup.find(function(err, users) {
                if (err) {
                    console.log(err);
                } else {

                    Prod.find(function(err, arusers) {
                        if (err) {
                            console.log(err);
                        } else {


                            console.log(user);

                            res.render('EditPurchase', {
                                EditPurchase: user,
                                users: users,
                                arusers: arusers
                            });
                        }
                    });
                }
            });
        }
    });
});

router.post('/EditPurchase/:id', function(req, res) {
    Pur.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllPurchase');
        }
    });
});

/** */
// router.post('/PurchaseReturn', function(req, res, next) {
//     console.log(req.body);

//     Pur.findById(req.params.id, function(err, user) {
//         if (err) {
//             console.log(err);
//         } else {

//             console.log(user);

//             res.render('PurchaseReturn', {
//                 PurchaseReturn: user
//             });
//         }
//     });

// });






router.post('/PurchaseReturn', function(req, res, next) {
    console.log(req.body);
    const pro = new PurReturn({
        id: 0,
        Product_Name: req.body.Product_Name,
        Return_QTY: req.body.Return_QTY,
        Stock: req.body.Stock,
        Return_Description: req.body.Return_Description
    });
    console.log(pro);
    pro.save().then(() => {
        console.log("insert success");
        res.redirect('/PurchaseReturn/' + req.body.purchase_id + "?success=true");


    }).catch(() => {
        console.log("error");
    });
});



router.get('/ShowAllPurchaseReturnDetails', function(req, res, next) {
    PurReturn.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllPurchaseReturnDetails', {
            ShowAllPurchaseReturnDetails: data
        });
    });
});



router.get('/PurchaseReturnReport', function(req, res, next) {
    var filename = "PurchaseReturn.csv";
    var dataArray;
    PurReturn.find().lean().exec({}, function(err, PurchaseReturn) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
        res.csv(PurchaseReturn, true);
    });
});


router.get('/ShowAllFeedback', function(req, res, next) {
    var moment = require('moment');
    Fed.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllFeedback', {
            ShowAllFeedback: data,
            moment: moment
        });
    });
});




router.get('/ShowAllContactUs', function(req, res, next) {
    Cont.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllContactUs', {
            ShowAllContactUs: data
        });
    });
});



router.get('/ShowAllNewsletterSubscription', function(req, res, next) {
    Nw.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllNewsletterSubscription', {
            ShowAllNewsletterSubscription: data
        });
    });
});





router.get('/ShowAllSalesOrder', function(req, res, next) {
    Sals.find({}, function(err, data) {
        console.log(data);
        res.render('ShowAllSalesOrder', {
            ShowAllSalesOrder: data
        });
    });
});






// router.get('/ShowAllAddToCart', function(req, res, next) {
//     AddTo.find({}, function(err, data) {
//         console.log(data);
//         res.render('ShowAllAddToCart', {
//             ShowAllAddToCart: data
//         });
//     });
// });

router.get('/ShowAllAddToCart', function(req, res, next) {
    AddTo.find({}).populate('user_id').exec(function(err, data) {
        console.log("-------------------------", data);
        res.render('ShowAllAddToCart', {
            ShowAllAddToCart: data
        });
    });
});






// router.get('/ShowAllCustomeOrder', function(req, res, next) {
//     Custom.find({}, function(err, data) {
//         console.log(data);
//         res.render('ShowAllCustomeOrder', {
//             ShowAllCustomeOrder: data
//         });
//     });
// });




router.get('/ShowAllCustomeOrder', function(req, res, next) {
    Custom.find({}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            Tler.find(function(err, type) {
                if (err) {
                    console.log(err);
                } else {



                    res.render('ShowAllCustomeOrder', {
                        ShowAllCustomeOrder: data,
                        type: type

                    });
                    console.log(data);
                }

            });
        }
    });
});


// router.get('/edtPan/:id', function(req, res) {
//     console.log(req.params.id);
//     Custom.findById(req.params.id, function(err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(user);

//             res.render('ShowAllCustomeOrder', {
//                 ShowAllCustomeOrder: user
//             });
//         }
//     });
// });

/* UPDATE city */
router.get('/edtPan/:id', function(req, res) {
    Custom.findByIdAndUpdate(req.params.id, {
        status: "Approved"
    }, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllCustomeOrder');
        }
    });
});


router.get('/edtPanSal/:id', function(req, res) {
    Sals.findByIdAndUpdate(req.params.id, {
        status: "Approved"
    }, function(err) {
        if (err) {

            res.redirect('edits/' + req.params.id);
        } else {

            res.redirect('/ShowAllSalesOrder');
        }
    });
});





module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
}));

module.exports = router