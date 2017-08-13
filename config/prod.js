// prod.js - the production keys
// dev.js - don't commit this
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URL,
    cookieKey: process.env.COOKIE_KEY
};
