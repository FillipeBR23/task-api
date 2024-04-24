const jwt = require('jsonwebtoken');

const secret = "feira"

function createToken(obj) {
   return jwt.sign(obj,secret, {algorithm:"HS256"})
}

function validToken(token) {
   return jwt.verify(token,secret)

}

module.exports = {createToken, validToken}