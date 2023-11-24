import * as express from "express";
import db from "../db/service.js";

const indexRouter = express.Router();

indexRouter.get('/', async (req: express.Request, res: express.Response) => {
    let collection = await db.collection("Events");

    let result = await collection.find({})
        .limit(50)
        .toArray();

    res.send(result).status(200);
});

export default indexRouter;