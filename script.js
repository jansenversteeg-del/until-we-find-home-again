/*
Until We Find Home Again
Release 0.31.2 Bug Fix
*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initSmoothScroll();
    initScrollReveal();

});

function initLoader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    function hideLoader(){

        loader.classList.add("hide");

        setTimeout(()=>{
            loader.remove();
        },800);

    }

    // kalau halaman sudah selesai dimuat
    if(document.readyState === "complete"){

        hideLoader();

    }else{

        window.addEventListener("load", hideLoader);

    }

    // fallback
    setTimeout(hideLoader,3000);

}

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",e=>{

            const target=document.querySelector(link.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

function initScrollReveal(){

    const sections=document.querySelectorAll(".timeline,.gallery,.letter,.closing");

    if(!("IntersectionObserver" in window)){

        sections.forEach(s=>s.classList.add("show"));

        return;

    }

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15

    });

    sections.forEach(section=>observer.observe(section));

}
