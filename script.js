const WORKER_URL = "https://github-ai-chatbot-api.ibnuananta404.workers.dev";

const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const submitButton = chatForm.querySelector("button");

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";
  setLoading(true);

  const loadingMessage = addMessage("Sedang berpikir...", "assistant", true);

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || "Request gagal");
    }

    loadingMessage.querySelector(".message-text").textContent =
      data.reply || "Maaf, belum ada jawaban.";
  } catch (error) {
    loadingMessage.classList.add("error-row");
    loadingMessage.querySelector(".message-text").textContent =
      "Terjadi error. Pastikan Worker sudah dideploy dan API key sudah aktif.";
  } finally {
    setLoading(false);
    userInput.focus();
  }
});

function addMessage(text, role, isLoading = false) {
  const row = document.createElement("div");
  row.className = `message-row ${role === "user" ? "user-row" : "assistant-row"}`;

  const avatar = document.createElement("div");
  avatar.className = `avatar ${role === "user" ? "user-avatar" : "assistant-avatar"}`;
  avatar.textContent = role === "user" ? "I" : "A";

  const content = document.createElement("div");
  content.className = "message-content";

  const name = document.createElement("div");
  name.className = "message-name";
  name.textContent = role === "user" ? "You" : "AIAI";

  const messageText = document.createElement("div");
  messageText.className = `message-text ${isLoading ? "is-loading" : ""}`;
  messageText.textContent = text;

  content.appendChild(name);
  content.appendChild(messageText);
  row.appendChild(avatar);
  row.appendChild(content);

  chatBox.appendChild(row);
  chatBox.scrollTop = chatBox.scrollHeight;

  return row;
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "…" : "➜";
}
