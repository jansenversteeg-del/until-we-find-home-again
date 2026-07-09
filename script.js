/*
Until We Find Home Again
Release 0.31 Alpha - Sprint 2 Task 3
*/

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initSmoothScroll();
    initScrollReveal();
});

function initLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;
    window.addEventListener("load", () => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 500);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({behavior:"smooth", block:"start"});
        });
    });
}

function initScrollReveal() {
    const sections = document.querySelectorAll(".timeline,.gallery,.letter,.closing,.story-section");

    if (!("IntersectionObserver" in window)) {
        sections.forEach(s => s.classList.add("show"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.15});

    sections.forEach(section => observer.observe(section));
}
