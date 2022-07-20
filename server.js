const express = require('express');
const sequelize = require('./config/connection')

app = express();

PORT = process.env.PORT || 3001;

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('sequelize listening to port'))
});