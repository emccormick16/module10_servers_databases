const {
    Bookmark, Category
} = require('./server.js')

const express = require("express")
const app = express()

app.get("./server.js", async (re, res, next) => {
    const bookmarks = await Bookmark.findAll{
        include: [
            name,
            
        ]
    }
})