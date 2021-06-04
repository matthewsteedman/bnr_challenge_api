const { response } = require("express");
const express = require("express");
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('dd4c8ce956fb4fa98ada252f4e25153d');

router.post("/", async(req,res) => {
    try {
       await newsapi.v2.everything({
            q: req.body.title,
            from: new Date().getDate() - 5,
            to: new Date().getDate(),
            language: 'en',
            sortBy: 'relevancy',
            page: 1
          }).then(response => {
            res.send(response)
            /*
              {
                status: "ok",
                articles: [...]
              }
            */
          });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})

module.exports = router;