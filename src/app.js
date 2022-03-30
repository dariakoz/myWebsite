
const menuButton = document.querySelector('#menu-button');
const wrapper = document.querySelector('#wrapper');

const triggerClass = 'active';
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
    wrapper.classList.add(triggerClass);
};

const closeMenu = () => {
    navigationState = false;
    wrapper.classList.remove(triggerClass);
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




VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
  });



    
