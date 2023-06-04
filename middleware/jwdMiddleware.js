const jwt = require('jsonwebtoken');

const secreteKey = "sheraz";

const jwtAuthorization = {
    sign(payload){
        const token = jwt.sign(payload, secreteKey);
        return token;
    },

    verifyToken(req, res, next){
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({message: 'No token provided'});
        }

        try {
            const decoded = jwt.verify(token, secreteKey);
            console.log(decoded);
            req.userId = decoded.userId;
            next();
        }catch(error){
            return res.status(401).json({message: 'Invalid token'});
        }
    }
}

module.exports = jwtAuthorization;