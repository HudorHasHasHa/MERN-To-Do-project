import { ObjectId } from "mongodb";

export default class Tag {
    constructor(public id: ObjectId, public colour: string, public name: string) { }
}