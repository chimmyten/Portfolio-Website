const homeButton = document.querySelector(".nav-name");
const projectGrid = document.querySelector(".projects-grid");
const projects = projectGrid.querySelectorAll(".project");

function scrollToTop(e) {
  if (e.target.classList.contains("nav-name")) {
    window.scrollTo(0, 0);
    console.log("hello");
  }
}

function transition(e) {
  e.target.querySelector(".project-text").style.display = "flex";
  e.target.querySelector(".project-cover").style.backgroundColor = "rgba(202, 129, 56, 0.85)";
  e.target.querySelector(".project-cover").style.transition = ".3s";
}

function reset(e) {
  e.target.querySelector(".project-text").style.display = "none";
  e.target.querySelector(".project-cover").style.backgroundColor = "rgba(202, 129, 56, 0)";
}

function checkNav(e) {
  const navBar = document.querySelector(".nav-flex");
  if (window.innerWidth < 1200) {
    navBar.innerHTML = `<div class = "nav-name">Timmy Chen</div>
            <a class = "nav-link" href="Resume/Current_Resume_Timmy_Chen_copy.pdf" target = "_blank" rel = "noopener noreferrer">Resume</a>
            <a class = "nav-link" href="https://github.com/chimmyten" target = "_blank" rel = "noopener noreferrer">Github</a>
            <a class = "nav-link" href="https://www.linkedin.com/in/timmychen1/" target = "_blank" rel = "noopener noreferrer">LinkedIn</a>`;
    navBar.classList.add("nav-small-flex");
  } else if (window.innerWidth > 1200) {
    navBar.classList.remove("nav-small-flex");
    navBar.innerHTML = `<div class = "nav-name">Timmy Chen</div>
            <div class = "nav-content-flex">
            <a class = "nav-link" href="Resume/Current_Resume_Timmy_Chen_copy.pdf" target = "_blank" rel = "noopener noreferrer">Resume</a>
            <a class = "nav-link" href="https://github.com/chimmyten" target = "_blank" rel = "noopener noreferrer">Github</a>
            <a class = "nav-link" href="https://www.linkedin.com/in/timmychen1/" target = "_blank" rel = "noopener noreferrer">LinkedIn</a>
        <div>`;
  }
}
checkNav();

document.querySelector(".nav-flex").addEventListener("click", scrollToTop);

projects.forEach((p) => {
  p.addEventListener("mouseover", transition);
  p.addEventListener("mouseout", reset);
});

window.addEventListener("resize", checkNav);
