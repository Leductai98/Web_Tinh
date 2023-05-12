//user-menu
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
let manageList = document.querySelector(".manage-list");

const renderPaymentList = () => {
  let userLogin = JSON.parse(localStorage.getItem("login"));
  let paymentList = [];
  if (localStorage.getItem("payment") != null) {
    paymentList = JSON.parse(localStorage.getItem("payment"));
  }
  if (paymentList.length >= 1) {
    let result = [];
    paymentList.forEach((item) => {
      if (item.user == userLogin.name) {
        result.push(item);
      }
    });
    if (result.length >= 1) {
      let htmlCode = ``;
      result.forEach((item) => {
        htmlCode += ` <div class="manage-item" data-name="${item.name}">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <a href="${item.link}" class="room-info">
                      <div class="room-picture">
                        <img
                          src="${item.picture}"
                          alt=""
                        />
                      </div>
                      <div class="room-text">
                        <div class="room-name">${item.name}</div>
                        <div class="room-status">${item.status}</div>
                        <div class="room-location">${item.location}</div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-lg-3">
                    <div class="date">
                      <div class="date-header">Thời gian</div>
                      <div class="date-des">${item.date}</div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3">
                    <div class="price">
                      <div class="price-header">Tổng</div>
                      <div class="price-des">${item.price}</div>
                      <div class="price-way">${item.way}</div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-2">
                    <div class="delete">
                      <ion-icon name="trash-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>`;
      });
      manageList.innerHTML = htmlCode;
    } else {
      manageList.innerHTML = `<h5>Chưa có chuyến đi nào</h5>`;
    }
  } else {
    manageList.innerHTML = `<h5>Chưa có chuyến đi nào</h5>`;
  }
};
renderPaymentList();
let deleteList = document.querySelectorAll(".delete ion-icon");
deleteList.forEach((item) => {
  let userLogin = JSON.parse(localStorage.getItem("login"));
  let paymentList = JSON.parse(localStorage.getItem("payment"));
  item.onclick = () => {
    for (let i = 0; i < paymentList.length; i++) {
      if (userLogin.name == paymentList[i].user) {
        if (
          item.parentElement.parentElement.parentElement.parentElement.dataset
            .name == paymentList[i].name
        ) {
          paymentList.splice(i, 1);
          localStorage.setItem("payment", JSON.stringify(paymentList));
        }
      }
    }
    renderPaymentList();
  };
});
