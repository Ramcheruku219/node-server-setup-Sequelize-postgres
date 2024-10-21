const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { sequelize } = require('./models');


const cors = require('cors');
app.use(express.json());

app.use(cors);


app.use(bodyParser.json()); // For parsing application/json
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!'});
}); 

app.listen(5000,async () => {
  
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    console.log('Server listening on port 5000');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});



















