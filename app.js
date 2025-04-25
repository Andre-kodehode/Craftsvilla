
const newsletterBtn = document.querySelector("#newsletter a");



const popup = document.createElement('div')
popup.id = "newsletterPopup";
popup.classList.add("popup", "hidden")

const popupContent = document.createElement('div')
popupContent.classList.add('popup-content')

const popupSpan = document.createElement('span')
popupSpan.classList.add("close-btn")
popupSpan.innerHTML = "&times;"

const popupHeader = document.createElement('h2')

popupHeader.textContent = "Subscribe to our Newsletter!"

const popupInput = document.createElement('input')

popupInput.type = 'email';

popupInput.placeholder = 'Enter your email';

const popupButton = document.createElement('button')
popupButton.classList.add('button')
popupButton.textContent = "Subscribe";

popupContent.append(popupSpan)
popupContent.append(popupHeader)
popupContent.append(popupInput)
popupContent.append(popupButton)
popup.append(popupContent)

document.body.appendChild(popup)

newsletterBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("hidden");
  });
  
  popupSpan.addEventListener("click", function () {
    popup.classList.add("hidden");
  });
  
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });



  function updateImagesForTheme(theme) {
    document.querySelectorAll(".mode-img").forEach(img => {
      img.src = img.dataset[theme];
    });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("default");
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      body.classList.add("dark");
      updateImagesForTheme("dark");
    } else {
      updateImagesForTheme("light");
    }
  });
  
  document.getElementById("lightMode").addEventListener("click", () => {
    const body = document.getElementById("default");
    body.classList.toggle("dark");
  
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    updateImagesForTheme(currentTheme);
  });
  
  
  