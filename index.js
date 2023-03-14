require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3000;
<<<<<<< HEAD
app.listen(port, () => console.log(`App is listening on http://localhost:${port}`))
=======
app.listen(port, () => console.log(`App is listening on http://localhost:${port}`))
>>>>>>> 32a62bd6a0b36249d436af2af1817e34ffb90933
