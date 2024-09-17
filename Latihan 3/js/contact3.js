$(document).ready(function () {
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();
        alert("Thank You for Contacting Us");
        retrieveData()
    });

    $("#date").datepicker({
        dateFormat: "dd-mm-yy"
    });
});

function retrieveData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;
    let inquiry = document.getElementById("inquiry").value;

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML =
        `<h2>Contact Details</h2> 
        <p><strong>Name: </strong>${name} </p> 
        <p><strong>Email: </strong>${email}</p> 
        <p><strong>Gender: </strong>${gender}</p>
        <p><strong>Date: </strong>${date}</p>
        <p><strong>Message: </strong>${message}</p>
        <p><strong>Type of Inquiry: </strong>${inquiry}</p>`;
}
