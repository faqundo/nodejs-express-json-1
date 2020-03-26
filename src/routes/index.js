const {Router} = require("express");
const router = Router();
let fs = require("fs");

const books = [];

router.get("/", (req,res)=>{
    res.render("index.ejs",{
        books,
    });
    
});

router.get("/new-entry",(req,res)=>{
    res.render("new-entry.ejs")
});

router.post("/new-entry", (req,res)=> {
    const {title, author, image, description} = req.body;
    if(!title || !author || !image || !description){
        res.status(400).send("Entries incomplet");
    }
    let newBook = {
        title,
        author,
        image,
        description
    };
    
    books.push(newBook);

    const json_books = JSON.stringify(books);
    fs.writeFileSync("src/books.json", json_books,"UTF-8");

    res.send("recived");
});


module.exports = router;