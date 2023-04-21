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
//calendar
let today = new Date().toISOString().slice(0, 10);
let roomInfo = JSON.parse(localStorage.getItem("roomOrder"));
flatpickr("#date", {
  mode: "range",
  allowInput: true,
  showMonths: 1,
  minDate:
    Date.parse(roomInfo.validDayStart) >= Date.parse(today)
      ? roomInfo.validDayStart
      : today,
  enable: [
    {
      from: roomInfo.validDayStart,
      to: roomInfo.validDayEnd,
    },
  ],
});

//guest-menu
let guestOverLay = document.querySelector(".guest-menu-overlay");

let maxGuestNum = 7;
let reduceBtn = document.querySelectorAll(".item-right-reduce");
let increaseBtn = document.querySelectorAll(".item-right-increase");
let quantity = document.querySelectorAll(".item-right-quantity");
let guestAdultChild = document.querySelector(".guest-adult-child");
let guestBaby = document.querySelector(".guest-baby");
let guestPet = document.querySelector(".guest-pet");

Array.from(increaseBtn).forEach((item) => {
  item.onclick = () => {
    for (let i = 0; i < quantity.length; i++) {
      if (item.dataset.type == quantity[i].dataset.type) {
        let max = quantity[i].dataset.max;
        let text = quantity[i].innerHTML;
        let count = Number(text);
        let adultNumberOne =
          parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText) + 1;

        if (item.dataset.type == "adult" || item.dataset.type == "child") {
          if (adultNumberOne > maxGuestNum) {
            return;
          }
        }
        if (count == max) return;
        else {
          count++;
          if (item.dataset.type == "baby" || item.dataset.type == "pet") {
            if (count == max) {
              item.classList.add("disabled");
            }
          } else {
            if (count == max || adultNumberOne == maxGuestNum) {
              increaseBtn[0].classList.add("disabled");
              increaseBtn[1].classList.add("disabled");
            }
          }
          quantity[i].innerHTML = count;
        }
        if (item.dataset.type == "baby") {
          if (count > 0) {
            guestBaby.classList.add("active");
            guestBaby.innerHTML = ", " + count + " em bé";
          }
        } else if (item.dataset.type == "pet") {
          if (count > 0) {
            guestPet.classList.add("active");
            guestPet.innerHTML = ", " + count + " thú cưng";
          }
        } else if (item.dataset.type == "adult") {
          let adultNumber =
            parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);

          guestAdultChild.innerHTML = adultNumber + " khách";
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);

            guestAdultChild.innerHTML = adultNumber + " khách";
          }
        }
      }
    }
    Array.from(quantity).forEach((item1) => {
      if (item1.dataset.type != "adult") {
        let text = parseInt(item1.innerHTML);
        if (text > 0) {
          reduceBtn.forEach((btn) => {
            if (btn.dataset.type == item1.dataset.type) {
              btn.classList.add("active");
            }
          });
        }
      } else {
        let text = parseInt(item1.innerHTML);
        if (text > 1) {
          reduceBtn.forEach((btn) => {
            if (btn.dataset.type == item1.dataset.type) {
              btn.classList.add("active");
            }
          });
        }
      }
    });
  };
});
Array.from(reduceBtn).forEach((item) => {
  item.onclick = (e) => {
    for (let i = 0; i < quantity.length; i++) {
      if (item.dataset.type == quantity[i].dataset.type) {
        let max = quantity[i].dataset.max;
        let text = quantity[i].innerHTML;
        let count = parseInt(text);
        let adultNumberOne =
          parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText) - 1;
        if (item.dataset.type == "adult" || item.dataset.type == "child") {
          if (adultNumberOne < maxGuestNum) {
            increaseBtn[0].classList.remove("disabled");
            increaseBtn[1].classList.remove("disabled");
          }
        }
        if (item.dataset.type != "adult") {
          if (count == 0) return;
          else {
            count--;
            if (count < max && count > 0) {
              Array.from(increaseBtn).forEach((increase) => {
                if (increase.dataset.type == quantity[i].dataset.type) {
                  increase.classList.remove("disabled");
                }
              });
            }
            if (count == 0) {
              item.classList.remove("active");
              count = 0;
            }
            quantity[i].innerHTML = count;
          }
        } else if (item.dataset.type == "adult") {
          if (count == 1) return;
          else {
            count--;
            if (count < max && count > 1) {
              Array.from(increaseBtn).forEach((increase) => {
                if (increase.dataset.type == quantity[i].dataset.type) {
                  increase.classList.remove("disabled");
                }
              });
            }
            if (count == 1) {
              item.classList.remove("active");
            }
            quantity[i].innerHTML = count;
          }
        }
        if (item.dataset.type == "baby") {
          if (count > 0) {
            guestBaby.classList.add("active");
            guestBaby.innerHTML = ", " + count + " em bé";
          } else {
            guestBaby.classList.remove("active");
          }
        } else if (item.dataset.type == "pet") {
          if (count > 0) {
            guestPet.classList.add("active");
            guestPet.innerHTML = ", " + count + " thú cưng";
          } else {
            guestPet.classList.remove("active");
          }
        } else if (item.dataset.type == "adult") {
          if (count > 1) {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);

            guestAdultChild.innerHTML = adultNumber + " " + " khách";
          } else {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerText = adultNumber + " " + "khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerHTML = adultNumber + " " + " khách";
          } else {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerText = adultNumber + " " + "khách";
          }
        }
      }
    }
  };
});

