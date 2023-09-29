//Require express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//express.static to service the dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Click here to access the server: http://localhost:${PORT}`);
});