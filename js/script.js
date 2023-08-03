
const fname = document.getElementById("name")
const email = document.getElementById("email")
const interest = document.getElementById("interest")
const submit = document.getElementById("submit")

submit.addEventListener("click", function(event) {
    event.preventDefault()
    if (fname.value == "" || email.value == ""){
        alert("Please fill the form")
    }
}
)

// slider image
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}


    
