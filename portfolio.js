import { projects, skills, socials } from "./portData.js";

const projectContainer = document.getElementById("projectsGrid");

projectContainer.innerHTML = projects
  .map((project) => {
    return `
      <div class="project-card">
        <div class="project-img-ph">
          ${project.img ? `<img src="${project.img}" alt="${project.name} screenshot" class="project-img" />` : `i class="fa-solid ${project.icon}"></i>`}
        </div>

        <div class="project-body">
          <div class="project-name">${project.name}</div>

          <div class="project-desc">
            ${project.desc}
          </div>

          <div class="project-techs">
            ${project.techs
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join("")}
          </div>

          <div class="project-links">
            ${
              project.frontend
                ? `
              <a href="${project.frontend}" target="_blank" class="proj-link">
                <i class="fa-brands fa-github"></i> Frontend
              </a>`
                : ""
            }

            ${
              project.backend
                ? `
              <a href="${project.backend}" target="_blank" class="proj-link">
                <i class="fa-brands fa-github"></i> Backend
              </a>`
                : ""
            }

            ${
              project.video
                ? `
              <a href="${project.video}" target="_blank" class="proj-link">
                <i class="fa-brands fa-youtube"></i> Video
              </a>`
                : ""
            }

            ${
              project.liveLink
                ? `
              <a href="${project.liveLink}" target="_blank" class="proj-link">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live
              </a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  })
  .join("");

//all social links of mine
const socialContainers = document.querySelectorAll(".contact-socials");
socialContainers.forEach((container) => {
  socials.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.title = item.title;

    const icon = document.createElement("i");
    icon.className = `fa-brands ${item.icon}`;

    a.appendChild(icon);
    container.appendChild(a);
  });
});

//displaying all skills in the html page
const skillsGrid = document.querySelector(".skills-grid");
skills.forEach((skill) => {
  const div = document.createElement("div");
  div.className = "skill-chip";

  div.innerHTML = `
    <img class="skill-icon" src="${skill.icon}" onerror="this.style.display='none'" />
    <span>${skill.name}</span>
  `;

  skillsGrid.appendChild(div);
});

// open navbar in the small screen with a barger icone
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => navLinks.classList.toggle("open"));

  navLinks
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open")),
    );
});

//footer text
document.getElementById("footer-text").textContent =
  `© ${new Date().getFullYear()} Mahmudul Hasan. All rights reserved.`;
