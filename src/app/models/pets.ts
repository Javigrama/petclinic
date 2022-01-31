import { Owner } from "./owner";
import { Pettype } from "./pettype";
import { Visit } from "./visit";


export interface Pets {

    id : number;
    name: string;
    birth_date: Date;
    type: Pettype;
    owner: Owner;
    visits: Visit[];


}
