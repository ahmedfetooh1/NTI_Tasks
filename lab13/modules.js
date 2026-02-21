const expirationDate = new Date()
export function setCookie(name, value, days , secure) {
    expirationDate.setDate(expirationDate.getDate() + days)
    document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};${secure ? 'secure' : ''}`
}

export function getCookie(name){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2 ){
        return parts.pop().split(';').shift();
    }
}

export function deleteCookie(name){
    expirationDate.setDate(expirationDate.getDate() - 1)
    document.cookie = `name='';expires=${expirationDate}`
}


let allCookie = {}
export function allCookieList(){
    let cookies = document.cookie.split(';')
    // console.log(cookies)
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim().split('=');
        // console.log(cookie)
        if (cookie[0]) {
            allCookie[cookie[0]] = cookie[1];
        }
    }
    return allCookie
}

export function hasCookie(name) {
    return getCookie(name) !== "";
}


