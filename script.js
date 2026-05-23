const WORKER_URL = "https://github-ai-chatbot-api.ibnuananta404.workers.dev";

const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const submitButton = chatForm.querySelector("button");

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user-message");
  userInput.value = "";
  setLoading(true);

  const loadingMessage = addMessage("Sedang berpikir...", "bot-message");

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

    loadingMessage.textContent = data.reply || "Maaf, tidak ada jawaban dari AI.";
  } catch (error) {
    loadingMessage.classList.add("error-message");
    loadingMessage.textContent =
      "Terjadi error. Pastikan Worker sudah dideploy dan GEMINI_API_KEY sudah ditambahkan di Cloudflare.";
  } finally {
    setLoading(false);
    userInput.focus();
  }
});

function addMessage(text, className) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = text;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  return messageElement;
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "..." : "Kirim";
}
