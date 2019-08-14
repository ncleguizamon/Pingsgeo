const { AuthenticationError } = require('apollo-server');

const user = {
    _id: "1",
    name: "Reed",
    email: "ar@gmail.com",
    picture: "saf"
}

const authenticated = next => (root, args, ctx, info) => {
    if (!ctx.currentUser) {
        throw new AuthenticationError('You must be logge in ');
    }
    return next(root, args, ctx, info);
}

module.exports = {
    Query: {
        me: authenticated((root, args, ctx) => ctx.currentUser)
    }
}