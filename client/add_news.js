const client = require("./client")

client.addNews({title: "mariumNews", body:"marium content", postImage: "mariumImage"},
 (error, news) => {
   if(error) throw error
   console.log(news)
 })