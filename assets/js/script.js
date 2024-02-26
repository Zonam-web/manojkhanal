
let outer= document.getElementById("outer"),
// let outer= document.querySelector(".outer"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue= 0,
    progressEndValue= 95,
    speed= 40;

    let progress= setInterval( () => {
        progressStartValue++;
        // progressValue.textContent = '${progressStartValue}%';
        progressValue.textContent = `${progressStartValue}%`
        outer.style.background =  `conic-gradient(#9f0092 ${progressStartValue * 3.6}deg, white 0deg)`
        if(progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        // console.log(progressStartValue);
    }, speed );


// on scroll animation 
let text= document.getElementById('eagle');
let img= document.getElementById('contents');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    eagle.style.bottom= value * 30+ 'px';
    eagle.style.left = value * 0 + 'px';
})


// Navigation menu 
let burgerMenu= document.getElementById("mobile-menu");
let closeNav = document.querySelector(".mobile-nav");

// document.getElementById("mobile-menu").onclick = function () {
//     openNav(this);
// }

// function openNav (x) {
//     x.classList.toggle("change");
// }

let mobileNavList= document.querySelector(".mobile-nav");
// let menuOverlay = document.querySelector(".menu-overlay");
let mobileMenu = document.querySelector(".burger-menu");
let menuOpen = document.querySelector("body");
mobileNavList.addEventListener("click", () => {
    mobileNavList.classList.toggle("is-opened");
})

mobileNavList.addEventListener("click", () => {
    menuOpen.classList.toggle("menu-open");
    mobileMenu.classList.toggle("change");
    
})




// show and hide nav bar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-contents").style.top = "0px";
    document.getElementById("nav-contents").style.left = "0px";
    // document.getElementById("nav-contents").style.transition = "1s";
    document.getElementById("nav-contents").style.position = "absolute";
    document.getElementById("nav-contents").style.alignItems = "center";
    document.getElementById("nav-contents").style.background = "black";
    document.querySelector(".profile-img").style.height= "60px";
    document.querySelector(".profile-img").style.width= "60px";
    document.getElementById("nav-contents").style.paddingTop = "15px";
    document.getElementById("nav-contents").style.paddingBottom = "15px";
    document.querySelector(".profile-img").style.display= "block";
  } else {
    // document.getElementById("nav-contents").style.top = "-50px";
    document.getElementById("nav-contents").style.position = "fixed";
    document.getElementById("nav-contents").style.left = "0";
     document.getElementById("nav-contents").style.margin = "0px";
    document.getElementById("nav-contents").style.top = "0px";
    document.querySelector(".profile-img").style.height= "70px";
    document.querySelector(".profile-img").style.width= "70px";
    document.getElementById("nav-contents").style.paddingTop = "15px";
    document.getElementById("nav-contents").style.paddingBottom = "15px";
    // document.getElementById("nav-contents").style.background = "#f5ece6";

  }
  prevScrollpos = currentScrollPos;
}



// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
