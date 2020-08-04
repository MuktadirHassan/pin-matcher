// Generate pin and display it.
let pin;
const generatePinBtn = document.querySelector(".generate-btn");
generatePinBtn.addEventListener("click",() => {
    resetCalcInput();
    pin = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    generatePinBtn.parentNode.children[0].value = pin;
});


// Resets CalcInput field and resets notifications
function resetCalcInput() {
    calcValue = '';
    calcInput.value = calcValue; 
    resetNotification();
}

// Resets only notifications
function resetNotification() {
    const notify = document.getElementsByClassName("notify");
    notify[0].style.display = "none";
    notify[1].style.display = "none";
}

// CalcBody using javaScript event delegation
let calcValue;
const calcBody = document.querySelector(".calc-body");
let calcInput = document.getElementById("calc-input");
calcBody.addEventListener("click", e => {
    if (e.target.className == "button number") {
        calcInput.value += e.target.textContent;
        calcValue = calcInput.value;
        resetNotification();
    }

    // Features for bonus marks
    if (e.target.className == "button clear") {
        resetCalcInput();
    }
    if (e.target.className == "button del") {
        if (calcValue) {
            calcValue = calcValue.substr(0, calcValue.length - 1);
            calcInput.value = calcValue;
            resetNotification();
        }
    }
});

// Show correct notification upon submission
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
    const notify = document.getElementsByClassName("notify");
    calcValue = calcInput.value;
    if (parseInt(pin) === parseInt(calcValue)) {
        notify[1].style.display = "block";
        notify[0].style.display = "none";
    } else {
        notify[0].style.display = "block";
        notify[1].style.display = "none";
    }
})
