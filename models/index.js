'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
const PostSchema = require('./post.schema.js');

//typically connection string: postgresql://localhost:5432/db-name
let db = new Sequelize(POSTGRES_URI);

const PostModel = PostSchema(db, DataTypes);

module.exports = {
  db,
  PostModel,
};
