const express = require('express');

app = express();

PORT = process.env.PORT || 3001;

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
// app.use(routes);

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));