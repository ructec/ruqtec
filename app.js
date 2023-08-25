const accIcon = document.querySelectorAll(".acc_icon");
const accBody = document.querySelectorAll(".acc1_body");
const accIcon2 = document.querySelectorAll(".acc_icon2");
const accBody2 = document.querySelectorAll(".acc2_body_text");
const submitBtn = document.querySelector(".submit_btn");
const regBody = document.querySelector(".reg_body");
const regText = document.querySelector(".reg_text");
const regHead = document.querySelector(".reg_head");

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  regBody.innerHTML = `<div class="success_cont">
      <div class="success_wrapper">
        <div class="success_text_wrap">
          <p class="success_text">Congratulations</p>
        </div>
        <div class="success_msg">
          <p>Your form has been submitted</p>
          <p>We’ve sent you a mail to know what’s next.</p>
        </div>
      </div>
    </div>`;
  regBody.style.height = "400px";
  regText.style.color = "#EDEDED";
  regHead.style.backgroundColor = "unset";
  //   registerDiv.classList.toggle("format");
});
