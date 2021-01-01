const express = require("express");
const db = require('../db')

app.post("/books", (req, res){
    const { title, author, pages, publisher, published_at } = req.body
    const query = `insert into books (title , author, pages, publisher, published_at) values('?','?','?','?')`;
    const data = [title, author, pages, publisher, published_at];
    db.query(query, data, (result, err) => {
        if (err) { throw err }
    })

})