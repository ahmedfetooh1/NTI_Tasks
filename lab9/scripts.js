//Task 1

//const fullNameRegex = /^[a-zA-Z]{3,}( [a-zA-Z]{3,})$/;
//const emailRegex = /^[a-zA-Z](@)(domain).(com|net|edu|org)(.eg)$/;

//while (1) {
//  fullName = prompt("Enter  name !");

//  if (fullName === null) {
//    alert("Input cancelled");
//    break;
//  }

//  if (fullNameRegex.test(fullName)) {
//    alert("Full Name accepted: " + fullName);
//    break;
//  } else {
//    alert("invalid");
//  }
//}
//while (1) {
//  email = prompt("Enter  email !");

//  if (email === null) {
//    alert("Input cancelled");
//    break;
//  }

//  if (emailRegex.test(email)) {
//    alert("Full Email accepted: " + email);
//    break;
//  } else {
//    alert("invalid");
//  }
//}

//Task 2
function validateInput(val) {
    console.log("The input value ", val);
    const fullNameRegex = /^[a-zA-Z]{3,}( [a-zA-Z]{3,})$/;
    return fullNameRegex.test(val);
}




// Task 3

//function handleError() {
//  try {
//    const name = confirm("Enter Date ?");
//  if (!name) {
//    throw new Error("Error while enter name !");
//  }
//  } catch (err) {
//    console.log(err.message);
//  }
//}

//handleError()


let val;
function openADS() {
    console.log("fired frist");
    val = setTimeout(() => {
    console.log("fired second");

        document.writeln(`
        <p>
        fjadfjdjfjdfjklffjdfdfjffjkl
        fjadfjdjfjdfjklffjdfdfjffjklfjadfjdjfjdfjklffjdfdfjffjkl
        </p>`);
    }, 3000);
}

function deleteADS() {
    clearInterval(val);
}