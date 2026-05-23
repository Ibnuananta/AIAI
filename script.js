const WORKER_URL = "https://github-ai-chatbot-api.ibnuananta404.workers.dev";

const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");
const submitButton = chatForm.querySelector("button");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const themeLabel = themeToggle?.querySelector(".theme-label");

initTheme();

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

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.dataset.theme || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("aiai-theme", nextTheme);
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("aiai-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (!themeToggle || !themeIcon || !themeLabel) return;

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light" : "Dark";
}

function addMessage(text, role, isLoading = false) {
  const row = document.createElement("div");
  row.className = `message-row ${role === "user" ? "user-row" : "assistant-row"}`;

  const avatar = document.createElement("div");
  avatar.className = `avatar ${role === "user" ? "user-avatar" : "assistant-avatar"}`;
  avatar.textContent = role === "user" ? "I" : "✦";

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
  submitButton.textContent = isLoading ? "…" : "✦";
}
