
const {User} = require('../model')
const response = require('../utils/response')

exports.create = async(req, res) =>{
    console.log(User)
    let createUser = await User.create({
        username:'test1',
        password:'test',
      });
    console.log(createUser)
    console.log('create')
    return response.success(res,{data:createUser})
}