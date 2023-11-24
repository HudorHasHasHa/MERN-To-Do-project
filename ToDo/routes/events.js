import express from "express";
import db from "../db/service.js";
import { ObjectId } from "mongodb";
const eventRouter = express.Router();
eventRouter.get('/', async (req, res) => {
    let collection = await db.collection("Events");
    const eventId = req.query.eventId;
    let result = (await collection.aggregate([
        {
            $match: {
                _id: new ObjectId(eventId)
            }
        },
        {
            $lookup: {
                from: "Tags",
                localField: "tags",
                foreignField: "_id",
                as: "tags"
            }
        }
    ])
        .limit(50)
        .toArray());
    res.send(result).status(200);
});
eventRouter.get('/', async (req, res) => {
    let collection = await db.collection("Events");
    let result = (await collection.aggregate([
        {
            $lookup: {
                from: "Tags",
                localField: "tags",
                foreignField: "_id",
                as: "tags"
            }
        }
    ])
        .limit(50)
        .toArray());
    res.send(result).status(200);
});
export default eventRouter;
//# sourceMappingURL=events.js.map