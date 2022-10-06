module.exports = (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(401).send("Not authorized");
    }

    if(auth.length < 4) {
        return res.status(400).json({
            message: "Token need at least 4 numbers."
        });
    }

    next();
};