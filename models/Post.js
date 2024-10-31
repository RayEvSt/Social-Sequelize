const { db, Model, DataTypes } = require("../db/connection.js");

class Post extends Model {};

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
}, {
    sequelize: db,
    modelName: "Post"
})


module.exports = Post;