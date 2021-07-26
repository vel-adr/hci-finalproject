element = document.querySelectorAll(".col");
var iconclass = ["hover1", "hover2", "hover3"];

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("mouseenter", function () {
        element[i].classList.add(iconclass[i]);
    })

    element[i].addEventListener("mouseleave", function () {
        element[i].classList.remove(iconclass[i]);
    })
}