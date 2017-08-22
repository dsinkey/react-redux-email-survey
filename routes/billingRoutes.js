const keys = require = '../config/keys';
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);

module.exports = app => {
    app.post('/api/stripe', (req, res) => {

        stripe.charges.create(
            {
                amount: 5,
                currency: 'usd',
                source: 'tok_mastercard', // obtained with Stripe.js
                description: 'Charge for addison.moore@example.com',
            },
            function(err, charge) {
                // asynchronously called
            },
        );
    });
};
