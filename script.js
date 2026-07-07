const sendBtn = document.getElementById("send");
const input = document.getElementById("prompt");
const chatBox = document.getElementById("chat-box");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = type + "-message";
  div.innerHTML = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user");

  input.value = "";

  setTimeout(() => {
    addMessage("🤖 AI connection will be added in next step.", "bot");
  }, 600);
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