let idRoom = roomInfo.infoId;

//input-date
let inputStartEnd = document.querySelector("#date");
let inputText = document.querySelector(".item-des");

inputStartEnd.value = roomInfo.infoDate;
guestAdultChild.innerHTML = `${
  Number(roomInfo.infoAdult) + Number(roomInfo.infoChild)
} khách`;
maxGuestNum = Number(roomInfo.infoMaxGuest);
let adultChild = Number(roomInfo.infoAdult) + Number(roomInfo.infoChild);
if (Number(roomInfo.infoAdult) > 1) {
  reduceBtn[0].classList.add("active");
}
if (Number(roomInfo.infoChild) > 0) {
  reduceBtn[1].classList.add("active");
}
if (adultChild == maxGuestNum) {
  increaseBtn[0].classList.add("disabled");
  increaseBtn[1].classList.add("disabled");
}
if (Number(roomInfo.infoBaby) > 0) {
  reduceBtn[2].classList.add("active");
}
if (Number(roomInfo.infoBaby) == Number(roomInfo.infoMaxBaby)) {
  increaseBtn[2].classList.add("disabled");
}
if (Number(roomInfo.infoPet) > 0) {
  reduceBtn[3].classList.add("active");
}
if (Number(roomInfo.infoPet) == Number(roomInfo.infoMaxPet)) {
  increaseBtn[3].classList.add("disabled");
}
quantity[0].innerHTML = roomInfo.infoAdult;
quantity[1].innerHTML = roomInfo.infoChild;
quantity[2].innerHTML = roomInfo.infoBaby;
quantity[3].innerHTML = roomInfo.infoPet;
quantity[0].dataset.max = roomInfo.infoMaxGuest;
quantity[1].dataset.max = roomInfo.infoMaxGuest;
quantity[2].dataset.max = roomInfo.infoMaxBaby;
quantity[3].dataset.max = roomInfo.infoMaxPet;
if (Number(roomInfo.infoBaby) >= 1) {
  guestBaby.style.display = "inline-block";
  guestBaby.innerHTML = `, ${roomInfo.infoBaby} em bé`;
}
if (Number(roomInfo.infoPet) >= 1) {
  guestPet.style.display = "inline-block";
  guestPet.innerHTML = `, ${roomInfo.infoPet} thú cưng`;
}
let time = ``;
let result = inputStartEnd.value.split(" ");
result.splice(1, 1, "đến");
inputText.innerHTML = result.join(" ");
time = result.join(" ");
//info-menu
const urlRoomInfo = `https://api-sandy-zeta.vercel.app/room-list?id=${idRoom}`;
const urlRoomInfoPicture = `https://api-sandy-zeta.vercel.app`;
let infoMenuRoom = document.querySelector(".room-info");
let infoMenuCost = document.querySelector(".cost-info");
let pictureLink = ``;
let roomName = ``;
let roomStatus = ``;
let roomLocation = ``;
const getInfoRoom = async (API) => {
  const res = await axios.get(API);
  const data = res.data[0];
  pictureLink = urlRoomInfoPicture + data.picture[0].link;
  roomName = data.name;
  roomStatus = data.status;
  roomLocation = data.location;
  renderInfoRoom(data);
};

