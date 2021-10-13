let db = require('../database/models')
module.exports = {
    contact: (req, res) => {
        res.render('info/contact', {
            position: "",
            session: req.session
        })
    },
    sendContact: (req, res) => {
        let { msg,
            issue,
            name,
            lastName,
            dni,
            email,
            phone,
            location,
            address,
            city,
            cuit,
            businessName,
            socialAddress } = req.body

        db.Message.create({
            msg,
            issue,
            name,
            lastName,
            dni,
            email,
            phone,
            cv:req.file?req.file.filename:null,
            location,
            address,
            city,
            cuit,
            businessName,
            socialAddress
        })
        .then(()=>{
            res.redirect('/info/contact')
        })
        .then(err=>console.log(err))
    },
    help: (req, res) => {
        res.render('info/help', {
            position: "",
            session: req.session
        })
    },
    we: (req, res) => {
        res.render('info/we', {
            position: "position:relative",
            session: req.session
        })
    }
}