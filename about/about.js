const accIcon = document.querySelectorAll(".acc_icon");
const accBody = document.querySelectorAll(".acc1_body");
const accHead = document.querySelectorAll(".acc1_head");

for (let i = 0; i < accIcon.length; i++) {
  const eachIcon = accIcon[i];
  const eachBody = accBody[i];
  const eachHead = accHead[i];
  let isOpen;
  eachHead.addEventListener("click", () => {
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
