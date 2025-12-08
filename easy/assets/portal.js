// assets/portal.js

// Some "study data" that the developer forgot to remove.
const portalHints = [
  "Always review JS files in web challenges.",
  "Base64 is not encryption, only encoding.",
];

const encodedFlag = "RkxBR3tSMV9XRUJfSlNCMjR9"; // Base64 → FLAG{R1_WEB_JSB24}

function devNote() {
  try {
    const decoded = atob(encodedFlag);
    console.log("Dev debug value (remove before production):", decoded);
    return decoded;
  } catch (e) {
    console.error("Failed to decode flag", e);
  }
}

console.log("Portal script loaded. Curious minds check their DevTools.");
