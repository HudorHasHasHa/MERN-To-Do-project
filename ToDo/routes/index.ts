import * as express from "express";
import db from "../db/service.js";
import Event from "../models/event.js";

const indexRouter = express.Router();

indexRouter.get('/', async (req: express.Request, res: express.Response) => {
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
        .toArray()) as unknown as Event[];

    res.send(result).status(200);
});

export default indexRouter;