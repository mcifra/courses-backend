import * as Classes from "../../../constants/classes";
import { Triple, Node, Text, Data } from "virtuoso-sparql-client";
import Session from "./Session";
import * as Constants from "../../../constants";
import * as Predicates from "../../../constants/predicates";

export default class Lecture extends Session {
    constructor(id) {
        super(id);
        this.uriPrefix = Constants.lectureURI;
        this.subject = new Node(this.uriPrefix + this.id);
        this.type = Classes.Lecture;
        this.subclassOf = Classes.Session;
        this.uriPrefix = Constants.lectureURI;
    }

    _fill(data) {
        super._fill(data);
    }
}
