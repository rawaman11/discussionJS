// Challenge 5: 
// Hover over the images and display both the image and the alt text on top of the image
// Update the html so that you can tab to all of the image
document.querySelector(".thumbnail").addEventListener("mouseover", event => {
    console.log("works!");
    document.querySelector("#display").style.display = document.querySelector(".thumbnail").style.display = "block";


});