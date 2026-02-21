import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle{

    constructor(model , width , height){
        super(model , width , height)

    }
    display(){
        return `Car class is displayed`;
        
    }
}
