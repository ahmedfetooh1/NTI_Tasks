// Task1

alert('Welcome to my site')
var x = prompt("enter your name: ")
document.writeln("Welcome " + x)

// ========================
// Task2

function sum(n1 ,n2){
    return n1 + n2

}

var y = document.getElementById("sum")
y.onclick = function(){
    var n1 =parseInt(prompt("enter first number: "))
    var n2 =parseInt (prompt("enter second number: "))
    console.log(sum(n1,n2))
}

// ======================================
// Task3

function compare(num){
    return (num < 0 )? true:false
}

console.log(compare(-1))

// ======================================
// Task4

function week(fac){
    switch(fac){
        case "FCI" :
            return "mesh maugoud y handasa"
            break
        case "Engineering":
            return "You’re eligible to Network and Embedded tracks" 
            break
        case "Commerce":
            return "You’re eligible to ERP and Social media tracks"
            break
        default:
            return "You’re eligible to SW fundamentals track"

}
}

console.log(week("Commerce"))

// ======================================)
// Task5

function triArea(a,b){
    parseFloat(a)
    parseFloat(b)
    return (a*b)/2
}

console.log(triArea(3,4))

// ======================================
// Bonus Tasks

function write(){
    for(var i=1 ; i <= 6 ;i++){
        document.writeln(`<h${i}>welcome to my page</h${i}>`)
    }
}
write()
// ======================================  
var name = prompt("enter your name: ")
var bir = prompt("enter your birthday year: ")

function table(birthday){
    birthday = parseInt(birthday)
    var age = 2025 - birthday
    document.writeln(`    <table border="1px solid">
        <tr>
            <th>name</th>
            <td>${name}</td>
        </tr>
        <tr>
            <th>birthday</th>
            <td>${bir}</td>
        </tr>
        <tr>
            <th>age</th>
            <td>${age}</td>
        </tr>
    </table>`)
}
table(bir)

// ======================================

// const container = document.getElementsByClassName('remove');
// container.addEventListener('click',() => {
//         var tag = container.target.parentElement;
//     tag.remove();
// } )



// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('skillsContainer');
//     container.addEventListener('click', (e) => {
//         if (e.target.classList.contains('close-tag')) {
//             const tag = e.target.parentElement;  
            
//             tag.classList.add('fade-out');
//             setTimeout(() => {
//                 tag.remove();
//             }, 300);
//         }
//     });
// });