import { Vehicle } from "./vehicle.js";

export class Bicycle extends Vehicle{

    constructor(model , width , height){
        super(model , width , height)

    }
    display(){
        return `Bicycle class is displayed`;
        
    }
}