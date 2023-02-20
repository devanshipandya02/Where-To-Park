import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import {fileURLToPath} from 'url';
const bodyParser = require('body-parser')

Insta.setKeys(API_KEY,AUTH_KEY)

Insta.isSandboxMode(true);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = 3000 || process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Where To Park?' });
    }
);

app.get('/area', (req, res) => {

    res.render('area', { title: 'Where To Park?' });
    }
);

app.get('/payment', (req, res) => {
    res.render('payment');
})



app.get('/success',(req,res) => {

    let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let random = Math.floor(Math.random() * 100) + 1; 


    let success = "Your parking slot is " + alphabets[Math.floor(Math.random() * alphabets.length)] +"-" + random;
    res.send(success)
    
})

app.get('style.css', (req, res) => {
    res.sendFile('/views/css/style.css');
    }
);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});