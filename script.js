const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  const aboutSection = document.getElementsByClassName(".about-text");

  if (document.body.classList.contains("dark-mode")) {
    aboutSection.style.color = "#000"; // dark mode mein black text
  } else {
    aboutSection.style.color = ""; // light mode mein default
  }
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, clickedElement) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  clickedElement.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
};

document.addEventListener("DOMContentLoaded", () => {
  for (let tablink of tablinks) {
    tablink.addEventListener("click", function () {
      let tabname = this.innerText.trim();
      opentab(tabname, this);
    });
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId =
      this.getAttribute("href").substring(1);
    const targetSection =
      document.getElementById(targetId);
    if (targetSection.scrollIntoView({
      behavior: "smooth"
    }));
  });
});







