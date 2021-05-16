const navToggle = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");


// navToggle.addEventListener("click", function(){
//     if (links.classList.contains("show-links")){
//         links.classList.remove("show-links")
//     } else {
//         links.classList.add("show-links")
//     }
// })
// OR...

navToggle.addEventListener("click", ()=> {
    links.classList.toggle("show-links")
})