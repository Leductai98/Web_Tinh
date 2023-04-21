let userLogin = [];
if (localStorage.getItem("login") != null) {
  userLogin = JSON.parse(localStorage.getItem("login"));
}
let user = document.getElementsByClassName("user")[0];
let userOverLay = document.querySelector(".user__overlay");
let userMenu = document.getElementsByClassName("user__menu")[0];
let userMenuMobile = document.querySelector(".menu");
const renderUserMenu = () => {
  if (userLogin.length != 0) {
    userMenu.innerHTML = `
                <a
                  href="./user_info.html"
                  style="color: inherit;font-weight:500; text-decoration: none"
                  class="user__menu-login"
                  >Tài khoản</a
                >
                  <a href="./manage.html" class="user__menu-become-host" style="color: inherit; text-decoration: none">
                  Chuyến đi
                </a>
                <a
                  href="./favorite.html"
                  style="color: inherit; text-decoration: none"
                  class="user__menu-signup"
                  >Danh sách yêu thích</a
                >
                     <a
                  href="./help.html"
                  style="color: inherit; text-decoration: none"
                  class="user__menu-help"
                  >Trợ giúp</a
                >
                <div class="user__menu-become-host">
                  Đăng xuất
                </div>
           
              `;
    let btnSignOut = document.querySelectorAll(".user__menu-become-host")[1];
    btnSignOut.onclick = () => {
      localStorage.removeItem("login");
      let x = location.href.split("/");
      x.splice(x.length - 1, 1, "index.html");
      let y = x.join("/");
      location.href = y;
    };

    userMenuMobile.innerHTML = `<label class="close-mobile-menu" for="mobile-menu"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </label>
              <div class="avatar">
                <img src="./img/Frame (7).png" alt="" />
                <p>${userLogin.name}</p>
              </div>
              <ul class="menu-list">
                <li>
                  <a href="./user_info.html" class="menu-item">Tài khoản</a>
                </li>
                <li>
                  <a href="./manage.html" class="menu-item end-user"
                    >Chuyến đi</a
                  >
                </li>
                  <li>
                  <a href="./favorite.html" class="menu-item end-user"
                    >Danh sách yêu thích</a
                  >
                </li>
                <li>
                  <a class="menu-item" style="cursor: default"
                    >Trở thành chủ nhà</a
                  >
                </li>
                <li class="menu-item-languages">
                  Ngôn ngữ: <span>Tiếng Việt</span>
                </li>
                <li><a href="./help.html" class="menu-item">Trợ giúp</a></li>
                 <li class="menu-item" style="cursor:pointer">Đăng xuất</li>
              </ul>
            `;
    let btnSignOutMobile = document.querySelectorAll(".menu-item")[5];
    btnSignOutMobile.onclick = () => {
      localStorage.removeItem("login");
      let x = location.href.split("/");
      x.splice(x.length - 1, 1, "index.html");
      let y = x.join("/");
      location.href = y;
    };
  }
};
renderUserMenu();

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
                          <input type="text" id="name-input" value="${userLogin.name}" autocomplete="off" /> 
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
