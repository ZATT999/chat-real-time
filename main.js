const chat = document.querySelector("#chat")
const message = document.querySelector("#message") // Corrected the spelling of 'message'
const send = document.querySelector("#send")

let data = []

message.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      send.click();
  }
});
send.addEventListener("click", () => {
  if (message.value.length > 0) {
   data.push(message.value)
   chat.innerHTML = ''
   data.forEach(msg => {
       const msgElement = document.createElement('div')
       msgElement.textContent = msg
       chat.appendChild(msgElement)
   })
   message.value = ''
  }
})

