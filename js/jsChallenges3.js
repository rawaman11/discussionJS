// Challenge 3
// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert
// document.querySelector("#ch3form").addEventListener("click", function(e) {
    
//         if(document.querySelector('input[name="standing"]:checked') && document.querySelector('input[name="gradDate"]:checked')){
//           return true;
//         } else {
//           // alert("Please select an option for both questions.");
//           // return false;
//           e.preventDefault();
//         }
//     });

document.querySelector("#ch3form").addEventListener("submit", function(e) {
    let date = document.querySelectorAll('input[name="gradDate"]:checked').length;
    let standing = document.querySelectorAll('input[name="standing"]:checked').length;
    if (date === 0 || standing === 0) {
        e.preventDefault();
        alert("Please select an option for both questions");
    }
    else {
        return true;
    }
});
    