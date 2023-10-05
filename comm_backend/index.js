import express from 'express';
import mongoose, { Schema } from 'mongoose';
const app = express();
app.use(express.json());
const port = 3000;
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const threadSchema = new Schema({
    'title': String,
    'description': String,
    'author': String,
    'date': String,
    'awnsers': Array
})

const Thread = mongoose.model('Thread', threadSchema)

app.get('/api/threads/:id', async (req, res) => {
    try {
        const threadById = await Thread.findById(req.params.id).exec();
        res.status(200).json(threadById);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }


})

app.get('/api/threads', async (req, res) => {
    try {
        const allThreads = await Thread.find({})
        res.status(200).json(allThreads);
    } catch (err) {
        res.status(500).json(err)
    }

})

app.post('/api/threads', async (req, res) => {
    const thread = {
        'title': req.body.title,
        'description': req.body.description,
        'author': req.body.author,
        'date': req.body.date,
        'awnsers': []
    }

    try {
        const newThread = await Thread.create(thread);
        res.status(201).json(newThread);
    } catch (err) {
        return res.status(500).json(err);
    }

})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})