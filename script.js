let display = document.getElementById("display");
let themeToggleBtn = document.getElementById("theme-toggle");
let isDarkMode = false;

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  themeToggleBtn.innerText = isDarkMode ? "☀️" : "🌙";
}
