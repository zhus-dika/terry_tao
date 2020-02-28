
function openNav() {
    document.querySelector(".hidden-menu").style.width = "100%";
    document.querySelector("html").style.overflow = 'hidden';
  }
  
  function closeNav() {
    document.querySelector(".hidden-menu").style.width = "0%";
    document.querySelector("html").style.overflow = 'visible';
  }
  
  function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    overlayElement.addEventListener("click", function(e) {
      if (e.target === overlayElement) {
        closeElement.click();
      }
    });
  
    const containerElement = document.createElement("div");
    containerElement.classList.add("container__overlay");
  
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.innerHTML = content;
  
    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
    closeElement.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.removeChild(overlayElement);
    });
  
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
  
    return overlayElement;
  }
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
/***********************navigation in promo section*************************/
const navItems = document.querySelectorAll('.nav__item'),
sizeNavItems =  navItems.length;
for(let i = 0; i < sizeNavItems; i++) {
  navItems[i].addEventListener('click', e => {
    e.preventDefault();
    if (i == sizeNavItems - 1) i++;
    performTransition(i + 1);
  });
}
/*************************one page scroll***********************/
/*const sections = document.querySelectorAll('section'),
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
});*/
/*************for keyboard**************/
/*window.addEventListener('keydown', e => {
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
});*/
/*************************for phones**************************/
/*import Swiper from 'swiper';
var mySwiper = new Swiper('.wrapper', {
  direction: 'vertical',
  loop: true
 });*/

 /*const navList = document.querySelector(".nav__list"),
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
*/