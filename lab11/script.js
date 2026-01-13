const rockData = {
        "beatles" : [
            { "name" : "Paul McCartney", "value" : "http://www.paulmccartney.com" },
            { "name" : "John Lennon", "value" : "http://www.johnlennon.it" },
            { "name" : "George Harrison", "value" : "http://www.georgeharrison.com" },
            { "name" : "Ringo Starr", "value" : "http://www.ringostarr.com" }
        ],
        "stones" : [
            { "name" : "Mick Jagger", "value" : "http://www.mickjagger.com" },
            { "name" : "Keith Richards", "value" : "http://www.keithrichards.com" },
            { "name" : "Charlie Watts", "value" : "http://www.rosebudus.com/watts" },
            { "name" : "Bill Wyman", "value" : "http://www.billwyman.com" }
        ],
        "genesis" : [
            { "name" : "Phil Collins", "value" : "http://www.philcollins.co.uk" },
            { "name" : "Peter Gabriel", "value" : "http://www.petergabriel.com" },
            { "name" : "Mike Rutherford", "value" : "http://www.mike-and-the-mechanics.co.uk" }
        ],
        "eagles" : [
            { "name" : "Don Henley", "value" : "http://www.donhenley.com" },
            { "name" : "Joe Walsh", "value" : "http://www.joewalsh.com" },
            { "name" : "Glenn Frey", "value" : "http://www.imdb.com/name/nm0004940" }
        ]
    };

let bandSelect = document.getElementById('bandSelect');
let artistSelect = document.getElementById('artistSelect');

Object.keys(rockData).forEach(bandKey => {
    let opt = document.createElement('option');
    opt.value = bandKey;
    opt.textContent = bandKey;
    bandSelect.appendChild(opt);
});

bandSelect.addEventListener('change', function() {
    let selectedBand = this.value;

    artistSelect.innerHTML = '<option value="">please select</option>';

    if (selectedBand && rockData[selectedBand]) {
        artistSelect.disabled = false;
        
        rockData[selectedBand].forEach(artist => {
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
        if (checked) {
            genValue = checked.value;
        }
    window.location.href = `about.html?genValue=${genValue}&nameInput=${nameInput.value}&ageInput=${ageInput.value}&color=${color}`;
});