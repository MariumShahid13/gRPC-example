const client = require("./client")

client.deleteNews({id: "1"}, (error, result) => {
    if(error) throw error
    console.log(result)
})