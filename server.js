const Sequelize = require("sequelize");

const DB_URL = process.env.DB_URL || "postgres://localhost:5432/bookmarker";
const db = new Sequelize(DB_URL);

const Bookmark = db.define("Bookmarks", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
  },
});

const Category = db.define("Categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Bookmark.hasMany(Category);
Category.belongsTo(Bookmark);

module.exports = {
  db,
  Bookmark,
  Category,
};
