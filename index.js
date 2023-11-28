let modal = document.getElementById("modalReserve");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

let modal1 = document.getElementById("modalReserved");
let btnReserved = document.getElementById("btnReserve");
let btnClose = document.getElementById("btnClose");
let refInput = document.querySelectorAll(".fName, .lName, .phone, .email, .quantity");

btnReserved.addEventListener("click", () => {
    modal.style.display = "none";
    modal1.style.display = "block";
    refInput.forEach(input => {
        const userInput = input.value;            
        input.value = "";
        console.log(userInput);
        
    });
});


window.addEventListener("click", (event) => {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
});

btnClose.addEventListener("click", () => {
    modal1.style.display = "none";
})

let span = document.querySelectorAll(".close");

span.forEach((span) => {
    span.addEventListener("click", () => {
        modal.style.display = "none"; 
        modal1.style.display = "none";  
    })
});

