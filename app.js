const express = require("express")
const app = express();

const PORT = 9000;

const userRoute = require('./routes/User');
const CommentsRoute = require('./routes/Comments');

app.use("/user",userRoute);
app.use("/comments",CommentsRoute);

app.listen(PORT,()=>{
console.log("Server is Running");
});
