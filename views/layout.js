import home from "./pages/home.js";
import teacher from "./pages/teacher.js";
import admin from "./pages/admin.js";
import navbar from "./components/navbar.js";
import auth from "./pages/auth.js";

function layout() {
  let pageDisplay = "";
  const location = window.location.pathname;
  if (location === "/") {
    pageDisplay = home();
  } else if (location === "/admin") {
    pageDisplay = admin();
  } else if (location === "/teacher") {
    pageDisplay = teacher(); 
  }
    else if(location === "/auth") {
      pageDisplay = auth();
  } else {
    pageDisplay = `<h1>Error></h1>`;
  }
  return `<div>
${navbar()}
<div>
${pageDisplay}

</div>


    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const layoutPage = document.getElementById("app");
  layoutPage.innerHTML = layout();
});
