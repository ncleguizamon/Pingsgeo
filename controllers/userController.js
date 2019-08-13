const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);

exports.findOrCreateUser = token => {
    // verify auth token
    // check if the user exists 
    // if user exists , return them; otherwise , create new user in db 

}

const verifyAuthToken = async token => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.OAUTH_CLIENT_ID
        });

        return ticket.getPayload();
    } catch (err) {
        console.error("Error verifing auth token", err);
    }
}