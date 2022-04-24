const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // This method next() is important when we use the middleware
    next();
};


module.exports = {logger};