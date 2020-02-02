import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/papers";
import "./scripts/quotes";
import "./scripts/parallax";



/*************************one page scroll***********************/
const sections = document.querySelectorAll('section'),
maincontent = document.querySelector('.main-content'),
innerWrapper = document.querySelector('.inner-wrapper');
var MobileDetect = require('mobile-detect'),
md = new MobileDetect(
  'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
  ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
  ' Version/4.0 Mobile Safari/534.30'),
isMobile = md.mobile();
let inScroll = false;
const performTransition = sectionEq => {
  const transitionIsOver = 1000,
  mouseInertion = 300;
  if (!inScroll) {
    inScroll = true;
    const position = sectionEq * -100;
    sections.forEach(ele => {
      if (ele.classList.contains('active')) {
        ele.classList.remove('active');
      }
    });
    sections[sectionEq].classList.add('active');
    maincontent.style.transform = `translateY(${position}%)`;
  }
  setTimeout(() => {
    inScroll = false;
  }, transitionIsOver + mouseInertion);
}
const scrollToSection = direction => {
  let activeSection, i = 0, num;
  sections.forEach(ele => {
    if (ele.classList.contains('active')) {
      activeSection = ele;
      num = i;
    }
    i++;
  });
  let prevSection = activeSection.previousElementSibling;
  let nextSection = activeSection.nextElementSibling;
  if (activeSection === sections[sections.length - 2]) {
    prevSection = sections[sections.length - 3];
  } 
  if (nextSection === innerWrapper) {
    nextSection = sections[sections.length - 1];
  }
  if (direction === 'next' && nextSection) {
    performTransition(num + 1);
  }
  if (direction === 'prev' && prevSection) {
    performTransition(num - 1);
  }
}
window.addEventListener('wheel', e => {
  const deltaY = e.deltaY;
  if (deltaY > 0) {
    scrollToSection('next');
  }
  if (deltaY < 0) {
    scrollToSection('prev');
  }
});
/*************for keyboard**************/
window.addEventListener('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  if (tagName != 'input' && tagName != 'textarea') {
    switch (e.key){
      case 'ArrowDown': {
        scrollToSection('next');
        break;
      }
      case 'ArrowUp': {
        scrollToSection('prev');
        break;
      }
    }
  }
});
/*************************for phones**************************/
/*import Swiper from 'swiper';
var mySwiper = new Swiper('.wrapper', {
  direction: 'vertical',
  loop: true
 });*/

 const navList = document.querySelector(".nav__list"),
 hamburgerMenu = document.querySelector(".hamburger-menu-link");
 var boo = 'false';
 hamburgerMenu.addEventListener('click', e => {
     e.preventDefault();
     e.stopPropagation();
     if (boo == 'false') {
         navList.style.display = 'flex';
         boo = 'true';
     }
     else {
         navList.style.display = 'none';
         boo = 'false';
     }
 });