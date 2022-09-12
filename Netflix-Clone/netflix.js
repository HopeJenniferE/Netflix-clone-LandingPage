
let question = document.getElementsByClassName("questions");

for (let i = 0; i < accordian.length; i++) {
  question[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("la-plus")) {
      this.childNodes[1].classList.remove("la-plus");
      this.childNodes[1].classList.add("la-times");
    } else {
      this.childNodes[1].classList.remove("la-times");
      this.childNodes[1].classList.add("la-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




