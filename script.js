// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}




// scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*='${id}']`)
        .classList.add("active");
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 100);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay :200
});

ScrollReveal().reveal('.home-content, .heading, .portfolio-layer-2',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services, .portfolio-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});


// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Arduino Developer", "Student"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


