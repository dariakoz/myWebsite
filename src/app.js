const menuButton = document.querySelector('#menu-button');
const wrapper = document.querySelector('#wrapper');

const wapperTriggerClass = 'active';
const menuTriggerClass = 'change'
let navigationState = false;


menuButton.addEventListener('click', () => {
    if (navigationState) {
        closeMenu()
    } else {
        openMenu()
    }
});

const openMenu = () => {
    navigationState = true;
    wrapper.classList.add(wapperTriggerClass);
    menuButton.classList.add(menuTriggerClass)
};

const closeMenu = () => {
    navigationState = false;
    wrapper.classList.remove(wapperTriggerClass);
    menuButton.classList.remove(menuTriggerClass)
};






const header = document.querySelector("header");
const sectionTwo = document.querySelector("#work");
const sectionThree = document.querySelector("#contact");

const topMargin = header.offsetHeight;
const bottomMargin = window.innerHeight - header.offsetHeight;

const options = {
  rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
}

const observer = new IntersectionObserver(([entry]) => {
  const color = entry.isIntersecting ? "rgb(95, 0, 0)" : "#fff";
  document.documentElement.style.setProperty('--text', color);
}, options);

observer.observe(sectionTwo);
observer.observe(sectionThree);
