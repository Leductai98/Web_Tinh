//user-menu
let userLogin = [];
if (localStorage.getItem("login") != null) {
  userLogin = JSON.parse(localStorage.getItem("login"));
}
let favorite = [];
if (localStorage.getItem("favorite") != null) {
  favorite = JSON.parse(localStorage.getItem("favorite"));
}
let pictureLink = ``;
let locationName = ``;
let statusRoom = ``;
let roomName = ``;
let roomPrice = ``;
let user = document.getElementsByClassName("user")[0];
let userOverLay = document.querySelector(".user__overlay");
let userMenu = document.getElementsByClassName("user__menu")[0];
let userMenuSignInPc = document.querySelector(".user__menu-login");
let userMenuSignUpPc = document.querySelector(".user__menu-signup");
let userMenuSignInMobile = document.querySelectorAll(".menu-item")[0];
let userMenuSignUpMobile = document.querySelectorAll(".menu-item")[1];
userMenuSignInPc.onclick = () => {
  let isDetail = location.href;
  localStorage.setItem("isDetail", isDetail);
};
userMenuSignUpPc.onclick = () => {
  let isDetail = location.href;
  localStorage.setItem("isDetail", isDetail);
};
userMenuSignInMobile.onclick = () => {
  let isDetail = location.href;
  localStorage.setItem("isDetail", isDetail);
};
userMenuSignUpMobile.onclick = () => {
  let isDetail = location.href;
  localStorage.setItem("isDetail", isDetail);
};

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

//save
/*let saveBtn = document.querySelector(".save");
let saveIcon = document.querySelector(".save-icon");
saveBtn.onclick = () => {
  saveIcon.classList.toggle("active");
};*/

//guest-menu
/*let guest = document.querySelector(".guest");
guest.onclick = () => {
  guest.classList.toggle("active");
};
let guestOverLay = document.querySelector(".guest-menu-overlay");
guestOverLay.onclick = () => {
  guest.classList.remove("active");
};
let maxGuest = document.querySelector(".name-info-guest");
let maxGuestNum = parseInt(maxGuest.innerText);
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
});*/

//total cost
/*let costItem = document.querySelectorAll(".total-item");

let costTotal = document.querySelector(".total-cost");
let costNight = document.querySelectorAll(".cost-night");
let costTotalMobile = document.querySelector(".booking-mobile-money");

const total = () => {
  let result = 0;
  let result2 = 0;
  Array.from(costItem).forEach((item) => {
    let text = item.innerText;

    let text2 = text.split(" ");
    text2.shift();

    let text3 = Number(text2.join("").split(",").join(""));
    result += text3;
  });
  result2 = result.toLocaleString();

  costTotal.innerHTML = "đ" + " " + result2;
};*/
//Date
/*let dayInOut = document.querySelector(".input__in");
let dayIn = document.getElementById("in");
let dayOut = document.getElementById("out");
let countNight = document.querySelector(".count-night");
let timeMobileIn = document.querySelector(".time-mobile-in");
let timeMobileOut = document.querySelector(".time-mobile-out");
let timeMobile = document.querySelector(".time-mobile");
let flatpickrRange = document.querySelectorAll(
  ".flatpickr-calendar.rangeMode .flatpickr-day"
);
let t = new Date(flatpickrRange[0].ariaLabel);
let a = t.toDateString();
let b = Date.parse(flatpickrRange[0].ariaLabel);

const setDayInOut = (timeIn, timeOut) => {
  Array.from(flatpickrRange).forEach((item) => {
    item.classList.remove("inRange");
    item.classList.remove("selected");
    item.classList.remove("startRange");
    item.classList.remove("endRange");
    let result1 = Date.parse(item.ariaLabel);
    if (result1 == timeIn) {
      item.classList.add("selected");
      item.classList.add("startRange");
    }
    if (result1 == timeOut) {
      item.classList.add("selected");
      item.classList.add("endRange");
    }
    if (result1 > timeIn && result1 < timeOut) {
      item.classList.add("inRange");
    }
  });
};

dayInOut.oninput = () => {
  let result = dayInOut.value;
  let resultIn = result.split(" ")[0];
  let resultOut = result.split(" ")[2];
  if (resultIn != undefined) {
    let x = new Date(resultIn);
    let y = x.toDateString();

    dayIn.value = resultIn;
    timeMobile.classList.add("active");
    timeMobileIn.innerText = resultIn;
  } else {
    timeMobile.classList.remove("active");
  }
  if (resultOut != undefined) {
    dayOut.value = resultOut;
    timeMobileOut.classList.add("active");
    timeMobileOut.innerText = resultOut;
  } else {
    timeMobileOut.classList.remove("active");
  }
  totalDay();
};
dayIn.oninput = () => {
  dayIn.classList.remove("disabled");
  let resultOut = dayOut.value;
  let resultIn = dayIn.value;
  let result = dayInOut.value;
  timeMobileIn.innerText = resultIn;
  if (result == "" || result.includes("to") == false) {
    dayInOut.value = resultIn;
  } else if (result.split(" ").length <= 2) {
    let text = result.split(" ");
    text.unshift(resultIN);
    result = text.join(" ");
    dayInOut.value = result;
  } else {
    let text = result.split(" ");
    text[0] = resultIn;
    result = text.join(" ");
    let t = (dayInOut.value = result);
  }
  if (resultIn != undefined) {
    timeMobile.classList.add("active");
    timeMobileIn.innerText = resultIn;
  } else {
    timeMobile.classList.remove("active");
  }
  if (resultOut != undefined) {
    let x = Date.parse(resultIn);
    let y = Date.parse(resultOut);
    if (x > y) {
      dayOut.value = "Chọn lại ngày";
      dayOut.classList.add("disabled");
    } else {
      dayOut.classList.remove("disabled");
    }
  }

  if (resultOut != undefined) {
    dayOut.classList.remove("disabled");
    timeMobileOut.innerText = resultOut;
    if (result.split(" ").length <= 1) {
      dayInOut.value += " " + "to" + " " + resultOut;
    } else {
      let text = result.split(" ");
      text[2] = resultOut;
      result = text.join(" ");

      dayInOut.value = result;
    }
    if (resultOut != undefined) {
      timeMobileOut.classList.add("active");
      timeMobileOut.innerText = resultOut;
    } else {
      timeMobileOut.classList.remove("active");
    }
    if (resultIn != undefined) {
      let x = Date.parse(resultIn);
      let y = Date.parse(resultOut);
      if (x > y) {
        dayIn.value = "Chọn lại ngày";
        dayIn.classList.add("disabled");
      } else {
        dayIn.classList.remove("disabled");
      }
    }
  }
  totalDay();
};
*/
/*dayOut.oninput = () => {
  dayOut.classList.remove("disabled");
  let resultIn = dayIn.value;
  let resultOut = dayOut.value;
  let result = dayInOut.value;
  timeMobileOut.innerText = resultOut;
  if (result.split(" ").length <= 1) {
    dayInOut.value += " " + "to" + " " + resultOut;
  } else {
    let text = result.split(" ");
    text[2] = resultOut;
    result = text.join(" ");

    dayInOut.value = result;
  }
  if (resultOut != undefined) {
    timeMobileOut.classList.add("active");
    timeMobileOut.innerText = resultOut;
  } else {
    timeMobileOut.classList.remove("active");
  }
  if (resultIn != undefined) {
    let x = Date.parse(resultIn);
    let y = Date.parse(resultOut);
    if (x > y) {
      dayIn.value = "Chọn lại ngày";
      dayIn.classList.add("disabled");
    } else {
      dayIn.classList.remove("disabled");
    }
  }

  totalDay();
};*/
/*const totalDay = () => {
  let resultIn = dayIn.value;
  let resultOut = dayOut.value;
  let textIn = Date.parse(resultIn);
  let textOut = Date.parse(resultOut);
  let minus = textOut - textIn;
  let result = minus / (1000 * 60 * 60 * 24);
  if (result > 1) {
    countNight.innerHTML = result + " " + " " + "đêm";
    let x = costNight[0].innerText.split(" ");
    x.shift();
    let y = Number(x.join("").split(",").join(""));
    let z = (y * result).toLocaleString();
    let g = (y * result * 0.1).toLocaleString();
    costItem[0].innerHTML = "đ" + " " + z;
    costItem[2].innerHTML = "đ" + " " + g;
  }
  total();
};

const load = () => {
  let x = costNight[0].innerText.split(" ");
  x.shift();
  let y = Number(x.join("").split(",").join(""));
  let z = (y * 0.1).toLocaleString();
  costItem[2].innerText = "đ" + " " + z;
};
load();
*/
/*hide second month
let secondMonth = document.querySelectorAll(".flatpickr-month")[1];
let secondDay = document.querySelectorAll(".dayContainer")[1];
let secondWeek = document.querySelectorAll(".flatpickr-weekdaycontainer")[1];
window.onload = () => {
  secondMonth.classList.add("hide-tablet");
  secondDay.classList.add("hide-tablet");
  secondWeek.classList.add("hide-tablet");
};*/

