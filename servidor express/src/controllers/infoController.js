module.exports =  {
    contact: (req,res)=>{
        res.render('info/contact',{
            position:""
        })
    },
    help: (req,res)=>{
        res.render('info/help',{
            position:""
        })
    },
    we: (req,res)=>{
        res.render('info/we',{
            position:"position:relative"
        })
    }
}