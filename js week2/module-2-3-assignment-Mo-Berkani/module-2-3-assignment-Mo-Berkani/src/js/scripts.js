let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    let newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
    setTimeout(alert,10000, "Lorem ipsum dolor sit amet");
});

