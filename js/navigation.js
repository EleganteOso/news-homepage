const menu = document.querySelector(".navigation");
const opennavigationBtn = document.querySelector(".open-navigation");
const closenavigationBtn = document.querySelector(".close-navigation");

function togglenavigation() {
  navigation.classList.toggle("navigation_opened");
}

opennavigationBtn.addEventListener("click", togglenavigation);
closenavigationBtn.addEventListener("click", togglenavigation);

const navigationLinks = document.querySelectorAll('.navigation a[href^="#"]');

navigationLinks.forEach(navigationLink =>{
  navigationLink.addEventListener("click", function(){
    navigation.classList.remove("navigation_opened");
  })

})