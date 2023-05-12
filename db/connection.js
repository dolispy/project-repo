const mongoose = require('mongoose');
const username = encodeURIComponent(process.env.USERNAMES);
const password = encodeURIComponent(process.env.PASSWORD);
const connectString = `mongodb+srv://${username}:${password}@movieapp.p816fm9.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Successful');
}).catch((e)=> {
    console.log(e);
    console.log('Connection Failed');
} )

