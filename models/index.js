const { db, Model, DataTypes } = require("../db/connection.js");

const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

//defining one to one relationship where a user has a profile
User.hasOne(Profile);
Profile.belongsTo(User);

//defining a one to many relationship where a user can have many posts
User.hasMany(Post);
Post.belongsTo(User);

//defining a one to many relationship where one post can have many comments
Post.hasMany(Comment);
Comment.belongsTo(Post);

//defining a many to many relationship where users can have multiple likes and vice versa
User.belongsToMany(Like, {through: "userLike"})
Like.belongsToMany(User, {through: "userLike"})










module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}