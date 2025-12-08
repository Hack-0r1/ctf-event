// Developer hint left behind...
console.log("💡 Hint: There is an encoded string in this file. Maybe decode it?");

// Base64 encoded flag
const encodedFlag = "RkxBR3tSMV9XRUJfSlNCMjR9"; // FLAG{R1_WEB_JSB24}

// Reveal function for players
function revealFlag() {
  const div = document.createElement("div");
  div.className = "flag-box";
  div.innerText = atob(encodedFlag);
  document.body.appendChild(div);
}

console.log("Type revealFlag() in the console to debug.");