//render-info
const urlRoomInfo = `https://api-sandy-zeta.vercel.app/room-list`;
const urlRoomInfoPicture = `https://api-sandy-zeta.vercel.app`;

const getRoomInfo = async (id) => {
  try {
    const res = await axios.get(
      `https://api-sandy-zeta.vercel.app/room-list?id=${id}`
    );

    const data = res.data[0];
    pictureLink = `${urlRoomInfoPicture + data.picture[0].link}`;
    locationName = `${data.location}`;
    statusRoom = `${data.status}`;
    roomName = `${data.name}`;
    roomPrice = `${data.price}`;
    renderRoomInfo(data);
  } catch (err) {
    console.log(err);
  }
};

const getFeature = (feature) => {
  let html = ``;
  feature.map((value) => {
    html += `<div class="info-feature d-flex gap-4">
                      <div class="feature-icon">
                        <img src="${urlRoomInfoPicture + value.icon}" alt="" />
                      </div>
                      <div class="feature-text">
                        <div class="feature-text-header">${value.name}</div>
                        <div class="feature-text-des">
                          ${value.des}
                        </div>
                      </div>
                    </div>  `;
  });
  return html;
};
const getBedRoom = (bedroom) => {
  let html = ``;
  bedroom.map((value) => {
    html += `<div class="col-6 col-lg-4">
                          <div class="sleep-item">
                            <div class="sleep-item-icon">
                              <img src="./assets/image/Group 1030.png" alt="" />
                            </div>
                            <div class="sleep-item-name">${value.name}</div>
                            <div class="sleep-item-des">${value.des}</div>
                          </div></div>`;
  });
  return html;
};
const getUtinity = (utinity) => {
  let html = ``;
  utinity.map((value) => {
    html += `<div class="col-12 col-lg-6">
                          <div class="utinity-item">
                            <div class="utinity-item-icon">
                              <img src="${
                                urlRoomInfoPicture + value.icon
                              }" alt="" />
                            </div>
                            <div class="utinity-item-des">
                             ${value.name}
                            </div>
                          </div>
                        </div>`;
  });
  return html;
};
const getComments = (comments) => {
  let html = ``;
  comments.map((value) => {
    html += ` <div class="col-12 col-md-6">
                  <div class="rating-item">
                    <div class="rating-item-user">
                      <div class="rating-item-user-avatar">
                     <img src="${urlRoomInfoPicture + value.avatar}">
                      </div>
                      <div class="rating-item-user-name">
                        <span>${value.name}</span>
                        <div class="rating-item-user-date">
                          ${value.date}
                        </div>
                      </div>
                    </div>
                    <div class="rating-item-content">
                      ${value.content}
                    </div>
                  </div>
                </div>`;
  });
  return html;
};

const roomTitle = document.querySelector("title");
const url = new URL(location.href);
const idRoom = url.searchParams.get("id");

