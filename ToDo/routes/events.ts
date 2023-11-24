import express from "express";
import db from "../db/service.js";

const eventRouter = express.Router();

eventRouter.get('/', async (req: express.Request, res: express.Response) => {
    let collection = await db.collection("events");

    let result = await collection.find({})
        .limit(50)
        .toArray();

    res.send(result).status(200);
});

export default eventRouter;