import { ObjectId } from "mongodb";
import Tag from "./tag";
export default class Event {
    constructor(public id: ObjectId, public date: string, public name: string, public description: string, public tags: Tag[], public location: string) { }
}