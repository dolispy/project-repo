const mongoose = require('mongoose');
const username = encodeURIComponent("benafunsho");
const password = encodeURIComponent ("Dolispy14.");
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

