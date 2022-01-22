'use strict';

const Post = (sequelize, DataTypes) => sequelize.define('Post', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;


