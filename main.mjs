import express from 'express';
import ejs from 'ejs';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = 3000 || process.env.PORT;
const app = express();

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




app.get('style.css', (req, res) => {
    res.sendFile('/views/css/style.css');
    }
);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

