const homeButton = document.querySelector(".nav-name");
const projectGrid = document.querySelector(".projects-grid");
const projects = projectGrid.querySelectorAll(".project");

function scrollToTop(e) {
	window.scrollTo(0, 0);
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

homeButton.addEventListener("click", scrollToTop);
homeButton.addEventListener("mouseover", () => {
	homeButton.style.cursor = "default";
});

projects.forEach((p) => {
	p.addEventListener("mouseover", transition);
    p.addEventListener("mouseout", reset)
});



