import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	},
});
app.use(cors());
app.use(express.json());
const port = 3000;
mongoose
	.connect(process.env.MONGO_DB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

const answerSchema = new Schema(
	{
		id: Schema.ObjectId,
		author: String,
		date: String,
		awnser: String,
	},
	{ _id: false }
);

const threadSchema = new Schema({
	title: String,
	description: String,
	author: String,
	date: String,
	awnsers: [answerSchema],
});

const Thread = mongoose.model("Thread", threadSchema);

app.get("/api/threads/:id", async (req, res) => {
	try {
		const threadById = await Thread.findById(req.params.id).exec();
		res.status(200).json(threadById);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

app.get("/api/threads", async (req, res) => {
	try {
		const allThreads = await Thread.find({});
		res.status(200).json(allThreads);
	} catch (err) {
		res.status(500).json(err);
	}
});

app.post("/api/threads", async (req, res) => {
	const thread = {
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
		date: new Date().toLocaleString(),
		awnsers: [],
	};

	try {
		const newThread = await Thread.create(thread);
		io.emit("changesInThreads");
		res.status(201).json(newThread);
	} catch (err) {
		return res.status(500).json(err);
	}
});

app.delete("/api/threads/:threadId", async (req, res) => {
	try {
		await Thread.findByIdAndDelete(req.params.threadId);
		io.emit("changesInThreads");
		res.sendStatus(200);
	} catch (err) {
		return res.status(500).json(err);
	}
});

app.post("/api/threads/:threadId/awnsers", async (req, res) => {
	const newawnser = {
		id: new mongoose.Types.ObjectId(),
		author: req.body.author,
		date: new Date().toLocaleString(),
		awnser: req.body.awnser,
	};
	try {
		const filter = { _id: req.params.threadId };
		const update = { $push: { awnsers: newawnser } };
		const updateThread = await Thread.findOneAndUpdate(filter, update, {
			new: true,
		});
		io.emit("changesInAwnsers")
		res.status(200).json(updateThread);
	} catch (err) {
		return res.status(500).json(err);
	}
});

app.delete("/api/threads/:threadId/awnsers/:awnserId", async (req, res) => {
	try {
		const threadId = req.params.threadId;
		const awnserId = req.params.awnserId;

		console.log(threadId, awnserId);

		const threadToUpdate = await Thread.findById(req.params.threadId);
		if (!threadToUpdate) {
			return res.status(404).json({ message: "Thread not found" });
		}

		console.log(threadToUpdate);

		const awnserindex = threadToUpdate.awnsers.findIndex(
			(awnser) => awnser.id == awnserId
		);
		console.log(awnserindex);
		if (awnserindex == -1) {
			return res.status(404).json({ message: "Awnser not found" });
		}

		threadToUpdate.awnsers.splice(awnserindex, 1);
		threadToUpdate.save();

		io.emit("changesInAwnsers")
		res.sendStatus(200);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}

});

io.on("connection", (socket) => {
	console.log("a user connected");
})

server.listen(port, () => {
	console.log(`listening on port ${port}`);
});
