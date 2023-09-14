fetch("../header.html")
  .then((response) => response.text())
  .then((content) => {
    document.getElementById("bigMenuWrapper").innerHTML = content;
    //use hamburger after fetching
    const hamburger = document.querySelector(".ham");
    const menuDropdown = document.querySelector(".menu_dropdown_cont");

    let isOut;
    hamburger.addEventListener("click", () => {
      menuDropdown.classList.toggle("drop");
      if (isOut == true) {
        hamburger.classList.remove("fa-xmark");
        hamburger.classList.add("fa-bars");
        isOut = false;
      } else {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-xmark");
        isOut = true;
      }
    });
    const gg = document.querySelector(".header_list");
    const hg = document.querySelector(".course_list2");
    hg.addEventListener("click", () => {
      gg.classList.toggle("block");
    });
  });
