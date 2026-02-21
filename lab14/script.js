// 1----------------------------------
function updateUserPass(userObject , newPass){
    console.log(userObject , newPass)
    return {
        ...userObject,
        password: newPass ,
        updated : true
    }
    // return userUpdate
}

user = { name:'Ali' , password:'123' } 
console.log(updateUserPass ( user , "456asd" ))


// 2-----------------------------------


let a = 10;
let b = 20;
[a, b] = [b, a];

console.log(a,b);

// 3-------------------------------------

let arr = ['American coffee' , 'tea ', 'french coffee' , 'latte coffee', 'green tea' , 'moka coffee' , 'mojito']
// i
let manyOfDrinks = arr.filter(drink => drink.includes("coffee")).length;
console.log("many of drinks is " + manyOfDrinks)


// ii

let  notCoffee = arr.filter(drink => !drink.includes("coffee"));
console.log(notCoffee)

// iii
let notCoffeeOrTee = arr.filter(drink => !drink.includes("coffee") && !drink.includes("tea"));
console.log(notCoffeeOrTee)

// iv  
let newArr = arr.map(drink => `${drink} ★` )
console.log(newArr)

// v 
newArr.forEach(drink => console.log(drink));

// vi
let checkString = arr.every(drink => typeof drink === "string");
console.log(checkString)




// 4----------------------------------------
let students = [
    { name: "Ahmed", grade: 100 },
    { name: "Shimaa", grade: 150 },
    { name: "Soha", grade: 120 },
    { name: "Ashraf", grade: 80 },
    { name: "Mohamed", grade: 90 }
]

// i ---------------------------------------
let highGrades = students.filter(student => student.grade > 100);
console.log(highGrades)


// ii------------------------------
let manyOfStd = students.filter(student => student.name.startsWith("S")).length;
console.log("many of students is " + manyOfStd)

// iii-------------------------------
let order = students.findIndex(student => student.grade === 150) + 1;
console.log('many of orders is ' +  order)


// 5-----------------------------------------
function isJS(filePath){
    return filePath.endsWith(".js") || filePath.endsWith(".jsx");
}

console.log(isJS("/users/user.jsx") )

