const form = document.querySelector("form");
const emailText = document.getElementById("emailtext");
const emailInput = document.querySelector(".email_input");
const loader = document.querySelector(".loader");
// const submitBtn = document.querySelector(".submit_btn");
const allInputs = [...document.querySelectorAll(".each_input")];
const regBody = document.querySelector(".reg_body");
const regText = document.querySelector(".reg_text");
const regHead = document.querySelector(".reg_head");

const api = "https://ruqtec-backend.vercel.app/api/auth/register";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "block";
  form.style.opacity = ".5";
  const formData = new FormData(form);
  //Convert array returned from formData to object
  const obj = Object.fromEntries(formData);
  console.log(obj);
  //Convert object to JSON
  const formJSON = JSON.stringify(obj);

  const reqOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formJSON,
  };
  // fetch(api, reqOptions)
  //   .then((res) => {
  //     const result = res.json()
  //     console.log({result})
  //       return res.json("<h1>Hello world</h1>");

  //     // if (res.status === 200) {
  //     //   return res.json("<h1>Hello world</h1>");
  //     // } else if (res.status === 422) {
  //     //   return res.json();
  //     // } else {
  //     //   // Handle other HTTP status codes
  //     //   throw new Error("An error occurred");
  //     // }
  //   })
  //   .catch((err) => {
  //     console.log({err})

  //     alert(err);
  //   })
    // .catch((error) => {
    //   // Handle any errors that occurred during the fetch or data processing
    //   console.error(error.message);
    // });

  fetch(api, reqOptions)
    .then((data) => {
      console.log(data);
      if (data == "Age must be a number") {
        console.log("ppp");
        loader.style.display = "none";
        form.style.opacity = "1";
        alert(data);
      }
      if (data.message == "email already exists") {
        loader.style.display = "none";
        form.style.opacity = "1";
        emailText.style.display = "block";
        emailInput.style.border = "1px solid red";
        alert("email already exists");
      } else {
        emailText.style.display = "none";
        emailInput.style.border = "unset";
      }

      if (data.message == "Registration successful") {
        loader.style.display = "none";
        form.style.opacity = "1";
        allInputs.forEach((eachInput) => {
          eachInput.value = "";
        });
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
      }
    })
    .catch((err) => {
      alert(err);
      loader.style.display = "none";
      form.style.opacity = "1";
      console.log("Failed", err);
    });
});

// fetch(api)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
