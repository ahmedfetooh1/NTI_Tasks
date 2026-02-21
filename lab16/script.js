import {Vehicle} from './vehicle.js'
import {Car} from './car.js'
import {Bicycle} from './bicycle.js'

// 1------------------------------------------------
const std = {
    name: '',
    phone: '',
    age: 10 ,
}



let handler = {
    set:function(target , key ,newValue){
        if (key == 'name'){
            if (newValue.length < 10 ){
                target[key] = newValue
            }
        }

        else if (key == 'phone'){
            if (newValue.length == 13 && newValue[0] == '+' && newValue[1] == '2' && newValue[2] == '0'){
                target[key] = newValue
            }
            
        }

        else if (key == 'age'){
            if (newValue > 18 && newValue < 50){
                target[key] = newValue
            }
        }
        else{
            throw 'error'
        }
        return true
    },
    
    // get:function(t , k){
        
    //     // console.log(arguments);
    //     if(!t[k]){
    //         throw 'error'
    //     }
    //     return t[k]
    // }
}

let p = new Proxy(std ,handler )

p.name = 'ahmed'
p.age = 20
p.phone = '+201065438238'
// // p.color



console.log(p.name);
console.log(p.phone);
console.log(p.age);

// 2---------------------------------------


let arr = [1,2,3,4,5,1,2,3]

let newSet = new Set(arr)

newSet.add(1)
newSet.add(10)



console.log(...newSet)

// for (const i of newSet) {
//     console.log(i);
    
// }

// 3---------------------------------


let obj1 = new Vehicle('bmw',20,10)
let obj2 = new Car('bmw',20,10)
let obj3 = new Bicycle('bmw',20,10)

obj1.display()
obj2.display()
obj3.display()


// 4 (Bonus)-------------------------------------------------




let myData = {
    name: "Zola",
    role: "Developer",
    language: "JavaScript",
}




let myIterableObject = {
    ...myData,

[Symbol.iterator]() {
        let entries = Object.entries(this);
        let index = 0;
        return {
            next: () => {
                if (index < entries.length) {
                    let [key, value] = entries[index++];
                    if (typeof value === 'function') {
                        return { value: undefined, done: false }; 
                    }
                    return { 
                        value: `${key} >>> ${value}`, 
                        done: false 
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};


for (const entry of myIterableObject) {
    console.log(entry);
}
