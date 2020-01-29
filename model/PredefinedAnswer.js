import * as Classes from "../constants/classes";
import { Node, Text, Data } from "virtuoso-sparql-client";
import Thing from "./Thing";
import * as Constants from "../constants";
import * as Predicates from "../constants/predicates";

export default class PredefinedAnswer extends Thing {
    constructor(uri) {
        super(uri);
        this.type = Classes.PredefinedAnswer;
        this.subclassOf = Classes.Thing;
        this.uriPrefix = Constants.predefinedAnswerURI;
    }

    set text(value) {
        this._setProperty(Predicates.text, new Text(value));
    }

    set position(value) {
        this._setProperty(Predicates.position, new Data(value, "xsd:integer"));
    }

    set correct(value) {
        this._setProperty(Predicates.correct, new Data(value, "xsd:boolean"));
    }

    _fill(data) {
        this._setNewProperty(Predicates.text, new Text(data.text));
        this._setNewProperty(Predicates.position, new Data(data.position, "xsd:integer"));
        this._setNewProperty(Predicates.correct, new Data(data.correct, "xsd:boolean"));
        super._fill(data);
    }
}