
// Intersection Observer (Animations)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

// About section
observer.observe(document.querySelector("#about h2"));
observer.observe(document.querySelector("#about p"));

// Skills
const track = document.querySelector(".skills-track");

if(track){
    track.innerHTML += track.innerHTML;
}

// Education & Experience
const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll(
    ".section-title, .edu-card, .exp-card"
).forEach(el => {
    eduObserver.observe(el);
});


const starContainer = document.querySelector(".stars");

for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // random size
    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // random position
    star.style.left = Math.random() * 100 + "vw";

    // random speed
    const duration = Math.random() * 10 + 5;
    star.style.animationDuration = `${duration}s, ${Math.random() * 2 + 1}s`;

    starContainer.appendChild(star);
}

// Star Animation

const stars = document.querySelector(".stars");


for(let i=0;i<100;i++){

    let star=document.createElement("div");

    star.classList.add("star");


    let size=Math.random()*4+1;

    star.style.width=size+"px";
    star.style.height=size+"px";


    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";


    star.style.animationDuration =
    (Math.random()*8+5)+"s";


    star.style.animationDelay =
    Math.random()*5+"s";


    stars.appendChild(star);

}