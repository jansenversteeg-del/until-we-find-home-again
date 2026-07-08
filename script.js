/* ============================================
   BUILD 2
   UNTIL WE FIND HOME AGAIN
============================================ */

window.addEventListener("load", () => {

    // =========================================
    // Loader
    // =========================================

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1800);

});


// =========================================
// Scroll Reveal
// =========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


document.querySelectorAll(
`
.intro,
.timeline-item,
.coming-soon
`
).forEach(section=>{

    section.classList.add("fade-up");

    observer.observe(section);

});


// =========================================
// Ken Burns Effect
// =========================================

const hero = document.querySelector(".hero");

let zoom = 100;

setInterval(()=>{

    zoom += 0.01;

    hero.style.backgroundSize = zoom + "%";

},40);


// =========================================
// Smooth Scroll
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =========================================
// Button Animation
// =========================================

const button=document.querySelector(".hero-button");

button.addEventListener("mouseenter",()=>{

    button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="translateY(0px) scale(1)";

});


// =========================================
// Scroll Arrow
// =========================================

window.addEventListener("scroll",()=>{

    const arrow=document.querySelector(".scroll-indicator");

    if(window.scrollY>100){

        arrow.style.opacity="0";

    }

    else{

        arrow.style.opacity="1";

    }

});


// =========================================
// Future Build Placeholder
// =========================================

// BUILD 3
// Gallery Animation

// BUILD 4
// Letter Animation

// BUILD 5
// Invitation
