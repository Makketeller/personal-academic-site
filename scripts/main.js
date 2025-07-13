console.log("Own webiste script loaded successfully!");

document.addEventListener('DOMContentLoaded', function () {
    const projectsLink = document.getElementById('nav-projects');
    const solutionsLink = document.getElementById('nav-solutions');
    const aboutMeLink = document.getElementById('nav-about-me');

    // When "Solutions" is clicked
    solutionsLink.addEventListener('click', function () {
        projectsLink.classList.remove('active');
        projectsLink.removeAttribute('aria-current');
        aboutMeLink.classList.remove('active');
        aboutMeLink.removeAttribute('aria-current');

        solutionsLink.classList.add('active');
        solutionsLink.setAttribute('aria-current', 'page');
    });

    // When "Projects" is clicked
    projectsLink.addEventListener('click', function () {
        solutionsLink.classList.remove('active');
        solutionsLink.removeAttribute('aria-current');
        aboutMeLink.classList.remove('active');
        aboutMeLink.removeAttribute('aria-current');

        projectsLink.classList.add('active');
        projectsLink.setAttribute('aria-current', 'page');
    });

     // When "About Me" is clicked
    aboutMeLink.addEventListener('click', function () {
        solutionsLink.classList.remove('active');
        solutionsLink.removeAttribute('aria-current');
        projectsLink.classList.remove('active');
        projectsLink.removeAttribute('aria-current');

        aboutMeLink.classList.add('active');
        aboutMeLink.setAttribute('aria-current', 'page');
    });
});