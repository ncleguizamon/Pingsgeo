const user = {
    _id: "1",
    name: "Reed",
    email: "ar@gmail.com",
    picture: "saf"
}

module.exports = {
    Query: {
        me: () => user
    }
}