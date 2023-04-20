let iconPass = document.querySelectorAll(".icon-password");
let eyesIcon = document.querySelectorAll(".icon-password ion-icon");
let inputPass = document.querySelector(".input-pass input");
let inputEmail = document.querySelector(".input-mail input");
let btnSignIn = document.querySelector(".signup-form button");
let errorEmail = document.querySelector(".input-mail span");
let errorPass = document.querySelector(".input-pass span");
let popUp = document.querySelector(".pop-up");
let popUpOverLay = document.querySelector(".pop-up-overlay");
const validateEmail = (email) => {
  const expression =
    /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
  return expression.test(String(email).toLowerCase());
};

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

inputEmail.oninput = (e) => {
  let mail = inputEmail.value;
  let result = validateEmail(mail);
  if (!result) {
    errorEmail.innerHTML = "Email không hợp lệ";
    inputEmail.parentElement.classList.add("error");
  } else {
    errorEmail.innerHTML = "";
    inputEmail.parentElement.classList.remove("error");
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
let user = [];
if (localStorage.getItem("user") != null) {
  user = JSON.parse(localStorage.getItem("user"));
}
let toastList = document.querySelector(".toast-list");
btnSignIn.onclick = (e) => {
  e.preventDefault();
  let mail = inputEmail.value;
  let passWord = inputPass.value;
  if (
    !inputEmail.parentElement.classList.contains("error") &&
    !inputPass.parentElement.parentElement.classList.contains("error")
  ) {
    if (user.length != 0) {
      let result = "";
      user.forEach((item) => {
        if (item.email == mail && item.pass == passWord) {
          result = item;
        }
      });
      console.log(result);
      if (result != "") {
        inputEmail.value = "";
        inputPass.value = "";
        localStorage.setItem("login", JSON.stringify(result));
        setTimeout(() => {
          popUp.classList.add("active");
          popUpOverLay.classList.add("active");
        }, 500);
        setTimeout(() => {
          if (localStorage.getItem("isDetail")) {
            location.href = localStorage.getItem("isDetail");
            localStorage.removeItem("isDetail");
            localStorage.removeItem("previousSignUp");
          } else {
            if (localStorage.getItem("previousSignUp")) {
              let y = location.href.replace("sign-in.html", "index.html");
              location.href = y;
              localStorage.removeItem("previousSignUp");
            } else {
              history.back();
            }
          }
        }, 1500);
      } else {
        e.preventDefault();
        let toastError = document.createElement("div");
        toastError.classList.add("toast-error", "active");
        toastError.innerHTML = `<div class="toast-error-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-error-content">Email hoặc mật khẩu không chính xác</div>
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
      }
    } else {
      e.preventDefault();
      let toastError = document.createElement("div");
      toastError.classList.add("toast-error", "active");
      toastError.innerHTML = `<div class="toast-error-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-error-content">Email hoặc mật khẩu không chính xác</div>
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
    }
  }
};
