const mongoose = require("mongoose")



// Connect to mongodb 

const URI = process.env.MONGO_URL

 mongoose.connect(`${URI}`, {
    
}, (err: any) => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})
 
