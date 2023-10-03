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
    const headerList = document.querySelector(".header_list");
    const courseList2 = document.querySelector(".course_list2");
    courseList2.addEventListener("click", () => {
      headerList.classList.toggle("block");
    });

    // JavaScript to handle touch events for mobile
    // document
    //   .querySelector(".tooltip")
    //   .addEventListener("touchstart", function (e) {
    //     e.preventDefault(); // Prevent default touch event behavior
    //     var tooltip = this.querySelector(".tooltiptext");
    //     tooltip.style.visibility =
    //       tooltip.style.visibility === "visible" ? "hidden" : "visible";
    //   });
  });

  // header.js file
// fetch("../header.html")
// .then((response) => response.text())
// .then((content) => {
//   document.getElementById("bigMenuWrapper").innerHTML = content;

//   // Select the necessary elements
//   const courseList2 = document.querySelector(".course_list2");
//   const headerList = document.querySelector(".header_list");

//   // Add event listener to show/hide the course dropdown on hover
//   courseList2.addEventListener("mouseenter", () => {
//     headerList.classList.add("block");
//   });

//   // Optional: Add an event listener to hide the course dropdown if needed
//   courseList2.addEventListener("mouseleave", () => {
//     headerList.classList.remove("block");
//   });

// });
