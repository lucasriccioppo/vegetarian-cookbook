const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// const generateToken = (data) => return 

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    encryptPassword,
    verifyPassword
}