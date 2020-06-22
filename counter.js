alert("Hello there! Welcome to Timer.kj. Here you can increment and decrement the digit to a particular value and initiate a count-down where value gets decremented by one every 0.5 seconds until the counter reaches 0. User can reset the value to an initial value which is set as 25.")

let val = document.getElementById("field").innerHTML;


document.querySelector("#Increment").addEventListener("click", function () {
    val++;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#Decrement").addEventListener("click", function () {
    val--;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#reset").addEventListener("click", function () {
    val = 0;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#start").addEventListener("click", function () {

    var x = setInterval(function () {
        document.querySelector("#field").textContent = val;
        val--;
        if (val == -2) {
            alert("The timer has reached zero!")
            clearInterval(x);
        }
    }, 500)
}
);

document.querySelector("#reset").addEventListener("click",
    function () {
        val = 25;
        document.querySelector("#field").textContent = val;
    })

