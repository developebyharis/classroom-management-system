import button from "../components/button.js";
import input from "../components/input.js"

function app() {
  return `<h1>Hello world!</h1>
${button("testing", "my-button")}
${input("testing", "Testing", "text")}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const appHTML = document.getElementById("app");
  appHTML.innerHTML = app();
});
