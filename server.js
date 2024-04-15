const express = require('express');
const hbs = require('express-handlebars').create();

const PORT = process.argv[2] | 3000
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

fetch('https://api.wazirx.com/api/v2/tickers')
.then((response) => {
    const data = response.data;
})
.catch((err) => {
    console.error(err);
})

//sample object
let data = {
    foo: "bar",
    lorem: ['ipsum', 'set']
}

//app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index', data)
})

app.use(express.static('static'))

app.get('/api', async (req, res) => {
    let resp = await fetch('https://api.wazirx.com/api/v2/tickers')
    let data = await resp.json()
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`server started on port https://localhost:${PORT} ...`);

})