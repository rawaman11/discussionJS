document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("works!");
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    }
    else{
        document.querySelector("#emailDiv").style.display = "none";
    }
    
});
document.querySelector("body").addEventListener("click", function() {
    // If the visitor clicks anywhere on the page an alert button should pop up with the current time.
    alert(new Date());
}
)