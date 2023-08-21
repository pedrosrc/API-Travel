const app = require('./app');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3333;

app.use(cors({
    origin: "*"
}));
app.listen(PORT, ()=> 
    console.log('Server Runing...')
);