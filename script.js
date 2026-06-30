const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.textContent;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            display.value = eval(display.value);
        }
        else {
            display.value += value;
        }

    });
});