const { db, Bookmark, Category } = require("./server.js");

const seedDb = async () => {
  await db.sync({ force: true, logging: false });

  const search = await Category.create({
    name: "search",
  });
  const code = await Category.create({
    name: "code",
  });
  const jobs = await Category.create({
    name: "jobs",
  });
  const google = await Bookmark.create({
    name: "Google",
    url: "https://www.google.com/",
    categoryId: search.id,
  });
  const stackOverflow = await Bookmark.create({
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    categoryId: code.id,
  });
  const bing = await Bookmark.create({
    name: "Bing",
    url: "https://www.bing.com/",
    categoryId: search.id,
  });
  const linkedIn = await Bookmark.create({
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    categoryId: jobs.id,
  });
  const indeed = await Bookmark.create({
    name: "Indeed",
    url: "https://www.indeed.com/",
    categoryId: jobs.id,
  });
  const mdn = await Bookmark.create({
    name: "MDN",
    url: "https://developer.mozilla.org/en-US/",
    categoryId: code.id,
  });
};

seedDb();
