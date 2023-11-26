//import JSON-SERVER library in index.js

const jsonServer = require('json-server')

//create server using JSON-SERVER library

const BuyAndSell = jsonServer.create()

//create path to db.json file

const roter = jsonServer.router('db.json')

//middleware to convert js to json

const middleware = jsonServer.defaults()

//connect//use middleware and router in server
BuyAndSell.use(middleware)
BuyAndSell.use(roter)


//setup port for the server 3000 in frontend


const port = 9000 || process.env.PORT

BuyAndSell.listen(port,()=>{
    console.log(`mediaplayer is started at ${port} and ready fetch request`);
})


