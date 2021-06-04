const { response } = require("express");
const express = require("express");
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('dd4c8ce956fb4fa98ada252f4e25153d');

router.get("/", async(req,res) => {
    try {
        
       await newsapi.v2.everything({
            sources: 'bbc-news,the-verge',
            domains: 'bbc.co.uk, techcrunch.com',
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