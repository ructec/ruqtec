const accIcon2 = document.querySelectorAll(".acc_icon2");
const accBody2 = document.querySelectorAll(".acc2_body_text");
const aboutAcc2 = document.querySelectorAll(".about_accordion2");
for (let i = 0; i < accIcon2.length; i++) {
  const eachIcon2 = accIcon2[i];
  const eachBody2 = accBody2[i];
  const eachaboutAcc2 = aboutAcc2[i];
  let isOpen;
  eachaboutAcc2.addEventListener("click", () => {
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
