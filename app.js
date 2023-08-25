const accIcon = document.querySelectorAll(".acc_icon");
const accBody = document.querySelectorAll(".acc1_body");
const accIcon2 = document.querySelectorAll(".acc_icon2");
const accBody2 = document.querySelectorAll(".acc2_body_text");

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
for (let i = 0; i < accIcon2.length; i++) {
  const eachIcon2 = accIcon2[i];
  const eachBody2 = accBody2[i];
  let isOpen;
  eachIcon2.addEventListener("click", () => {
    if (isOpen == true) {
      eachBody2.classList.toggle("show2");
      eachIcon2.classList.remove("fa-xmark");
      eachIcon2.classList.add("fa-plus");
      isOpen = false;
    } else {
      eachBody2.classList.toggle("show2");
      eachIcon2.classList.remove("fa-plus");
      eachIcon2.classList.add("fa-xmark");
      isOpen = true;
    }
  });
}
