let user = document.getElementsByClassName("user")[0];
let userOverLay = document.querySelector(".user__overlay");
let userMenu = document.getElementsByClassName("user__menu")[0];

user.onclick = () => {
  user.classList.toggle("active");
  userMenu.classList.toggle("user__display-flex");
  userOverLay.classList.toggle("user__display-block");
};
window.onclick = (e) => {
  if (e.target == userOverLay) {
    user.classList.remove("active");
    userMenu.classList.remove("user__display-flex");
    userOverLay.classList.remove("user__display-block");
  }
};
let userLogin = JSON.parse(localStorage.getItem("login"));
let paymentList = [];
if (localStorage.getItem("payment") != null) {
  paymentList = JSON.parse(localStorage.getItem("payment"));
}
let userList = JSON.parse(localStorage.getItem("user"));

let favoriteList = [];
if (localStorage.getItem("favorite") != null) {
  favoriteList = JSON.parse(localStorage.getItem("favorite"));
}

let nameWrap = document.querySelector(".name-wrap");
let userEmail = document.querySelector(".user-email");
const renderUser = () => {
  let userLogin = JSON.parse(localStorage.getItem("login"));
  nameWrap.innerHTML = `  <div class="user-name">
                        <div class="name-des">
                          <div class="name-header">Tên người dùng</div>
                          <div class="name-text">${userLogin.name}</div>
                        </div>
                        <div class="name-edit">Chỉnh sửa</div>
                      </div>
                      <div class="user-name-edit">
                        <div class="name-des">
                          <div class="name-header">Tên người dùng</div>
                          <input type="text" id="name-input" value="${userLogin.name}" />
                        </div>
                        <div class="name-edit">Lưu</div>
                      </div>`;
  userEmail.innerHTML = `  <div class="email-header">Địa chỉ email</div>
<div class="email-text">${userLogin.email}</div>`;

  let btnEditName = document.getElementsByClassName("name-edit");
  let userName = document.querySelector(".user-name");
  let userNameEdit = document.querySelector(".user-name-edit");
  let inputName = document.querySelector("#name-input");

  btnEditName[0].onclick = () => {
    let userLogin = JSON.parse(localStorage.getItem("login"));
    userName.classList.add("disabled");
    userNameEdit.classList.add("active");
    inputName.value = userLogin.name;
  };
  btnEditName[1].onclick = () => {
    let userLogin = JSON.parse(localStorage.getItem("login"));
    let paymentList = [];
    if (localStorage.getItem("payment") != null) {
      paymentList = JSON.parse(localStorage.getItem("payment"));
    }
    let userList = JSON.parse(localStorage.getItem("user"));
    let roomOder = [];
    if (localStorage.getItem("roomOder") != null) {
      roomOder = JSON.parse(localStorage.getItem("roomOder"));
    }
    let favoriteList = [];
    if (localStorage.getItem("favorite") != null) {
      favoriteList = JSON.parse(localStorage.getItem("favorite"));
    }
    let result = inputName.value;
    let result2 = userLogin.name;
    userName.classList.remove("disabled");
    userNameEdit.classList.remove("active");
    userLogin.name = result;
    localStorage.setItem("login", JSON.stringify(userLogin));
    paymentList.forEach((item) => {
      if (item.user == result2) {
        item.user = result;
      }
    });
    localStorage.setItem("payment", JSON.stringify(paymentList));
    userList.forEach((item) => {
      if (item.name == result2) {
        item.name = result;
      }
    });
    localStorage.setItem("user", JSON.stringify(userList));
    favoriteList.forEach((item) => {
      if (item.user == result2) {
        item.user = result;
      }
    });
    localStorage.setItem("favorite", JSON.stringify(favoriteList));
    renderUser();
  };
};
renderUser();

let btnEditPass = document.querySelectorAll(".password-edit");
let oldPass = document.querySelector("#oldpass-input");
let newPass = document.querySelector("#newpass-input");
let userPassword = document.querySelector(".user-password");
let userPasswordEdit = document.querySelector(".password-edit-wrap");
let errorOldPass = document.querySelector(".error-oldpass");
let errorNewPass = document.querySelector(".error-newpass");
btnEditPass[0].onclick = () => {
  userPassword.classList.add("disabled");
  userPasswordEdit.classList.add("active");
};

btnEditPass[1].onclick = () => {
  let userLogin = JSON.parse(localStorage.getItem("login"));
  let result1 = oldPass.value;
  let result2 = newPass.value;
  let result3 = userLogin.pass;
  let result4 = userLogin.email;
  if (result1 != result3) {
    errorOldPass.innerHTML = "Mật khẩu không đúng";
    oldPass.classList.add("error");
  } else {
    errorOldPass.innerHTML = "";
    oldPass.classList.remove("error");
    if (result2.length < 6) {
      errorNewPass.innerHTML = "Tối thiểu 6 ký tự";
      newPass.classList.add("error");
    } else {
      userPassword.classList.remove("disabled");
      userPasswordEdit.classList.remove("active");
      userLogin.pass = result2;
      localStorage.setItem("login", JSON.stringify(userLogin));
      let userList = JSON.parse(localStorage.getItem("user"));
      userList.forEach((item) => {
        if (item.email == result4) {
          item.pass = result2;
        }
      });
      localStorage.setItem("user", JSON.stringify(userList));
    }
  }
};
btnEditPass[2].onclick = () => {
  userPassword.classList.remove("disabled");
  userPasswordEdit.classList.remove("active");
};
