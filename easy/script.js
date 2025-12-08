// Developers sometimes leave test data here...
// But nothing to see, right? :)

(function () {
  // "hidden" Base64 encoded string
  const encoded = "RkxBR3tKUzRfRU5DT0RFRH0=";

  // This function is never called in normal flow,
  // but a curious hacker might see it in the source.
  function revealSecret() {
    try {
      const decoded = atob(encoded);
      console.log("Secret dev note:", decoded);
      return decoded;
    } catch (e) {
      console.error("Decoding error", e);
      return null;
    }
  }

  // Uncomment this line while developing
  // console.log("DEBUG:", revealSecret());
})();
