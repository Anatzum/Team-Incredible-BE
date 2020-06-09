const user=require('../controllers/user_controller')
const exp=require('express')
const appRoute=exp.Router()

appRoute.post('/api/v1/login/', user.login);
//register new user route
appRoute.post('/api/v1/register/', user.create);

module.exports=appRoute;