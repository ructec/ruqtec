const submitBtn = document.querySelector(".submit_btn");
const form = document.querySelector("form");
// const regBody = document.querySelector(".reg_body");
// const regText = document.querySelector(".reg_text");
// const regHead = document.querySelector(".reg_head");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   regBody.innerHTML = `<div class="success_cont">
//       <div class="success_wrapper">
//         <div class="success_text_wrap">
//           <p class="success_text">Congratulations</p>
//         </div>
//         <div class="success_msg">
//           <p>Your form has been submitted</p>
//           <p>We’ve sent you a mail to know what’s next.</p>
//         </div>
//       </div>
//     </div>`;
//   regBody.style.height = "400px";
//   regText.style.color = "#EDEDED";
//   regHead.style.backgroundColor = "unset";
// });

const allInputs = [...document.querySelectorAll(".each_input")];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const api = "https://ruqtec-backend.vercel.app/api/auth/register";
  const reqOptions = {
    method: "POST",
    body: formData,
  };
  fetch(api, reqOptions)
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Failed", err);
    });
  // allInputs.forEach((eachInput) => {
  //   const eachInputValue = eachInput.value;
  //   console.log(eachInputValue);
  // });
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const address = formData.get("course");
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(phoneNumber);
  console.log(address);
});
