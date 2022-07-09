


const getLoginForm = (req,res)=>{
    return res.render('login/layout')
}

const login = (req,res)=>{}

const getSignupForm =(req,res)=>{
    return res.render('signup/layout')
}

const signup=(req,res)=>{

}

module.exports = {login,getLoginForm,getSignupForm,signup}