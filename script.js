var menu = document.getElementById("menu")
var head = document.querySelector(".head")
var close = document.getElementById("p1")

menu.addEventListener("click",function(){
    head.classList.remove("hidden")
})

close.addEventListener("click",function(){
    head.classList.add("hidden")
})


var search = document.getElementById("search")
var foodcontainer = document.getElementById("productcontainer")
if (search && foodcontainer) {
    var foodlist = foodcontainer.querySelectorAll(".order__card")

    search.addEventListener("keyup", function (event) {
        var enteredvalue = event.target.value.toUpperCase()

        for (var count = 0; count < foodlist.length; count++) {
            var foodname = foodlist[count].querySelector("p").textContent

            if (foodname.toUpperCase().indexOf(enteredvalue) < 0) {
                foodlist[count].style.display = "none"
            } else {
                foodlist[count].style.display = "block"
            }
        }
    })
}

var form = document.getElementById("myForm")

form.addEventListener("submit", function(event){
    event.preventDefault()

    var name = document.getElementById("name").value
    var number = document.getElementById("phone").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var isValid = true

    if(name === ""){
        document.querySelector(".nameError").innerHTML = "Name is required"
        isValid = false
    } else {
        document.querySelector(".nameError").innerHTML = ""
    }

    if(number === ""){
        document.querySelector(".phoneError").innerHTML = "Number is required"
        isValid = false
    } else {
        document.querySelector(".phoneError").innerHTML = ""
    }

    if(password.length<6){
        document.querySelector(".passwordError").innerHTML = "Password is too short"
        isValid = false
    }

    if(email === ""){
        document.querySelector(".emailError").innerHTML = "Email is required"
        isValid = false
    } else {
        document.querySelector(".emailError").innerHTML = ""
    }

    if(isValid){
        alert("Form submitted successfully!")
    }
})



var maxLength = 200

message.addEventListener("input", function(){

    var textLength = message.value.length

    // Prevent typing beyond limit
    if (textLength > maxLength) {
        message.value = message.value.substring(0, maxLength)
    }

    var remaining = maxLength - message.value.length

    counter.innerHTML = message.value.length + "/" + maxLength + " characters"

    // Warning
    if (remaining === 0) {
        warning.innerHTML = "Character limit reached!"
    } else {
        warning.innerHTML = ""
    }
})