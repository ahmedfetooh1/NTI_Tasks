// 1---------------------------
let randomMessage = ['tip: be patient','tip: be quit','tip: work for learn not earn','tip:js is hard in first only','tip: be the best of your self',
    'tip: every day improve at least 1%','tip: see your self in the future wanna be in what?']

document.writeln(randomMessage[Math.floor(Math.random() * randomMessage.length)])

// 2------------------------------
document.writeln("<hr>")


let email = prompt("enter your email: ")
if (email.includes("@") && email.indexOf("@") != 0 && email.indexOf("@") != email.length - 1){
    document.writeln('<p>success</p>')
}
else document.writeln("<p>error</p>")

// 3-----------------------------
document.writeln("<hr>")


let arr2 =[60,100,10,15,85]
arr2.sort().reverse()

document.writeln(arr2.find(num => num <= 100))
document.writeln('<br>')
document.writeln(arr2.filter(num => num < 60))

// 4------------------------------------
document.writeln("<hr>")
let students = [
    { Name: "Ahmed", Degree: 85 },
    { Name: "Sara", Degree: 92 },
    { Name: "Mona", Degree: 55 },
    { Name: "Hassan", Degree: 40 },
    { Name: "Zain", Degree: 98 }
];

let topStudent = students.find(s => s.Degree >= 90 && s.Degree <= 100);
document.writeln("Top Student: " + (topStudent ? topStudent.Name : "Not found"));

document.writeln("<br>");
document.writeln("Students with degree < 60: ");
let failedStudents = students.filter(s => s.Degree < 60);
failedStudents.forEach(s => document.writeln(s.Name));
document.writeln("<br>");




students.push({ Name: "Omar", Degree: 75 });
for (let index in students) {
    document.writeln(`Index ${index}: Name = ${students[index].Name}, Degree = ${students[index].Degree}`);
    document.writeln("<br>");
}
document.writeln("<br>");


students.pop();
for (let student of students) {
    document.writeln(`Name: ${student.Name}, Degree: ${student.Degree}`);
    document.writeln("<br>");
}
document.writeln("<br>");


students.sort((a, b) => {
    if (a.Name < b.Name) return -1;
    if (a.Name > b.Name) return 1;
    return 0;
});

console.log("Sorted Array:", students);