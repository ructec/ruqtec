const accIcon = document.querySelectorAll(".acc_icon");
const accBody = document.querySelectorAll(".acc1_body");

for (let i = 0; i < accIcon.length; i++) {
  const eachIcon = accIcon[i];
  const eachBody = accBody[i];
  let isOpen;
  eachIcon.addEventListener("click", () => {
    if (isOpen == true) {
      eachBody.classList.toggle("show");
      eachIcon.classList.toggle("rotate");
      isOpen = false;
    } else {
      eachBody.classList.toggle("show");
      eachIcon.classList.toggle("rotate");
      isOpen = true;
    }

    //let's introduce state
  });
}
