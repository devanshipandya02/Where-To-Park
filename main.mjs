import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import {fileURLToPath} from 'url';
const Insta = require('instamojo-nodejs')
const bodyParser = require('body-parser')

const API_KEY = "test_2e409090ac66fabb5ca1cd05bf0"
const AUTH_KEY = "test_5a8698ef8c344ca26255b9631ec"

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

// app.post('/pay',(req,res) => {
//     var name = req.body.name
//     var email = req.body.email
//     var amount = req.body.amount
    
//     var data = new Insta.PaymentData();

//     const REDIRECT_URL = "http://localhost:3000/success";

//     data.setRedirectUrl(REDIRECT_URL);
//     data.send_email = "True";
//     data.purpose="Test";
//     data.amount = amount;
//     data.name = name;
//     data.email = email;


//     Insta.createPayment(data, function(error,response) {
//         if(error) {
//         } else {
            
//             console.log(response)
//             res.send("Please check your email to make payment")
            
//         }
//     });

// });

app.get('/success',(req,res) => {

    let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let random = Math.floor(Math.random() * 100) + 1; 


    let success = "Your parking slot is " + alphabets[Math.floor(Math.random() * alphabets.length)] +"-" + random
    res.send(success)
    
})

app.get('style.css', (req, res) => {
    res.sendFile('/views/css/style.css');
    }
);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

