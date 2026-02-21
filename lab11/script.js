let bandSelect = document.getElementById('bandSelect');
let artistSelect = document.getElementById('artistSelect');

let xhr = new XMLHttpRequest()

xhr.open('GET', 'rockbands.json')

xhr.send()

let data
xhr.addEventListener("readystatechange" , function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        data = JSON.parse(xhr.responseText);
        console.log(data);
        for (const user in data) {
            let opt = document.createElement('option');
            opt.value = user;
            opt.textContent = user;
            bandSelect.appendChild(opt);
        }

    }
})


bandSelect.addEventListener('change', function() {
    let selectedBand = this.value;

    artistSelect.innerHTML = '<option value="">please select</option>';

    if (selectedBand && data[selectedBand]) {
        artistSelect.disabled = false;
        
        data[selectedBand].forEach(artist => {
            let opt = document.createElement('option');
            opt.value = artist.value;
            opt.textContent = artist.name; 
            artistSelect.appendChild(opt);
        });
    } else {
        artistSelect.disabled = true;
    }
});




// 2-----------------------------------------
let nameInput = document.getElementById('username');
let ageInput = document.getElementById('userAge');
let register = document.getElementById('register');

nameInput.addEventListener('input', function() {
    nameInput.value = nameInput.value.trim();
});

ageInput.addEventListener('input', function() {
    ageInput.value = ageInput.value.trim();
});
let color 
function takeValues(evt){
    let selectIndex = document.getElementsByTagName('select')[2].selectedIndex
    color = document.getElementsByTagName('select')[2].options[selectIndex].value;
    console.log(selectIndex)
}

let radios = document.getElementsByName('gender');
let selectedValue;



var checked = document.querySelector('input[name="gender"]:checked');



let genValue
register.addEventListener('click', function() {
    checked = document.querySelector('input[name="gender"]:checked');
        if (checked &&nameInput.value && typeof nameInput.value === 'string'&& ageInput.value && color) {
            genValue = checked.value;
            window.location.href = `about.html?genValue=${genValue}&nameInput=${nameInput.value}&ageInput=${ageInput.value}&color=${color}`;
        }
        else {
            alert('please full all fields');
        }
});