const waitGetRoomInfo = async () => {
  await getRoomInfo(idRoom);
  //swiper-carousel
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //calendar
  flatpickr("#myID", {
    mode: "range",
    allowInput: true,
    inline: true,
    showMonths: 2,
  });
  flatpickr("#in", {
    allowInput: true,
    plugins: [new rangePlugin({ input: "#out" })],
  });
  let guest = document.querySelector(".guest");
  guest.onclick = () => {
    guest.classList.toggle("active");
  };
  let guestOverLay = document.querySelector(".guest-menu-overlay");
  guestOverLay.onclick = () => {
    guest.classList.remove("active");
  };
  let maxGuest = document.querySelector(".name-info-guest");
  let maxGuestNum = parseInt(maxGuest.innerText);
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
            parseInt(quantity[0].innerText) +
            parseInt(quantity[1].innerText) +
            1;

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
                parseInt(quantity[0].innerText) +
                parseInt(quantity[1].innerText);

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
            parseInt(quantity[0].innerText) +
            parseInt(quantity[1].innerText) -
            1;
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
                parseInt(quantity[0].innerText) +
                parseInt(quantity[1].innerText);

              guestAdultChild.innerHTML = adultNumber + " " + " khách";
            } else {
              let adultNumber =
                parseInt(quantity[0].innerText) +
                parseInt(quantity[1].innerText);
              guestAdultChild.innerText = adultNumber + " " + "khách";
            }
          } else {
            if (count > 0) {
              let adultNumber =
                parseInt(quantity[0].innerText) +
                parseInt(quantity[1].innerText);
              guestAdultChild.innerHTML = adultNumber + " " + " khách";
            } else {
              let adultNumber =
                parseInt(quantity[0].innerText) +
                parseInt(quantity[1].innerText);
              guestAdultChild.innerText = adultNumber + " " + "khách";
            }
          }
        }
      }
    };
  });
  //total cost
  let costItem = document.querySelectorAll(".total-item");

  let costTotal = document.querySelector(".total-cost");
  let costNight = document.querySelectorAll(".cost-night");
  let costTotalMobile = document.querySelector(".booking-mobile-money");

  const total = () => {
    let result = 0;
    let result2 = 0;
    Array.from(costItem).forEach((item) => {
      let text = item.innerText;

      let text2 = text.split(" ");
      text2.shift();

      let text3 = Number(text2.join("").split(",").join(""));
      result += text3;
    });
    result2 = result.toLocaleString();
    costTotal.innerHTML = "đ" + " " + result2;
  };

  //calendar-day
  let dayInOut = document.querySelector(".input__in");
  let dayIn = document.getElementById("in");
  let dayOut = document.getElementById("out");
  let countNight = document.querySelector(".count-night");
  let timeMobileIn = document.querySelector(".time-mobile-in");
  let timeMobileOut = document.querySelector(".time-mobile-out");
  let timeMobile = document.querySelector(".time-mobile");
  let flatpickrRange = document.querySelectorAll(
    ".flatpickr-calendar.rangeMode .flatpickr-day"
  );
  let t = new Date(flatpickrRange[0].ariaLabel);
  let a = t.toDateString();
  let b = Date.parse(flatpickrRange[0].ariaLabel);

  const setDayInOut = (timeIn, timeOut) => {
    Array.from(flatpickrRange).forEach((item) => {
      item.classList.remove("inRange");
      item.classList.remove("selected");
      item.classList.remove("startRange");
      item.classList.remove("endRange");
      let result1 = Date.parse(item.ariaLabel);
      if (result1 == timeIn) {
        item.classList.add("selected");
        item.classList.add("startRange");
      }
      if (result1 == timeOut) {
        item.classList.add("selected");
        item.classList.add("endRange");
      }
      if (result1 > timeIn && result1 < timeOut) {
        item.classList.add("inRange");
      }
    });
  };

  dayInOut.oninput = () => {
    let result = dayInOut.value;
    let resultIn = result.split(" ")[0];
    let resultOut = result.split(" ")[2];
    if (resultIn != undefined) {
      let x = new Date(resultIn);
      let y = x.toDateString();

      dayIn.value = resultIn;
      timeMobile.classList.add("active");
      timeMobileIn.innerText = resultIn;
    } else {
      timeMobile.classList.remove("active");
    }
    if (resultOut != undefined) {
      dayOut.value = resultOut;
      timeMobileOut.classList.add("active");
      timeMobileOut.innerText = resultOut;
    } else {
      timeMobileOut.classList.remove("active");
    }
    if (result == "") {
      timeMobile.classList.remove("active");
    }
    totalDay();
  };
  dayIn.oninput = () => {
    dayIn.classList.remove("disabled");
    let resultOut = dayOut.value;
    let resultIn = dayIn.value;
    let result = dayInOut.value;
    timeMobileIn.innerText = resultIn;
    if (result == "" || result.includes("to") == false) {
      dayInOut.value = resultIn;
    } else if (result.split(" ").length <= 2) {
      let text = result.split(" ");
      text.unshift(resultIN);
      result = text.join(" ");
      dayInOut.value = result;
    } else {
      let text = result.split(" ");
      text[0] = resultIn;
      result = text.join(" ");
      let t = (dayInOut.value = result);
    }
    if (resultIn != undefined) {
      timeMobile.classList.add("active");
      timeMobileIn.innerText = resultIn;
    } else {
      timeMobile.classList.remove("active");
    }
    if (resultOut != undefined) {
      let x = Date.parse(resultIn);
      let y = Date.parse(resultOut);
      if (x > y) {
        dayOut.value = "Chọn lại ngày";
        dayOut.classList.add("disabled");
      } else {
        dayOut.classList.remove("disabled");
      }
    }

    if (resultOut != undefined) {
      dayOut.classList.remove("disabled");
      timeMobileOut.innerText = resultOut;
      if (result.split(" ").length <= 1) {
        dayInOut.value += " " + "to" + " " + resultOut;
      } else {
        let text = result.split(" ");
        text[2] = resultOut;
        result = text.join(" ");

        dayInOut.value = result;
      }
      if (resultOut != undefined) {
        timeMobileOut.classList.add("active");
        timeMobileOut.innerText = resultOut;
      } else {
        timeMobileOut.classList.remove("active");
      }
      if (resultIn != undefined) {
        let x = Date.parse(resultIn);
        let y = Date.parse(resultOut);
        if (x > y) {
          dayIn.value = "Chọn lại ngày";
          dayIn.classList.add("disabled");
        } else {
          dayIn.classList.remove("disabled");
        }
      }
    }
    totalDay();
  };
  const totalDay = () => {
    let resultIn = dayIn.value;
    let resultOut = dayOut.value;
    let textIn = Date.parse(resultIn);
    let textOut = Date.parse(resultOut);
    let minus = textOut - textIn;
    let result = minus / (1000 * 60 * 60 * 24);
    if (result > 1) {
      countNight.innerHTML = result + " " + "đêm";
      let x = costNight[0].innerText.split(" ");
      x.shift();
      let y = Number(x.join("").split(",").join(""));
      let z = (y * result).toLocaleString();
      let g = (y * result * 0.1).toLocaleString();
      costItem[0].innerHTML = "đ" + " " + z;
      costItem[2].innerHTML = "đ" + " " + g;
    }
    total();
  };

  const load = () => {
    let x = costNight[0].innerText.split(" ");
    x.shift();
    let y = Number(x.join("").split(",").join(""));
    let z = (y * 0.1).toLocaleString();
    costItem[2].innerText = "đ" + " " + z;
  };
  load();

  //hide second month
  let secondMonth = document.querySelectorAll(".flatpickr-month")[1];
  let secondDay = document.querySelectorAll(".dayContainer")[1];
  let secondWeek = document.querySelectorAll(".flatpickr-weekdaycontainer")[1];

  secondMonth.classList.add("hide-tablet");
  secondDay.classList.add("hide-tablet");
  secondWeek.classList.add("hide-tablet");

  //save
  let saveBtn = document.querySelector(".save");
  let saveIcon = document.querySelector(".save-icon");
  if (userLogin.length != 0) {
    if (favorite.length != 0) {
      favorite.forEach((item) => {
        if (item.user == userLogin.name) {
          if (item.name == roomName) {
            saveIcon.classList.add("active");
          }
        }
      });
    }
  }
  saveBtn.onclick = () => {
    if (userLogin.length != 0) {
      if (!saveIcon.classList.contains("active")) {
        saveIcon.classList.add("active");
        let favoriteItem = {
          user: userLogin.name,
          name: roomName,
          picture: pictureLink,
          location: locationName,
          status: statusRoom,
          price: roomPrice,
          link: window.location.href,
        };
        favorite.push(favoriteItem);
        localStorage.setItem("favorite", JSON.stringify(favorite));
      } else {
        saveIcon.classList.remove("active");
        for (let i = 0; i < favorite.length; i++) {
          if (favorite[i].user == userLogin.name) {
            if (favorite[i].name == roomName) {
              favorite.splice(i, 1);
            }
          }
        }
        localStorage.setItem("favorite", JSON.stringify(favorite));
      }
    } else {
      let toastList = document.querySelector(".pop-up-list");
      let toast = document.createElement("div");
      toast.classList.add("pop-up", "active");
      toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng đăng nhập để thực hiện chức năng này</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
      toastList.appendChild(toast);
      toast.onclick = (e) => {
        if (e.target.closest(".toast-close")) toastList.removeChild(toast);
        clearTimeout(removeToast);
      };
      let removeToast = setTimeout(() => {
        toastList.removeChild(toast);
      }, 1000);
    }
  };
  //oder
  let btnOrderPc = document.getElementsByClassName("order-room")[0];
  let btnOrderMobile = document.querySelector(".booking-mobile-btn");

  if (window.innerWidth > 767) {
    btnOrderPc.onclick = (e) => {
      let date = dayInOut.value;
      let price = costNight[0].innerHTML.split(" ")[1].split(",").join("");

      let adult = Number(quantity[0].innerHTML);
      let child = Number(quantity[1].innerHTML);
      let baby = Number(quantity[2].innerHTML);
      let pet = Number(quantity[3].innerHTML);
      if (userLogin.length != 0) {
        if (dayIn.value != "" && dayOut.value != "") {
          let x = new Date();
          if (Date.parse(dayIn.value) < Date.parse(x)) {
            e.preventDefault();
            let toastList = document.querySelector(".pop-up-list");

            let toast = document.createElement("div");
            toast.classList.add("pop-up", "active");
            toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Ngày nhận phòng không phù hợp</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
            toastList.appendChild(toast);
            let closeToast = document.querySelector(".toast-close");
            toast.onclick = (e) => {
              if (e.target.closest(".toast-close"))
                toastList.removeChild(toast);
              clearTimeout(removeToast);
            };
            let removeToast = setTimeout(() => {
              toastList.removeChild(toast);
            }, 1000);
          } else {
            let roomInfo = {
              infoId: idRoom,
              infoMaxGuest: maxGuestNum,
              infoDate: date,
              infoPrice: price,
              infoAdult: adult,
              infoChild: child,
              infoMaxBaby: 5,
              infoBaby: baby,
              infoMaxPet: 5,
              infoPet: pet,
              infoLink: window.location.href,
            };
            roomOrder = roomInfo;
            localStorage.setItem("roomOrder", JSON.stringify(roomOrder));
          }
        } else {
          e.preventDefault();
          let toastList = document.querySelector(".pop-up-list");

          let toast = document.createElement("div");
          toast.classList.add("pop-up", "active");
          toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng chọn ngày nhận và trả phòng</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
          toastList.appendChild(toast);
          let closeToast = document.querySelector(".toast-close");
          toast.onclick = (e) => {
            if (e.target.closest(".toast-close")) toastList.removeChild(toast);
            clearTimeout(removeToast);
          };
          let removeToast = setTimeout(() => {
            toastList.removeChild(toast);
          }, 1000);
        }
      } else {
        e.preventDefault();
        let toastList = document.querySelector(".pop-up-list");

        let toast = document.createElement("div");
        toast.classList.add("pop-up", "active");
        toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng đăng nhập để thực hiện chức năng này</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
        toastList.appendChild(toast);
        toast.onclick = (e) => {
          if (e.target.closest(".toast-close")) toastList.removeChild(toast);
          clearTimeout(removeToast);
        };
        let removeToast = setTimeout(() => {
          toastList.removeChild(toast);
        }, 1000);
      }
    };
  } else {
    btnOrderMobile.onclick = (e) => {
      let date = dayInOut.value;
      let price = costNight[0].innerHTML.split(" ")[1].split(",").join("");

      let adult = Number(quantity[0].innerHTML);
      let child = Number(quantity[1].innerHTML);
      let baby = Number(quantity[2].innerHTML);
      let pet = Number(quantity[3].innerHTML);
      if (userLogin.length != 0) {
        if (date.split(" ").length == 3) {
          let roomInfo = {
            infoId: idRoom,
            infoMaxGuest: maxGuestNum,
            infoDate: date,
            infoPrice: price,
            infoAdult: adult,
            infoChild: child,
            infoMaxBaby: 5,
            infoBaby: baby,
            infoMaxPet: 5,
            infoPet: pet,
          };
          roomOrder = roomInfo;
          localStorage.setItem("roomOrder", JSON.stringify(roomOrder));
        } else {
          e.preventDefault();
          let toastList = document.querySelector(".pop-up-list");

          let toast = document.createElement("div");
          toast.classList.add("pop-up", "active");
          toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng chọn ngày nhận và trả phòng</div> 
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
          toastList.appendChild(toast);
          let closeToast = document.querySelector(".toast-close");

          setTimeout(() => {
            toastList.removeChild(toast);
          }, 1000);
          closeToast.onclick = () => {
            toastList.removeChild(toast);
            clearTimeout();
          };
        }
      } else {
        e.preventDefault();
        let toastList = document.querySelector(".pop-up-list");

        let toast = document.createElement("div");
        toast.classList.add("pop-up", "active");
        toast.innerHTML = `<div class="toast-icon">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div class="toast-content">Vui lòng đăng nhập để thực hiện chức năng này</div>
        <div class="toast-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>`;
        toastList.appendChild(toast);
        toast.onclick = (e) => {
          if (e.target.closest(".toast-close")) toastList.removeChild(toast);
          clearTimeout(removeToast);
        };
        let removeToast = setTimeout(() => {
          toastList.removeChild(toast);
        }, 1000);
      }
    };
  }
};

