import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import {fileURLToPath} from 'url';
const bodyParser = require('body-parser')

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



app.get('/success',(req,res) => {

    let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let random = Math.floor(Math.random() * 100) + 1; 
    alphabets = alphabets[Math.floor(Math.random() * alphabets.length)];



    let success =  `<html>
    <head>
        <title>Payment Success</title>
        <style> 
            body {
                background: url('https://img.freepik.com/free-vector/underground-car-parking-garage-with-vacant-places_107791-1635.jpg') no-repeat center center;
                background-size: cover;
                font-family: 'Roboto', sans-serif;
            }
            .container {
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .success {
                width: 400px;
                height: 400px;
                background-color: #ffffffb5;
                backdrop-filter: blur(1px)
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                padding: 20px;
                text-align: center;
            }
            .success h1 {
                font-size: 2.5rem;
                color: #691298;
            }
            .success p {
                font-size: 1.2rem;
                color: #333;
            }
            .success a {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #691298;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: 0.3s;
            }
            .success a:hover {
                background-color: #43a047;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <div class="success">
                    <h1>Payment Success</h1>
                    <p>Thank you for your payment</p>
                    <p>Parking ID: ${alphabets}${random}</p>
                    <a href="/">Go Back</a>
                    </div>
                    </div>
                    </body>
                    </html>
                    `

    res.send(success)
    
})

app.get('style.css', (req, res) => {
    res.sendFile('/views/css/style.css');
    }
);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});