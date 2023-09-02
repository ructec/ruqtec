const submitBtn = document.querySelector(".submit_btn");
const regBody = document.querySelector(".reg_body");
const regText = document.querySelector(".reg_text");
const regHead = document.querySelector(".reg_head");

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
});
