/***********************navigation in promo section*************************/
const sections = document.querySelectorAll('section'),
maincontent = document.querySelector('.main-content')
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
    const prevSection = activeSection.previousElementSibling;
    const nextSection = activeSection.nextElementSibling;
    if (direction === 'next' && nextSection) {
      performTransition(num + 1);
    }
    if (direction === 'prev' && prevSection) {
      performTransition(num - 1);
    }
  }
const navItems = document.querySelectorAll('.nav__item'),
sizeNavItems =  navItems.length;
for(let i = 0; i < sizeNavItems; i++) {
  navItems[i].addEventListener('click', e => {
    e.preventDefault();
    if (i == sizeNavItems - 1) i++;
    performTransition(i + 1);
  });
}