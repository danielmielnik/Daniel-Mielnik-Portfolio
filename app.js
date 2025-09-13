const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

let slideIndices = {};
              
function plusSlides(n, reelId) {
  showSlides(slideIndices[reelId] += n, reelId);
}

function showSlides(n, reelId) {
  let slides = document.querySelectorAll(`#${reelId} .mySlides`);
  if (!slideIndices[reelId]) slideIndices[reelId] = 1;
  if (n > slides.length) { slideIndices[reelId] = 1; }
  if (n < 1) { slideIndices[reelId] = slides.length; }
  
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndices[reelId] - 1) ? "block" : "none";
  });
}

// Initialize slide indices
document.querySelectorAll('.image-reel').forEach(reel => {
  slideIndices[reel.id] = 1;
  showSlides(1, reel.id);
});

function openSkill(evt, skillName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(skillName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();