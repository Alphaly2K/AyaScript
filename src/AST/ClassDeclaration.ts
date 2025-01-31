import {ClassBody} from "./ClassBody";

export interface ClassDeclaration{
    type: "ClassDeclaration";
    name: string;
    parent?: string;
    implement?: string[];
    body:ClassBody;
}