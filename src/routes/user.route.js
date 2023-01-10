const route = require ('express').Router()
const userController = require ('../controllers/user.controller')

route.get('/teste',userController.soma)

module.exports= route;