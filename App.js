const sections = document.querySelectorAll("section");
const Cards = document.querySelectorAll(".cardBox .card ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight /3) {
      current = section.getAttribute("id");
    }
  });
console.log(current)
  Cards.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

function show(anything){
  document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.inputBoxL');
  dropdown.onclick = function(){
  dropdown.classList.toggle('active');
}