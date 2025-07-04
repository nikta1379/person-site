const projects = [
    {
        title: "پروژه 1",
        description: "توضیحات درباره پروژه 1.",
        imageUrl: "project1.jpg"
    },
    {
        title: "پروژه 2",
        description: "توضیحات درباره پروژه 2.",
        imageUrl: "project2.jpg"
    },
    {
        title: "پروژه 3",
        description: "توضیحات درباره پروژه 3.",
        imageUrl: "project3.jpg"
    }
];

let currentProjectIndex = 0;

function loadProject(index) {
    const projectContainer = document.getElementById("projectContainer");
    const project = projects[index];

    projectContainer.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projects.length - 1;
    loadProject(currentProjectIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex < projects.length - 1) ? currentProjectIndex + 1 : 0;
    loadProject(currentProjectIndex);
});

// بارگذاری پروژه اول
loadProject(currentProjectIndex);
