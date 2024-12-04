const jwt = require('jsonwebtoken');
const Medcien = require('../Models/Medcien');

const verifyToken = async (req, res, next) => {
    const token = req.cookies.auth_token;
    if (!token) {
        return res.redirect('/auth');  
      }

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.admin = await Medcien.findById(decoded.id);
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
                return res.redirect('/auth');  

    }
};

module.exports = verifyToken;
