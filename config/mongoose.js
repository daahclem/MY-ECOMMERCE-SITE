const  mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "ADD YOUR MONGO DB URI HERE AND PASSWORD"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});
