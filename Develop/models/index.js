// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.BelongsTo(Catagory, {
  foreignKey: 'category_id',
});

// Categories have many Products
Catagory.hasMany(Products, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag)
Products.BelongsToMany(Tags, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tags.BelongsToMany(Products, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
