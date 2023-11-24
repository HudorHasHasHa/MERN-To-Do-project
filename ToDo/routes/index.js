import * as express from "express";
import db from "../db/service.js";
const indexRouter = express.Router();
indexRouter.get('/', async (req, res) => {
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
export default indexRouter;
//# sourceMappingURL=index.js.map