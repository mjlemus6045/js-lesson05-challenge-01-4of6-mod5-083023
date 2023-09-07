var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
//console.log(button);
//console.log(button);
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
   }  else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
   }
});
