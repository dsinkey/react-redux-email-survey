const keys = require('../config/keys');
console.log(keys.stripeSecretKey);
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Email Survey Credits',
            source: req.body.id, // obtained with Stripe.js
        });

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};
