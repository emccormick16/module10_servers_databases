const { Bookmark, Category } = require("./server.js");

const express = require("express");
const app = express();

app.get("/", async (req, res, next) => {
  res.redirect("/bookmark");
});

app.get("/bookmark", async (req, res, next) => {
  const bookmarks = await Bookmark.findAll({
    include: [Category],
  });
  res.send(`
  <body>
      ${bookmarks
        .map(
          (bookmark) => `
    <div>
      <h2><a href="${bookmark.url}">${bookmark.name}</a> - <a href="/categories/${bookmark.category.name}">${bookmark.category.name}</a></h2>
    </div>
`
        )
        .join("")}
  </body>
`);
});

app.get("/categories/:id", async (req, res, next) => {
  const bookmarks = await Bookmark.findAll({
    include: [Category],
  });
  let id = req.params.id;
  res.send(`
    <body>
    <h1>${id}</h1>
    ${bookmarks
      .filter((bookmark) => bookmark.category.name === id)
      .map(
        (bookmark) => `
  <div>
    <h2>${bookmark.name}</h2>
  </div>
`
      )
      .join("")}
      <h3><a href="/bookmark">Back</a></h3>
</body>`);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Connected to: ${PORT}`);
});
