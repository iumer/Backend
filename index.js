const express = require("express");
const mongoose = require("mongoose");

const app = express();




 mongoose.connect("mongodb://localhost/Project", {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true  })
 .then(() => console.log("connected to the database."))
 .catch(err => console.log(`Error:   ${err}`));


require("./startup/routers")(app);
// require("./startup/prod")(app);
// require("./startup/config")(app);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}.`));



module.exports.port = port;




