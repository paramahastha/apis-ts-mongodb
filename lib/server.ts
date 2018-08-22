import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://mongo:27017");
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})