let inputEmail = document.querySelector(".input-mail input");
let inputPass = document.querySelector(".input-pass input");
let inputPassAgain = document.querySelector(".input-pass-again input");
let errorEmail = document.querySelector(".input-mail span");
let errorPass = document.querySelector(".input-pass span");
let errorPassAgain = document.querySelector(".input-pass-again span");
let iconPass = document.querySelectorAll(".icon-password");
let eyesIcon = document.querySelectorAll(".icon-password ion-icon");
let btnSignUp = document.querySelector(".signup-form button");
iconPass[0].onclick = () => {
  eyesIcon[0].classList.remove("active");
  eyesIcon[1].classList.remove("active");
  if (inputPass.type === "text") {
    eyesIcon[1].classList.add("active");
    inputPass.type = "password";
  } else if (inputPass.type === "password") {
    eyesIcon[0].classList.add("active");
    inputPass.type = "text";
  }
};
iconPass[1].onclick = () => {
  eyesIcon[2].classList.remove("active");
  eyesIcon[3].classList.remove("active");
  if (inputPassAgain.type === "text") {
    eyesIcon[3].classList.add("active");
    inputPassAgain.type = "password";
  } else if (inputPassAgain.type === "password") {
    eyesIcon[2].classList.add("active");
    inputPassAgain.type = "text";
  }
};
inputEmail.oninput = (e) => {
  let mail = inputEmail.value;
  let result = validateEmail(mail);
  if (!result) {
    errorEmail.innerHTML = "Email không hợp lệ";
    inputEmail.parentElement.classList.add("error");
  } else {
    if (user != null) {
      if (
        user.every((item) => {
          return item.email !== mail;
        })
      ) {
        errorEmail.innerHTML = "";
        inputEmail.parentElement.classList.remove("error");
      } else {
        errorEmail.innerHTML = "Email đã tồn tại";
        inputEmail.parentElement.classList.add("error");
      }
    } else {
      errorEmail.innerHTML = "";
      inputEmail.parentElement.classList.remove("error");
    }
  }
};

inputPass.oninput = () => {
  let pass = inputPass.value;
  if (pass.length < 6) {
    inputPass.parentElement.parentElement.classList.add("error");
    errorPass.innerHTML = "Mật khẩu không hợp lệ";
  } else {
    inputPass.parentElement.parentElement.classList.remove("error");
    errorPass.innerHTML = "";
  }
};
inputPassAgain.oninput = () => {
  let pass = inputPass.value;
  let passAgain = inputPassAgain.value;
  if (passAgain !== pass) {
    inputPassAgain.parentElement.parentElement.classList.add("error");
    errorPassAgain.innerHTML = "Mật khẩu không trùng khớp";
  } else {
    inputPassAgain.parentElement.parentElement.classList.remove("error");
    errorPassAgain.innerHTML = "";
  }
};

const validateEmail = (email) => {
  const expression =
    /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
  return expression.test(String(email).toLowerCase());
};
let user = [];
if (JSON.parse(localStorage.getItem("user")) != null) {
  let user = JSON.parse(localStorage.getItem("user"));
}
let popUp = document.querySelector(".pop-up");
let popUpOverLay = document.querySelector(".pop-up-overlay");
btnSignUp.onclick = (e) => {
  e.preventDefault();
  if (
    !inputEmail.parentElement.classList.contains("error") &&
    !inputPass.parentElement.parentElement.classList.contains("error") &&
    !inputPassAgain.parentElement.parentElement.classList.contains("error")
  ) {
    let valueEmail = inputEmail.value;
    let valuePass = inputPass.value;

    let result = {
      email: valueEmail,
      pass: valuePass,
      name: `Người dùng ${Math.floor(Math.random() * 10000)}`,
    };
    user.push(result);
    localStorage.setItem("user", JSON.stringify(user));
    inputEmail.value = "";
    inputPass.value = "";
    inputPassAgain.value = "";
    setTimeout(() => {
      popUp.classList.add("active");
      popUpOverLay.classList.add("active");
    }, 500);
    setTimeout(() => {
      popUp.classList.remove("active");
      popUpOverLay.classList.remove("active");
    }, 1500);
  }
};

// ngăn đăng nhập nếu đã đăng nhập mà chưa đăng xuất
let btnSignIn = document.querySelector(".acount-btn");
let toastList = document.querySelector(".toast-list");
let userLogin = [];
if (localStorage.getItem("login") != null) {
  userLogin = JSON.parse(localStorage.getItem("login"));
}
console.log(localStorage.getItem("login"));
console.log("userLogin", userLogin);
console.log(btnSignIn);
btnSignIn.onclick = (e) => {
  if (userLogin.length != 0) {
    e.preventDefault();
    let toastError = document.createElement("div");
    toastError.classList.add("toast-error", "active");
    toastError.innerHTML = `<div class="toast-error-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-error-content">Bạn đang đăng nhập rồi</div>
        <div class="toast-error-close" onclick= >
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
    toastList.appendChild(toastError);
    let btnCloseError = document.querySelector(".toast-error-close");
    btnCloseError.onclick = () => {
      toastList.removeChild(toastError);
      clearTimeout(closeError);
    };
    let closeError = setTimeout(() => {
      toastList.removeChild(toastError);
    }, 2000);
  } else {
    localStorage.setItem("previousSignUp", true);
  }
};
