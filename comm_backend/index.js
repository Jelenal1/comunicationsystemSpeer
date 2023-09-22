import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;


const TESTDATA = [
    {
        'id': 1,
        'title': 'Wierd thread',
        'description': 'This is a wierd thread',
        'author': 'Lolo',
        'date': '12.09.2022',
        'awnsers': []
    }
]

app.get('/threads/:id', (req, res) => {
    const threadId = req.params.id;
    const threadById = TESTDATA.find(thread => thread.id === parseInt(threadId));
    res.status(200).json(threadById);
})

app.get('/threads', (req, res) => {
    res.status(200).json(TESTDATA);
})

app.post('/threads', (req, res) => {
    const thread = {
        'title': req.body.title,
        'description': req.body.description,
        'author': req.body.author,
        'date': req.body.date,
        'awnsers': []
    }

    TESTDATA.push(thread)
    res.status(200).json(thread);

})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})