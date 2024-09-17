function login(message) {
    alert(message)
}

function retrieveData() {
    let textValue1 = document.getElementById("email").value;
    let textValue2 = document.getElementById("password").value;

    let outputDiv = doucment.getElementById("output");
    outputDiv.innerHTML = `
    <p>Email : ${email}</p>
    <p>Password : ${password}</p>`
}