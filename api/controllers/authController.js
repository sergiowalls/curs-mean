const bcrypt = require("bcrypt-nodejs"),
    jwt = require("jsonwebtoken");

const dbcontext = require("../database/dbcontext"),
    httpResponse = require("../httpResponse");

const USER_DB_MODEL = "user";

let _generateToken = username => {
    return jwt.sign(
        {username},
        process.env.SERVER_PRIVATE_KEY,
        {expiresIn: "7 days"}
    )
};

class AuthController {

    async login(req, res) {
        let {username, password} = req.body;
        try {
            let users = await dbcontext.find(USER_DB_MODEL, {username});
            if (users.length && bcrypt.compareSync(password, users[0].password)) {
                let token = _generateToken(users[0].username);
                res.cookie("api-token", token);
                httpResponse.ok(res, {token: token});
            }
            else httpResponse.unauthorized(res)
        } catch (e) {
            httpResponse.internalError(res, e);
        }
    }

    async authenticate(req, res, next) {
        let token = req.cookies['api-token'] || req.headers['api-token'];
        if (token) {
            try {
                let decoded = await jwt.verify(token, process.env.SERVER_PRIVATE_KEY);
                let users = await dbcontext.find(USER_DB_MODEL, {username: decoded.username});
                if (users.length) {
                    req.loggedUser = users[0];
                    next();
                }
                else httpResponse.unauthorized(res);
            } catch (e) {
                console.log(e);
                httpResponse.unauthorized(res, e);
            }
        }
        else httpResponse.unauthorized(res);
    }
}

module.exports = new AuthController();