const renderInfoRoom = (data) => {
  let htmlRoom = ``;
  let htmlCost = ``;
  htmlRoom = ` <div class="room-img">
                <img
                  src="${urlRoomInfoPicture + data.picture[0].link}"
                  alt=""
                />
              </div>
              <div class="room-text">
                <div class="room-name">${data.name}</div>
                <div class="room-type">${data.status}</div>
                <div class="room-location">${data.location}</div>
                <div class="room-rate">
                  <img src="./assets/image/Star.jpg" alt="" /> <span>${
                    data.rate
                  }</span>
                </div>
              </div>`;

  htmlCost = `    <div class="cost-header">Chi tiết giá</div>
              <div class="cost-content">
                <div class="cost-item">
                  <div class="cost-des">
                    <span>${data.price}</span> x <span class="count-night">1 đêm</span>
                  </div>
                  <div class="price">${data.price}</div>
                </div>
                <div class="cost-item">
                  <div class="cost-des">Phí vệ sinh</div>
                  <div class="price">đ 200,000</div>
                </div>
                <div class="cost-item">
                  <div class="cost-des">Phí dịch vụ <span>Tai</span></div>
                  <div class="price">đ 100,000</div>
                </div>
              </div>`;
  infoMenuRoom.innerHTML = htmlRoom;
  infoMenuCost.innerHTML = htmlCost;
};
let paymentInfo = [];
if (localStorage.getItem("payment") != null) {
  paymentInfo = JSON.parse(localStorage.getItem("payment"));
}

let priceInfo = ``;
const waitGetRoomInfo = async () => {
  await getInfoRoom(urlRoomInfo);
  //cost
  let countNight = document.querySelector(".count-night");

  let priceList = document.querySelectorAll(".price");
  var totalCost = document.querySelector(".total-price");
  let halfCost = document.querySelectorAll(".half-item-price");
  let halfCostDes = document.querySelectorAll(".half-item-des");

  const totalPrice = () => {
    let dayIn = inputText.innerHTML.split(" ")[0];
    let dayOut = inputText.innerHTML.split(" ")[2];
    let count =
      (Number(Date.parse(dayOut)) - Number(Date.parse(dayIn))) /
      (1000 * 3600 * 24);
    countNight.innerHTML = count + " " + "dêm";
    let total = count * roomInfo.infoPrice;
    priceList[0].innerHTML = `đ ${total.toLocaleString()}`;
    priceList[2].innerHTML = `đ ${(total * 0.1).toLocaleString()}`;
    let cost =
      total +
      Number(priceList[1].innerHTML.split(" ")[1].split(",").join("")) +
      Number(priceList[2].innerHTML.split(" ")[1].split(",").join(""));
    totalCost.innerHTML = `đ ${cost.toLocaleString()}`;
    priceInfo = `đ ${cost.toLocaleString()}`;
    halfCost.forEach((item) => {
      item.innerHTML = `đ ${(cost / 2).toLocaleString()}`;
    });
    halfCostDes[1].innerHTML = `Phải trả vào ${dayIn}`;
  };
  totalPrice();
  inputStartEnd.oninput = () => {
    let result = inputStartEnd.value.split(" ");
    result.splice(1, 1, "đến");
    inputText.innerHTML = result.join(" ");
    time = result.join(" ");
    totalPrice();
    paymentWay();
  };
  //payment-way
  let paymentDes = document.querySelectorAll(".payment-item-second");
  let paymentCost = document.querySelectorAll(".payment-item-cost");
  const paymentWay = () => {
    paymentDes[0].innerHTML = ` Thanh toán toàn bộ số tiền (${totalCost.innerHTML}) ngay bây giờ và thế là xong.`;

    let x = totalCost.innerHTML.split(" ")[1].split(",").join("");

    paymentDes[1].innerHTML = `Thanh toán ngay đ ${(
      Number(totalCost.innerHTML.split(" ")[1].split(",").join("")) / 2
    ).toLocaleString()} và phần còn lại (đ ${(
      Number(totalCost.innerHTML.split(" ")[1].split(",").join("")) / 2
    ).toLocaleString()}) sẽ tự động được trừ vào cùng phương thức thanh toán này vào ${
      inputText.innerHTML.split(" ")[0]
    }. Không phát sinh phụ phí.`;

    paymentCost[0].innerHTML = `đ ${Number(
      totalCost.innerHTML.split(" ")[1].split(",").join("")
    ).toLocaleString()}`;
    paymentCost[1].innerHTML = `đ ${(
      Number(totalCost.innerHTML.split(" ")[1].split(",").join("")) / 2
    ).toLocaleString()}`;
  };
  paymentWay();
};
waitGetRoomInfo();