waitGetRoomInfo();
const renderRoomInfo = (item) => {
  roomTitle.innerHTML = item.name;
  let roomInfo = document.querySelector(".room-wrap");
  let infoRating = document.querySelector(".info-rating");
  let infoMap = document.querySelector(".info-map");
  let htmlRate = ``;
  let htmlMap = ``;
  let htmlCode = ``;

  htmlCode = ` <div class="room__des-header">
          <div class="header-name">
            <p>${item.name}</p>
          </div>
          <div class="header-info">
            <div class="row g-0 align-items-end">
              <div
                class="col-10 col-md-2 d-flex align-items-end justify-content-start"
              >
                <div
                  class="rating d-flex gap-2 align-items-end justify-content-start"
                >
                  <div class="rating-icon d-flex align-items-center">
                    <img src="./assets/image/Star.jpg" alt="" />
                  </div>
                  <div class="rating-text">${item.rate}</div>
                </div>
              </div>
              <div
                class="col-md-6 d-none d-md-block d-flex align-items-end justify-content-start"
              >
                <div class="info-status">
                  <span class="house">${item.status} |</span>
                  <span class="location">${item.location}</span>
                </div>
              </div>
              <div
                class="col-1 col-md-2 d-flex align-items-end justify-content-end"
              >
                <div class="share">
                  <div class="share-icon">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="
                        display: block;
                        fill: none;
                        height: 16px;
                        width: 16px;
                        stroke: currentcolor;
                        stroke-width: 2;
                        overflow: visible;
                      "
                    >
                      <g fill="none">
                        <path
                          d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"
                        ></path>
                        <path d="M16 3v23V3z"></path>
                        <path
                          d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="share-text d-none d-md-block">Chia sẻ</div>
                </div>
              </div>
              <div
                class="col-1 col-md-2 d-flex align-items-end justify-content-end"
              >
                <div class="save">
                  <div class="save-icon" style="color: none">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="
                        display: block;
                        fill: none;
                        height: 16px;
                        width: 16px;
                        stroke: currentcolor;
                        stroke-width: 2;
                        overflow: visible;
                      "
                    >
                      <path
                        d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                      ></path>
                    </svg>
                  </div>
                  <div class="save-text d-none d-md-block">Lưu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="room__picture">
          <input type="checkbox" id="picture-list" />
          <div class="room__picture-list-wrap">
            <label for="picture-list" class="cover-detail-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </label>
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    src="${urlRoomInfoPicture + item.picture[0].link}"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="${urlRoomInfoPicture + item.picture[1].link}"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="${urlRoomInfoPicture + item.picture[2].link}"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="${urlRoomInfoPicture + item.picture[3].link}"
                    alt=""
                  />
                </div>
                <div class="swiper-slide" id="picture-1">
                  <img
                    src="${urlRoomInfoPicture + item.picture[4].link}"
                    alt=""
                  />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="row g-1">
            <div for="picture-list" class="col-12 col-md-6 picture-right">
              <label for="picture-list" class="picture-big">
                <img src="${
                  urlRoomInfoPicture + item.picture[0].link
                }" alt="" />
              </label>
            </div>
            <div class="col-6 d-none d-md-block picture-left">
              <div class="row g-1">
                <div class="col-lg-6 d-none d-lg-block">
                  <label for="picture-list" class="picture-small">
                    <img src="${
                      urlRoomInfoPicture + item.picture[1].link
                    }" alt="" />
                  </label>
                </div>
                <div class="col-md-12 col-lg-6">
                  <label
                    for="picture-list"
                    class="picture-small border-picture-top"
                  >
                    <img src="${
                      urlRoomInfoPicture + item.picture[2].link
                    }" alt="" />
                  </label>
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                  <label for="picture-list" class="picture-small">
                    <img src="${
                      urlRoomInfoPicture + item.picture[3].link
                    }" alt="" />
                  </label>
                </div>
                <div class="col-md-12 col-lg-6">
                  <label
                    for="picture-list"
                    class="picture-small border-picture-bot"
                  >
                    <img src="${
                      urlRoomInfoPicture + item.picture[4].link
                    }" alt="" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="room__info">
          <div class="row justify-content-between">
            <div class="col-12 col-md-7">
              <div class="row">
                <div class="col-12">
                  <div class="info-name">
                    <div class="name"><h5>${item.name}</h5></div>
                    <div class="name-info">
                      <span class="name-info-guest">${item.guest}</span> |
                      <span class="name-info-bedroom">${item.room[0]}</span> |
                      <span class="name-info-bed">${item.room[1]}</span> |
                      <span class="name-info-bathroom">${item.room[2]}</span>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-feature-list">
                 ${getFeature(item.feature)} 
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-cover">
                    <div class="info-cover-header"><span>Tai</span>cover</div>
                    <div class="info-cover-des">
                      Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                      nhà hủy, thông tin nhà/phòng cho thuê không chính xác và
                      những vấn đề khác như sự cố trong quá trình nhận phòng.
                    </div>
                    <label for="cover-input" class="info-cover-more"
                      >Tìm hiểu thêm</label
                    >
                  </div>
                  <input type="checkbox" id="cover-input" />
                  <label for="cover-input" class="info-cover-overlay"></label>
                  <div class="info-cover-detail">
                    <label for="cover-input" class="cover-detail-close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </label>
                    <div class="detail-wrap">
                      <div class="cover-detail-header">
                        <div class="detail-header-icon">
                          <span>Tai</span>cover
                        </div>
                        <div class="detail-header-text">
                          <span>Tai</span>Cover là chương trình bảo vệ toàn diện,
                          được áp dụng miễn phí với mọi đặt phòng.
                        </div>
                      </div>
                      <div class="cover-detail-list">
                        <div class="cover-detail-item">
                          <div class="detail-item-header">
                            Bảo đảm bảo vệ đặt phòng
                          </div>
                          <div class="detail-item-text">
                            Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng
                            của bạn trong vòng 30 ngày trước ngày nhận phòng,
                            chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                            hơn, hoặc sẽ hoàn tiền cho bạn.
                          </div>
                        </div>
                        <div class="cover-detail-item">
                          <div class="detail-item-header">Bảo đảm nhận phòng</div>
                          <div class="detail-item-text">
                            Nếu bạn không thể nhận phòng và Chủ nhà không thể giải
                            quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở
                            tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc
                            chúng tôi sẽ hoàn tiền cho bạn.
                          </div>
                        </div>
                        <div class="cover-detail-item">
                          <div class="detail-item-header">
                            Bảo đảm chi phí tương xứng
                          </div>
                          <div class="detail-item-text">
                            Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng
                            như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và
                            Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc
                            số phòng ngủ ít hơn so với thông tin trên mục cho
                            thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó,
                            chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                            hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.
                          </div>
                        </div>
                        <div class="cover-detail-item">
                          <div class="detail-item-header">
                            Đường dây an toàn 24 giờ
                          </div>
                          <div class="detail-item-text">
                            Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên
                            hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt
                            của chúng tôi, bất kể ngày đêm.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-sleep">
                    <div class="info-sleep-header">Nơi bạn ngủ nghỉ</div>
                    <div class="info-sleep-list">
                      <div class="row gy-4 gx-4">
                      ${getBedRoom(item.bedroom)}
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-utinity">
                    <div class="utinity-des">Nơi này có những gì cho bạn</div>
                    <div class="utinity-list">
                      <div class="row gy-3 justify-content-between">
                   ${getUtinity(item.utinity)}
                      </div>
                    </div>
                    <button class="utinity-more d-none">
                      Hiển thị tất cả 36 tiện nghi
                    </button>
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-cancel">
                    <div class="cancel-header">Chính sách hủy</div>
                    <div class="cancel-des">
                      Bạn được hoàn tiền nếu hủy phòng này hay không sẽ phụ thuộc vào chính sách của chủ nhà. <br />
                      Hãy đọc toàn bộ chính sách hủy của Chủ nhà.
                    </div>
                    <label for="cancel-input" class="cancel-more">
                      <span class="text">Hiển thị thêm</span
                      ><img src="./assets/image/Frame (13).png" alt="" />
                    </label>
                  </div>
                  <input type="checkbox" id="cancel-input" />
                  <label for="cancel-input" class="info-cover-overlay"></label>
                  <div class="info-cancel-detail">
                    <label for="cancel-input" class="cover-detail-close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </label>
                    <div class="detail-wrap">
                      <div
                        class="cover-detail-header"
                        style="border-bottom: none"
                      >
                        <div class="detail-header-text">
                          Trước khi bạn đặt phòng/đặt chỗ, hãy đảm bảo chính sách
                          hủy của Chủ nhà/Người tổ chức này phù hợp với bạn. Xin
                          lưu ý rằng chính sách Trường hợp bất khả kháng của
                          <span>Tai</span> không áp dụng cho các trường hợp hủy vì
                          ốm bệnh hoặc gián đoạn đi lại do dịch COVID-19.
                        </div>
                      </div>
                      <div class="cover-detail-list">
                        <div class="cover-detail-item w-100">
                          <div class="detail-item-header">
                            Hủy muộn nhất vào ngày
                          </div>
                          <div class="detail-item-content">
                            <div class="detail-item-date">${new Date().toLocaleDateString()}</div>
                            <div class="detail-item-text">
                              Hoàn tiền đầy đủ: Được hoàn lại 100% số tiền bạn đã
                              thanh toán.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="info-rules">
                    <div class="rules-des">Nội quy nhà</div>
                    <div class="rules-list">
                      <div class="rules-item">Nhận phòng sau 11:00</div>
                      <div class="rules-item">Trả phòng trước 12:00</div>
                      <div class="rules-item">Tối đa ${item.guest}</div>
                    </div>
                    <label for="rules-input" class="rules-more">
                      <span>Hiển thị thêm</span
                      ><img src="./assets/image/Frame (13).png" alt="" />
                    </label>
                    <input type="checkbox" id="rules-input" />
                    <label for="rules-input" class="info-cover-overlay"></label>
                    <div class="info-rules-detail">
                      <label for="rules-input" class="cover-detail-close">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </label>
                      <div class="detail-wrap">
                        <div
                          class="cover-detail-header"
                          style="border-bottom: none"
                        >
                          <div class="detail-header-icon">Nội quy nhà</div>
                          <div class="detail-header-text">
                            Hãy thực hiện theo các quy tắc này để là một vị khách
                            có ý thức và tránh mọi sự cố trong thời gian ở.
                          </div>
                        </div>
                        <div class="cover-detail-list">
                          <div class="cover-detail-item w-100">
                            <div class="detail-item-header">Khách được ở lại</div>
                            <div class="detail-item-content">
                              <div class="content-wrap">
                                <div class="content-icon">
                                  <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="
                                      display: block;
                                      height: 24px;
                                      width: 24px;
                                      fill: currentcolor;
                                    "
                                  >
                                    <path
                                      d="M22 5a6 6 0 0 1 3.643 10.768 9.003 9.003 0 0 1 5.353 7.967L31 24h-2a7.002 7.002 0 0 0-5.999-6.929v-2.197A4.002 4.002 0 0 0 22 7a4 4 0 0 0-3.679 5.574A4.991 4.991 0 0 1 21 17a4.986 4.986 0 0 1-1.599 3.665 9.003 9.003 0 0 1 5.595 8.07L25 29h-2a7.002 7.002 0 0 0-5.999-6.929v-2.242a3.001 3.001 0 1 0-2 0L15 22.071a7.002 7.002 0 0 0-5.996 6.688L9 29H7a9.003 9.003 0 0 1 5.6-8.335 5 5 0 0 1 1.077-8.093A4 4 0 1 0 9 14.874v2.197a7.002 7.002 0 0 0-5.996 6.688L3 24H1a9.002 9.002 0 0 1 5.357-8.232A6 6 0 1 1 15.917 10h.166A6.002 6.002 0 0 1 22 5z"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="detail-item-text">Tối đa ${
                                  item.guest
                                }</div>
                              </div>
                              <div class="content-wrap">
                                <div class="content-icon">
                                  <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="
                                      display: block;
                                      height: 24px;
                                      width: 24px;
                                      fill: currentcolor;
                                    "
                                  >
                                    <path
                                      d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="detail-item-text">
                                  Được phép mang theo thú cưng
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="cover-detail-item w-100">
                            <div class="detail-item-header">
                              Hoạt động được cho phép
                            </div>
                            <div class="detail-item-content">
                              <div class="content-wrap">
                                <div class="content-icon">
                                  <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="
                                      display: block;
                                      height: 24px;
                                      width: 24px;
                                      fill: currentcolor;
                                    "
                                  >
                                    <path
                                      d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="detail-item-text">
                                  Nhận phòng sau 11:00
                                </div>
                              </div>
                              <div class="content-wrap">
                                <div class="content-icon">
                                  <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style="
                                      display: block;
                                      height: 24px;
                                      width: 24px;
                                      fill: currentcolor;
                                    "
                                  >
                                    <path
                                      d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="detail-item-text">
                                  Trả phòng trước 12:00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div id="date" class="info-date">
                    <div class="date-header">Chọn ngày nhận phòng</div>
                    <div class="date-des">Thêm ngày đi để biết giá chính xác</div>
                    <input
                      class="input__in"
                      id="myID"
                      type="text"
                      placeholder="Chọn ngày"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-lg-4">
              <div class="info-booking-mobile">
                <div
                  class="container d-flex justify-content-between align-items-center"
                >
                  <div class="booking-mobile-left">
                    <div class="booking-mobile-money">
                      <span>${item.price}</span> / đêm
                    </div>
                    <div class="booking-mobile-time">
                      <a href="#date" class="time-mobile">
                        <span class="time-mobile-in"></span><span> - </span
                        ><span class="time-mobile-out"></span>
                      </a>
                    </div>
                  </div>
                  <div class="booking-mobile-right">
                  <a href="./payment.html"><button class="booking-mobile-btn">Đặt phòng</button></a>
                  </div>
                </div>
              </div>
              <div class="info-booking">
                <div class="booking-money-rate">
                  <div class="booking-money"><span>đ ${
                    item.price
                  }</span>/đêm</div>
                  <div class="booking-rate">
                    <div class="booking-rate-icon">
                      <img src="./assets/image/Star (2).png" alt="" />
                    </div>
                    <div class="booking-rate-des">${item.rate}</div>
                  </div>
                </div>
                <div class="booking-form">
                  <div class="time">
                    <div class="time-check-in">
                      <label for="in" class="check-in"
                        ><span class="come">Nhận </span>phòng</label
                      >
                      <input
                        class="in"
                        type="text"
                        name=""
                        id="in"
                        placeholder="Thêm ngày"
                      />
                    </div>
                    <div class="time-check-out">
                      <label for="out" class="check-out"
                        ><span class="leave">Trả</span> phòng</label
                      >
                      <input
                        type="text"
                        name=""
                        id="out"
                        class="input__out"
                        placeholder="Thêm ngày"
                      />
                    </div>
                  </div>
                  <div class="guest-wrap">
                    <input type="checkbox" name="" id="guest-menu-input" />
                    <label
                      class="guest-menu-overlay"
                      for="guest-menu-input"
                    ></label>
                    <div class="guest-menu">
                      <div class="guest-list">
                        <div class="guest-item">
                          <div class="item-left">
                            <div class="item-left-header">Người lớn</div>
                            <div class="item-left-des">Từ 13 tuổi trở lên</div>
                          </div>
                          <div class="item-right">
                            <div class="item-right-reduce" data-type="adult">
                              -
                            </div>
                            <div
                              class="item-right-quantity"
                              data-type="adult"
                              data-max="${parseInt(item.guest)}"
                            >
                              1
                            </div>
                            <div class="item-right-increase" data-type="adult">
                              +
                            </div>
                          </div>
                        </div>
                        <div class="guest-item">
                          <div class="item-left">
                            <div class="item-left-header">Trẻ em</div>
                            <div class="item-left-des">Độ tuổi 2 - 12</div>
                          </div>
                          <div class="item-right">
                            <div class="item-right-reduce" data-type="child">
                              -
                            </div>
                            <div
                              class="item-right-quantity"
                              data-type="child"
                              data-max="${parseInt(item.guest) - 1}"
                            >
                              0
                            </div>
                            <div class="item-right-increase" data-type="child">
                              +
                            </div>
                          </div>
                        </div>
                        <div class="guest-item">
                          <div class="item-left">
                            <div class="item-left-header">Em bé</div>
                            <div class="item-left-des">Dưới 2 tuổi</div>
                          </div>
                          <div class="item-right">
                            <div class="item-right-reduce" data-type="baby">
                              -
                            </div>
                            <div
                              class="item-right-quantity"
                              data-type="baby"
                              data-max="5"
                            >
                              0
                            </div>
                            <div class="item-right-increase" data-type="baby">
                              +
                            </div>
                          </div>
                        </div>
                        <div class="guest-item">
                          <div class="item-left">
                            <div class="item-left-header">Thú cưng</div>
                            <div class="item-left-des"></div>
                          </div>
                          <div class="item-right">
                            <div class="item-right-reduce" data-type="pet">-</div>
                            <div
                              class="item-right-quantity"
                              data-type="pet"
                              data-max="5"
                            >
                              0
                            </div>
                            <div class="item-right-increase" data-type="pet">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                      <label for="guest-menu-input" class="guest-menu-close"
                        >Đóng</label
                      >
                    </div>
                    <label class="guest" for="guest-menu-input">
                      <div class="guest-header">Khách</div>
                      <div class="guest-input">
                        <div class="guest-count">
                          <span class="guest-adult-child">1 khách </span
                          ><span class="guest-baby">, 1 em bé</span
                          ><span class="guest-pet">, 1 thú cưng</span>
                        </div>
                        <img src="./assets/image/Frame (14).png" alt="" />
                      </div>
                    </label>
                  </div>
                 <a href="./payment.html"> <button class="order-room">Đặt phòng</button></a>
                  <div class="cost-wrap">
                    <div class="cost-list">
                      <div class="cost-item">
                        <div class="calc-wrap">
                          <input type="checkbox" id="calc-input-room" />
                          <label for="calc-input-room" class="calc-item">
                            <span class="cost-night">đ ${item.price}</span> x
                            <span class="count-night">1 đêm</span>
                          </label>
                          <label
                            for="calc-input-room"
                            class="calc-overlay-room"
                          ></label>
                          <div class="item-small-des">
                            <label for="calc-input-room" class="small-des-close">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </label>
                            <div class="small-des-text">Phí thuê phòng</div>
                          </div>
                        </div>
                        <div data-type="night" class="total-item">
                          ${item.price}
                        </div>
                      </div>
                      <div class="cost-item">
                        <div class="calc-wrap">
                          <input type="checkbox" id="calc-input-clean" />
                          <label for="calc-input-clean" class="calc-item">
                            <span class="cost-night">Phí vệ sinh </span>
                          </label>
                          <label
                            for="calc-input-clean"
                            class="calc-overlay-clean"
                          ></label>
                          <div class="item-small-des">
                            <label for="calc-input-clean" class="small-des-close">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </label>
                            <div class="small-des-text">
                              Khoản phí một lần do chủ nhà tính để trang trải chi
                              phí vệ sinh chỗ của họ.
                            </div>
                          </div>
                        </div>
                        <div data-type="clean" class="total-item">đ 200,000</div>
                      </div>
                      <div class="cost-item">
                        <div class="calc-wrap">
                          <input type="checkbox" id="calc-input" />
                          <label for="calc-input" class="calc-item">
                            <span class="cost-night"
                              >Phí dịch vụ <span class="cost-icon">Tai</span>
                            </span>
                          </label>
                          <label for="calc-input" class="calc-overlay"></label>
                          <div class="item-small-des">
                            <label for="calc-input" class="small-des-close">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </label>
                            <div class="small-des-text">
                              Điều này giúp chúng tôi vận hành nền tảng của mình
                              và cung cấp các dịch vụ như hỗ trợ 24/7 trong chuyến
                              đi của bạn.
                            </div>
                          </div>
                        </div>
                        <div data-type="service" class="total-item">
                          ${(
                            Number(item.price.split(",").join("")) * 0.1
                          ).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div class="total">
                      <div class="total-des">Tổng</div>
                      <div class="total-cost">đ ${Number(
                        item.price.split(",").join("") * 1.1 + 200000
                      ).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  htmlRate = ` <div class="rating-header">
              <div class="rating-header-icon">
                <img src="./assets/image/Star (1).png" alt="" />
              </div>
              <div class="rating-header-des">${item.rate}</div>
            </div>
            <div class="rating-list">
              <div class="row gy-5">
               ${getComments(item.comments)}            
                </div>
                <div class="col-12">
                  <button class="rating-more d-none" href>
                    Hiển thị tất cả 280 bình luận
                  </button>
                </div>
              </div>
            </div>`;
  htmlMap = `  <div class="map-text">
              <div class="map-header">Nơi bạn sẽ đến</div>
              <div class="map-des">${item.location}</div>
            </div>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?${item.map}"
                width="1000"
                height="500"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>`;
  infoRating.innerHTML = htmlRate;
  infoMap.innerHTML = htmlMap;
  roomInfo.innerHTML = htmlCode;
};

let roomOrder = {};
