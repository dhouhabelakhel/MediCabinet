

const logoutMiddelware = async (req, res, next) => {
    const token = req.cookies.auth_token;
    if (token) {
        return res.redirect('/dashboard');  
      }

    try {
      
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
                return res.redirect('/auth');  

    }
};

module.exports = logoutMiddelware;