//half-price-display
let totalHalf = document.querySelector(".total-half");
let inputAll = document.querySelector("#all");
let inputHalf = document.querySelector("#half");
let payWay = ``;
inputHalf.onchange = () => {
  if (inputHalf.checked) {
    totalHalf.classList.add("active");
    payWay = `Trả một phần`;
  }
};
inputAll.onchange = () => {
  if (inputAll.checked) {
    totalHalf.classList.remove("active");
    payWay = `Trả toàn bộ`;
  }
};
let userName = JSON.parse(localStorage.getItem("login")).name;
//pay
let btnPay = document.querySelector(".pay");
let inputCard = document.querySelector(".payment-by-number input");
let toastList = document.querySelector(".pop-up-list");
let success = document.querySelector(".success-wrap");
let succesOverlay = document.querySelector(".payment-success-overlay");
btnPay.onclick = () => {
  if (inputStartEnd.value.split(" ").length < 3) {
    let toast = document.createElement("div");
    toast.classList.add("pop-up", "active");
    toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng chọn ngày trả phòng</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
    toastList.appendChild(toast);
    let closeToast = document.querySelector(".toast-close");
    closeToast.onclick = () => {
      toastList.removeChild(toast);
      clearTimeout(delay);
    };
    let delay = setTimeout(() => {
      toastList.removeChild(toast);
    }, 1000);
  } else {
    if (!inputAll.checked && !inputHalf.checked) {
      let toast = document.createElement("div");
      toast.classList.add("pop-up", "active");
      toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng chọn cách thanh toán</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
      toastList.appendChild(toast);
      let closeToast = document.querySelector(".toast-close");
      closeToast.onclick = () => {
        toastList.removeChild(toast);
        clearTimeout(delay);
      };
      let delay = setTimeout(() => {
        toastList.removeChild(toast);
      }, 1000);
    } else {
      if (inputCard.value == "123456") {
        setTimeout(() => {
          success.classList.add("active");
          succesOverlay.classList.add("active");
        }, 500);
        let paymentItem = {
          user: userName,
          picture: pictureLink,
          name: roomName,
          status: roomStatus,
          location: roomLocation,
          date: time,
          price: priceInfo,
          way: payWay,
          link: roomInfo.infoLink,
        };
        paymentInfo.push(paymentItem);
        localStorage.setItem("payment", JSON.stringify(paymentInfo));
      } else {
        let toast = document.createElement("div");
        toast.classList.add("pop-up", "active");
        toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Mã số thẻ sai</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
        toastList.appendChild(toast);
        let closeToast = document.querySelector(".toast-close");

        let delay = setTimeout(() => {
          toastList.removeChild(toast);
        }, 1000);
        closeToast.onclick = () => {
          toastList.removeChild(toast);
          clearTimeout(delay);
        };
      }
    }
  }
};
