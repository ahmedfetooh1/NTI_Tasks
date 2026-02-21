
let P = new Promise(async (resolve, reject) => {
    let res = await fetch(`https://dummyjson.com/users`);
    let users = await res.json();
    if (users) {
        resolve(users);
    } else {
        reject("oops something went wrong while getting the data from server !");
    }
});


P.then((data) => {
    data.users.forEach((user) => {
        let btn = document.createElement("button");
        btn.classList.add("btnStyle");
        btn.textContent = user.firstName;
        document.body.appendChild(btn);
        btn.onclick = () => getDataOfUser(user.id);
    });
}).catch((err) => {
    console.log(err);
});

async function getDataOfUser(userId) {
    try {
        let userData = await fetch(`https://dummyjson.com/users/${userId}/todos`);
        let userInfo = await userData.json();

        let boxStyle = document.querySelector(".boxStyle");

        if (!boxStyle) {
            boxStyle = document.createElement("div");
            boxStyle.classList.add("boxStyle");
            document.body.appendChild(boxStyle);
        }

        boxStyle.innerHTML = "";
        userInfo.todos.forEach((todo) => {
        boxStyle.innerHTML += `<p>${todo.todo}</p>`;
        });
    } catch (err) {
        console.log(err);
    }
}