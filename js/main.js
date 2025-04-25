const lenders = document.getElementById("nakautangs");
const errorMsg = document.getElementById("errorMsg");

document.getElementById("add").addEventListener("click", function() {
    let name = document.getElementById("utanger").value;
    let utang = parseFloat(document.getElementById("money").value);

    if (name == "" || isNaN(utang) || utang <= 0) {
        errorMsg.textContent = "Name and Amount should not be blank and is not less than 1.";
        errorMsg.classList.add("error");
        return;
    }

    errorMsg.classList.remove("error");
    errorMsg.textContent = "";

    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - ₱" + utang;
    lenders.appendChild(newUtang);

    document.getElementById("utanger").value = "";
    document.getElementById("money").value = "";
});

document.getElementById("clear").addEventListener("click", function() {
    lenders.textContent = "";
});
