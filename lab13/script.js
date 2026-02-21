import * as Cookies from './modules.js'


// setCookie('name','ali')
// setCookie('age',34)
// console.log(Cookies.allCookieList())



// console.log(document.cookie)




let nameInput = document.getElementById('username');
let ageInput = document.getElementById('userAge');
let register = document.getElementById('register');

nameInput.addEventListener('input', function() {
    nameInput.value = nameInput.value.trim();
});


ageInput.addEventListener('input', function() {
    ageInput.value = ageInput.value.trim();
});
let color = 'red'
let select = document.getElementsByTagName('select')[0];
select.addEventListener('change', takeValues);

function takeValues(){
    let selectIndex = document.getElementsByTagName('select')[0].selectedIndex ;
    color = document.getElementsByTagName('select')[0].options[selectIndex].value;
    console.log(selectIndex)
}

let radios = document.getElementsByName('gender');
let selectedValue;


let date = new Date();
    date.setFullYear(date.getFullYear() + 1);

let genValue
register.addEventListener('click', function() {
    var checked = document.querySelector('input[name="gender"]:checked');
        if (checked &&nameInput.value && typeof nameInput.value === 'string'&& ageInput.value && color) {
            genValue = checked.value;
            Cookies.setCookie('name',nameInput.value,30)
            Cookies.setCookie('age',ageInput.value,30)
            Cookies.setCookie('color',color,30)
            Cookies.setCookie('gender',genValue,30)
            Cookies.setCookie("visits", 0,date );
            window.location.href = `about.html`;
        }
        else {
            alert('please full all fields');
        }
});


// 2-------------------------------------------

function add(...args){
    if (args.length == 2){
        return args[0] + args[1]
    
    }
    else return 'please enter two parms only'
}

console.log(add(2,2))




function sum(...args){
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number'){
            sum += args[i]
        }
        else return 'please enter only numbers'

    }
    return sum
}

console.log(sum(1,2,3,true,5))



function stateFunc(...items) {
    return items.reverse();

}

let arrowReverse = (...items) => items.reverse();

console.log(stateFunc(1,2,3,4,5))
console.log(arrowReverse(1,2,3,4,5))