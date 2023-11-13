import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
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
        'date': (new Date()).toLocaleString(),
        'awnsers': []
    }

    try {
        const newThread = await Thread.create(thread);
        res.status(201).json(newThread);
    } catch (err) {
        return res.status(500).json(err);
    }

})
app.put('/api/threads/:id', async (req, res) => {
    const newawnser = {
        'id': Date.now().toString(),
        'author': req.body.author,
        'date': (new Date()).toLocaleString(),
        'awnser': req.body.awnser
    }
    try {
        const filter = { _id: req.params.id };
        const update = { $push: { awnsers: newawnser } };
        const updatedThread = await Thread.findOneAndUpdate(filter, update, { new: true });
        res.status(200).json(updatedThread);
    } catch (err) {
        return res.status(500).json(err);
    }

})

app.delete('/api/threads/:threadId/answers/:answerId', async (req, res) => {
    try {
        const threadId = req.params.threadId;
        const answerId = req.params.answerId;

        const filter = { _id: threadId };
        const update = { $pull: { answers: { id: answerId } } };
        const updatedThread = await Thread.findOneAndUpdate(filter, update, { new: true });

        if (!updatedThread) {
            return res.status(404).json({ message: 'Thread not found' });
        }

        res.status(200).json(updatedThread);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})