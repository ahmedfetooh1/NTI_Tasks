import * as Cookies from './modules.js'

window.onload = function() {

    let nameInput = Cookies.getCookie('name');
    let genValue = Cookies.getCookie('gender');
    let color = Cookies.getCookie('color');
    let visits = parseInt(Cookies.getCookie("visits")) + 1;


    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    Cookies.setCookie("visits", visits, date);


    let head = document.createElement('p')
    if (genValue === 'male') {
        head.innerHTML = `<img src="images/male.jpeg" alt="">
        welcome <span style="color:${color};font-weight:bold">${nameInput}</span>
        you have visited the the site <span style="color:${color};font-weight:bold">${visits}</span> times `
        document.body.append(head)
    }else if (genValue === 'female') {
        head.innerHTML = `<img src="images/female.jpeg" alt="">
        welcome <span style="color:${color};font-weight:bold">${nameInput}</span>
        you have visited the the site <span style="color:${color};font-weight:bold">${visits}</span> times`
        document.body.append(head)
    }


}