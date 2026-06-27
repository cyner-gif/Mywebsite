let i1 = document.getElementById("u");
let i2 = document.getElementById("p");
let button = document.getElementById("b1");

function checkInput() {
    if (i1.value.trim() !== "" && i2.value.trim() !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

i1.addEventListener("input", checkInput);
i2.addEventListener("input", checkInput);

checkInput();