
// 1 ----------------------------

let item = document.getElementById('item')
function widthIncrease(){
    item.style.width = 400 + 'px';
    item.style.transition = "width 0.4s ease-in-out";
}

function widthDecrease(){
    item.style.width = 200 + 'px'
}

// 2-------------------------------------
const nameInput = document.getElementById('fullName');
const genderSelect = document.getElementById('genderSelect');


function updateDisplay() {
    const name = nameInput.value.trim();
    const prefix = genderSelect.value;

if (name && prefix) {
    document.writeln( `<p>Hello ${prefix} ${name}!</p>`);
} else {
    output.textContent = "";
}
}

nameInput.addEventListener('input', updateDisplay);
genderSelect.addEventListener('change', updateDisplay);


// 3--------------------------------
function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// 4-----------------------------

const container = document.querySelector('.gallery-container');
container.style.width = "400px";
container.style.textAlign = "center";
container.style.alignItems = "center";





let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


let controls = document.querySelector('.controls');
controls.style.margin = "15px 0";



let circlesContainer = document.querySelector('.circles-container');
circlesContainer.style.display = "flex";
circlesContainer.style.justifyContent = "center";
circlesContainer.style.gap = "8px";


const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.style.height = "15px";
    circle.style.width = "15px";
    circle.style.backgroundColor = "#bbb";
    circle.style.borderRadius = "50%";
    circle.style.display = "inline-block";
    circle.style.cursor = "pointer";
});

function setActiveCircle(index) {
    circles.forEach((circle, i) => {
    if (i === index) {
        circle.style.backgroundColor = "#3498db";
    } else {
        circle.style.backgroundColor = "#bbb";  
    }
});
}

const images = ["images/1.jpeg", "images/2.jpeg", "images/3.png"];
let currentIndex = 0;
let slideInterval;

function updateGallery() {
    mainImage.src = images[currentIndex];
    circles.forEach((circle, index) => {
    circle.classList.toggle('active', index === currentIndex);
    });
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    } else {
        currentIndex = 0;
        updateGallery();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
}

function goToImage(index) {
    currentIndex = index;
    updateGallery();
}

function startSlideshow() {
    clearInterval(slideInterval); 
    
    slideInterval = setInterval(() => {
    if (currentIndex < images.length - 1) {
        nextImage();
    }
    else {
        currentIndex = 0;
        updateGallery();
    }
    }, 1000); 
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

updateGallery();


// 5--------------------------

let text = document.getElementById('PAR');

function ChangeFont(fontType){
    text.style.fontFamily = fontType;

}

function ChangeAlign(align){
    text.style.textAlign = align;
}

function ChangeHeight(height){
    text.style.height = height;
}

function ChangeLSpace(space){
    text.style.letterSpacing = space;
}

function ChangeIndent(indent){
    text.style.textIndent = indent;
}

function ChangeTransform(trans){
    text.style.textTransform = trans;
}


function ChangeDecorate(decorate){
    text.style.textDecoration = decorate;

}

function ChangeBorder(border){
    text.style.border = border;

}

function ChangeBorderColor(borderColor){
    text.style.borderColor = borderColor;
}


// Bouns ---------------------------------