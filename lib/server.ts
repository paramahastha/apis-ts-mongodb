import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://mongo:27017");
mongoose.Promise = global.Promise;
//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})