// Nếu đăng nhập rồi thì user menu sẽ như dưới
let userLogin = [];
if (localStorage.getItem("login") != null) {
  userLogin = JSON.parse(localStorage.getItem("login"));
}
let user = document.getElementsByClassName("nav__button--user")[0];
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
// menu-user

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

//guest-menu

let reduceBtn = document.querySelectorAll(".item-right-reduce");
let increaseBtn = document.querySelectorAll(".item-right-increase");
let quantity = document.querySelectorAll(".item-right-quantity");
let guestAdultChild = document.querySelector(".guest-adult-child");

let guestBaby = document.querySelector(".guest-baby");

let guestPet = document.querySelector(".guest-pet");

let maxGuestNum = parseInt(quantity[0].dataset.max);

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
          if (count > 1) {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerHTML = adultNumber + " khách";
          }
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
        } else {
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
            guestAdultChild.innerHTML = adultNumber + " khách";
          } else {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerHTML = adultNumber + " khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantity[0].innerText) + parseInt(quantity[1].innerText);
            guestAdultChild.innerHTML = adultNumber + " khách";
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
//guest-menu-mobile
let reduceBtnMobile = document.querySelectorAll(".item-right-reduce-mobile");
let increaseBtnMobile = document.querySelectorAll(
  ".item-right-increase-mobile"
);
let quantityMobile = document.querySelectorAll(".item-right-quantity-mobile");
let guestAdultChildMobile = document.querySelector(".guest-adult-child-mobile");
let guestBabyMobile = document.querySelector(".guest-baby-mobile");
let guestPetMobile = document.querySelector(".guest-pet-mobile");
let maxGuestNumMobile = parseInt(quantityMobile[0].dataset.max);
Array.from(increaseBtnMobile).forEach((item) => {
  item.onclick = () => {
    for (let i = 0; i < quantityMobile.length; i++) {
      if (item.dataset.type == quantityMobile[i].dataset.type) {
        let max = quantityMobile[i].dataset.max;

        let text = quantityMobile[i].innerHTML;
        let count = Number(text);
        let adultNumberOne =
          parseInt(quantityMobile[0].innerText) +
          parseInt(quantityMobile[1].innerText) +
          1;

        if (item.dataset.type == "adult" || item.dataset.type == "child") {
          if (adultNumberOne > maxGuestNumMobile) {
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
            if (count == max || adultNumberOne == maxGuestNumMobile) {
              increaseBtnMobile[0].classList.add("disabled");
              increaseBtnMobile[1].classList.add("disabled");
            }
          }
          quantityMobile[i].innerHTML = count;
        }
        if (item.dataset.type == "baby") {
          if (count > 0) {
            guestBabyMobile.classList.add("active");
            guestBabyMobile.innerHTML = ", " + count + " em bé";
          }
        } else if (item.dataset.type == "pet") {
          if (count > 0) {
            guestPetMobile.classList.add("active");
            guestPetMobile.innerHTML = ", " + count + " thú cưng";
          }
        } else if (item.dataset.type == "adult") {
          if (count > 1) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          }
        }
      }
    }
    Array.from(quantityMobile).forEach((item1) => {
      if (item1.dataset.type != "adult") {
        let text = parseInt(item1.innerHTML);
        if (text > 0) {
          reduceBtnMobile.forEach((btn) => {
            if (btn.dataset.type == item1.dataset.type) {
              btn.classList.add("active");
            }
          });
        }
      } else {
        let text = parseInt(item1.innerHTML);
        if (text > 1) {
          reduceBtnMobile.forEach((btn) => {
            if (btn.dataset.type == item1.dataset.type) {
              btn.classList.add("active");
            }
          });
        }
      }
    });
  };
});
Array.from(reduceBtnMobile).forEach((item) => {
  item.onclick = (e) => {
    for (let i = 0; i < quantityMobile.length; i++) {
      if (item.dataset.type == quantityMobile[i].dataset.type) {
        let max = quantityMobile[i].dataset.max;
        let text = quantityMobile[i].innerHTML;
        let count = parseInt(text);
        let adultNumberOne =
          parseInt(quantityMobile[0].innerText) +
          parseInt(quantityMobile[1].innerText) -
          1;
        if (item.dataset.type == "adult" || item.dataset.type == "child") {
          if (adultNumberOne < maxGuestNumMobile) {
            increaseBtnMobile[0].classList.remove("disabled");
            increaseBtnMobile[1].classList.remove("disabled");
          }
        }
        if (item.dataset.type != "adult") {
          if (count == 0) return;
          else {
            count--;
            if (count < max && count > 0) {
              Array.from(increaseBtnMobile).forEach((increase) => {
                if (increase.dataset.type == quantityMobile[i].dataset.type) {
                  increase.classList.remove("disabled");
                }
              });
            }
            if (count == 0) {
              item.classList.remove("active");
              count = 0;
            }
            quantityMobile[i].innerHTML = count;
          }
        } else {
          if (count == 1) return;
          else {
            count--;
            if (count < max && count > 1) {
              Array.from(increaseBtnMobile).forEach((increase) => {
                if (increase.dataset.type == quantityMobile[i].dataset.type) {
                  increase.classList.remove("disabled");
                }
              });
            }
            if (count == 1) {
              item.classList.remove("active");
            }
            quantityMobile[i].innerHTML = count;
          }
        }
        if (item.dataset.type == "baby") {
          if (count > 0) {
            guestBabyMobile.classList.add("active");
            guestBabyMobile.innerHTML = ", " + count + " em bé";
          } else {
            guestBabyMobile.classList.remove("active");
          }
        } else if (item.dataset.type == "pet") {
          if (count > 0) {
            guestPetMobile.classList.add("active");
            guestPetMobile.innerHTML = ", " + count + " thú cưng";
          } else {
            guestPetMobile.classList.remove("active");
          }
        } else if (item.dataset.type == "adult") {
          if (count > 1) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          } else {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          } else {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) +
              parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerText = adultNumber + " " + "khách";
          }
        }
      }
    }
  };
});

//image-background-slider
let slider = 0;
let imageSlider = document.querySelectorAll(".image-slider");

setInterval(function () {
  if (imageSlider) {
    let lengthImageSlider = imageSlider.length;
    Array.from(imageSlider).forEach((item) => {
      item.classList.remove("active");
    });
    imageSlider[slider].classList.add("active");
    slider++;
    if (slider >= lengthImageSlider) {
      slider = 0;
    }
  }
}, 10000);

//range-price
let rangeInput = document.querySelectorAll(".range-input input");
let progress = document.querySelector(".range-price .progress");
let minNumber = document.querySelector(".min-price .input-min");
let maxNumber = document.querySelector(".max-price .input-max");
let rangePrice = document.querySelector(".range-price");
let minLength = 100000;
rangeInput.forEach((item, e) => {
  item.oninput = () => {
    rangePrice.classList.remove("disabled");
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < minLength) {
      if (item.className == "range-min") {
        minVal = maxVal - minLength;
        rangeInput[0].value = minVal;
      } else if (item.className == "range-max") {
        maxVal = minVal + minLength;
        rangeInput[1].value = maxVal;
      }
    } else {
      let percent =
        ((minVal - 500000) / (rangeInput[0].max - rangeInput[0].min)) * 100;
      let percent2 =
        100 -
        ((maxVal - 500000) / (rangeInput[1].max - rangeInput[1].min)) * 100;
      progress.style.left = percent + "%";
      minNumber.value = minVal;
      progress.style.right = percent2 + "%";
      maxNumber.value = maxVal;
    }
  };
});
minNumber.oninput = () => {
  let minNum = parseInt(minNumber.value);
  let maxNum = parseInt(maxNumber.value);
  if (maxNum - minNum < minLength) {
    minNum = maxNum - minLength;
  }
  if (minNum < 500000) {
    rangePrice.classList.add("disabled");
  } else {
    rangePrice.classList.remove("disabled");
  }
  rangeInput[0].value = minNum;
  let percent =
    ((minNum - 500000) / (rangeInput[0].max - rangeInput[0].min)) * 100;
  progress.style.left = percent + "%";
};
maxNumber.oninput = () => {
  let minNum = parseInt(minNumber.value);
  let maxNum = parseInt(maxNumber.value);
  if (maxNum - minNum < minLength) {
    maxNum = minNum + minLength;
  }
  if (maxNum > rangeInput[1].max) {
    rangePrice.classList.add("disabled");
  } else {
    rangePrice.classList.remove("disabled");
  }
  rangeInput[1].value = maxNum;
  let percent =
    100 - ((maxNum - 500000) / (rangeInput[1].max - rangeInput[1].min)) * 100;
  progress.style.right = percent + "%";
};

//booking-filter-house
let houseList = document.querySelectorAll(".house-item");
houseList.forEach((item) => {
  item.onmousedown = () => {
    item.style.scale = 0.9;
  };
  item.onmouseup = () => {
    item.style.scale = 1;
  };
});

//location-add-remove active
let overLayPc = document.querySelector(".location-menu-pc-overlay");
let overLayMobile = document.querySelector(".location-menu-overlay-mobile");
let inputLocationPc = document.querySelector(
  ".location-input-wrap-pc .header__search--location--input"
);
let inputLocationMobile = document.querySelector(
  ".location-input-wrap-mobile .input-location-mobile"
);
let locationMenuPc = document.querySelector(
  ".location-input-wrap-pc .location-menu"
);
let locationMenuMobile = document.querySelector(
  ".location-input-wrap-mobile .location-menu"
);
inputLocationPc.onclick = () => {
  locationMenuPc.classList.add("active");
  overLayPc.classList.add("active");
};
inputLocationMobile.onclick = () => {
  locationMenuMobile.classList.add("active");
  overLayMobile.classList.add("active");
};

overLayPc.onclick = () => {
  locationMenuPc.classList.remove("active");
  overLayPc.classList.remove("active");
};
overLayMobile.onclick = () => {
  overLayMobile.classList.remove("active");
  locationMenuMobile.classList.remove("active");
};

//location
const urlLocation = `https://api-sandy-zeta.vercel.app/location`;
let locationListMobile = document.querySelector(
  ".location-input-wrap-mobile .location-list"
);
let locationListPc = document.querySelector(
  ".location-input-wrap-pc .location-list"
);

const addClickLocation = () => {
  let locationItem = document.getElementsByClassName("location-item");
  let locationName = document.getElementsByClassName("location-item-text");
  for (let i = 0; i < locationItem.length; i++) {
    let result = locationName[i].innerText;
    locationItem[i].onclick = () => {
      inputLocationPc.value = result;
      inputLocationMobile.value = result;
      locationMenuPc.classList.remove("active");
      overLayPc.classList.remove("active");
      overLayMobile.classList.remove("active");
      locationMenuMobile.classList.remove("active");
    };
  }
};

const getLocation = async (API) => {
  try {
    const res = await axios.get(API);
    const data = res.data;
    showLocation(data);
    addClickLocation();
  } catch (error) {
    console.log(error);
  }
};

const showLocation = (data) => {
  let htmlCode = ``;
  data.map((value, index) => {
    htmlCode += `   <div class="location-item">
                          <div class="location-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              class="bi bi-geo-alt"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                              />
                              <path
                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                              />
                            </svg>
                          </div>
                          <div class="location-item-text">${value.name}</div>
                        </div>`;
  });
  locationListMobile.innerHTML = htmlCode;
  locationListPc.innerHTML = htmlCode;
};

const searchLocation = async (API) => {
  try {
    const res = await axios.get(API);
    const data = res.data;
    renderLocation(data);
    renderLocationMobile(data);
    addClickLocation();
  } catch (error) {
    console.log(error);
  }
};
const renderLocation = (data) => {
  let htmlCode = ``;
  data.map((value, index) => {
    let result = value.name.toLowerCase().split(" ").join("");
    let inputText = inputLocationPc.value.toLowerCase().split(" ").join("");
    if (result.includes(inputText)) {
      htmlCode += `   <div class="location-item">
                          <div class="location-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              class="bi bi-geo-alt"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                              />
                              <path
                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                              />
                            </svg>
                          </div>
                          <div class="location-item-text">${value.name}</div>
                        </div>`;
    }
  });
  locationListPc.innerHTML = htmlCode;
};
const renderLocationMobile = (data) => {
  let htmlCode = ``;
  data.map((value, index) => {
    let result = value.name.toLowerCase().split(" ").join("");
    let inputText = inputLocationMobile.value.toLowerCase().split(" ").join("");
    if (result.includes(inputText)) {
      htmlCode += `   <div class="location-item" >
                          <div class="location-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              class="bi bi-geo-alt"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                              />
                              <path
                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                              />
                            </svg>
                          </div>
                          <div class="location-item-text">${value.name}</div>
                        </div>`;
    }
  });
  locationListMobile.innerHTML = htmlCode;
};
inputLocationPc.onfocus = () => {
  if (inputLocationPc.value == "") {
    getLocation(urlLocation);
  }
};
inputLocationPc.oninput = () => {
  if (inputLocationPc.value != "") {
    searchLocation(urlLocation);
  }
};

inputLocationMobile.onfocus = () => {
  if (inputLocationMobile.value == "") {
    getLocation(urlLocation);
  }
};
inputLocationMobile.oninput = () => {
  if (inputLocationMobile.value != "") {
    searchLocation(urlLocation);
  }
};

//calendar
flatpickr("#start", {
  allowInput: true,
  plugins: [new rangePlugin({ input: "#end" })],
  minDate: "today",
});

flatpickr("#input-start-end", {
  allowInput: true,
  mode: "range",
  minDate: "today",
});

const urlFilter = `https://api-sandy-zeta.vercel.app/filter`;
const urlImage = `https://api-git-main-leductai98.vercel.app`;

//render-room
let numberRoomRender = 12;
let btnMoreRoom = document.querySelector(".btn__moreroom");
btnMoreRoom.onclick = () => {
  if (window.innerWidth > 1023) {
    numberRoomRender += 4;
    getRoomInfoSearch(urlRoom);
  } else {
    numberRoomRender += 4;
    getRoomInfoSearchMobile(urlRoom);
  }
};
let roomList = document.querySelector(".booking__room--list .row");
const urlRoom = `https://api-sandy-zeta.vercel.app/room-list`;
const urlRoomImage = `https://api-sandy-zeta.vercel.app`;

const getRoom = async (API) => {
  try {
    const res = await axios.get(API);
    const data = res.data;

    if (numberRoomRender >= data.length) {
      numberRoomRender = data.length;
      btnMoreRoom.style.display = "none";
    } else {
      btnMoreRoom.style.display = "flex";
    }
    renderRoom(data);
  } catch (error) {
    console.log(error);
  }
};
const renderRoomPicture = (picture) => {
  let htmlPicture = ``;
  for (let i = 0; i < 3; i++) {
    htmlPicture += `  <div class="swiper-slide">
                    <img
                      src="${urlImage + picture[i].link}"
                      alt=""
                    />
                  </div>`;
  }
  return htmlPicture;
};

const renderRoom = (data) => {
  let htmlPicture = ``;
  let htmlCode = ``;
  if (data.length == 0) {
    htmlCode = `<div class="no-room-fit">Không có phòng nào phù hợp</div>`;
  } else {
    for (let i = 0; i < numberRoomRender; i++) {
      let item = data[i];

      htmlPicture = renderRoomPicture(item.picture);
      htmlCode += `<div class="booking__room--list--item col l-3 m-6 c-12">
            <div class="booking__room-list-picture">
              <div class="swiper mySwiper">
                <div class="swiper-wrapper">${htmlPicture}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <a href="room_detail.html?id=${item.id}" style="display:block;text-decoration: none;color:inherit" class="list--item-wrap">
            <div class="booking__room--list--item--rate">
              <img src="img/Star.png" alt="" />
              <p>${item.rate}</p>
            </div>
            <div class="booking__room--list--item--name">
              ${item.name}
            </div>
            <div class="booking__room--list--item--des">
              ${item.status} | ${item.location}
            </div>
            <div class="booking__room--list--item--prices">
              <span>đ ${item.price}/</span>đêm
            </div>
            </a>
          </div>`;
    }
  }
  roomList.innerHTML = htmlCode;
  //swiper-carousel
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    /* loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
getRoom(urlRoom);

//filter-menu-type

let filterListType = document.querySelector(".filter__list");

const renderFilter = (data) => {
  let htmlCode = ``;
  data.map((item) => {
    htmlCode += ` <div class="filter__item swiper-slide" data-type="${
      item.name
    }">
          <div class="filter__item--picture">
            <img src="${urlImage + item.picture}" alt="" loanding="lazy" />
          </div>

          <div class="filter__item--des"><span>${item.name}</span></div>
        </div>`;
  });

  filterListType.innerHTML = htmlCode;
};
const getFilter = async (API) => {
  try {
    const res = await axios.get(API);
    const data = res.data;
    renderFilter(data);
  } catch (error) {
    console.log(error);
  }
};

const waitFilter = async () => {
  await getFilter(urlFilter);
  let filterFirstItem = document.querySelector(".filter__item");
  filterFirstItem.classList.add("active");

  var swiper = new Swiper(".filter", {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 7,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  });
  /* $(".filter__list").slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    cssEase: "linear",
    speed: 1000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  let prevBtn = document.getElementsByClassName("slick-prev")[0];
  let nextBtn = document.getElementsByClassName("slick-next")[0];
  if (innerWidth > 767) {
    prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>`;
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
  }*/
  let filterList = document.getElementsByClassName("filter__item");
  Array.from(filterList).map((item1) => {
    item1.onclick = () => {
      Array.from(filterList).forEach((item2) => {
        item2.classList.remove("active");
      });
      item1.classList.add("active");
      getRoomInfoSearch(urlRoom);
    };
  });
};
waitFilter();

/*const searchFilter = async (API) => {
  const res = await axios.get(API);
  const data = res.data;
  Array.from(filterList).forEach((item) => {
    item.onclick = () => {
      Array.from(filterList).forEach((item1) => {
        item1.classList.remove("active");
      });
      item.classList.add("active");
      let result = [];
      if (item.dataset.type == "Tất cả nhà") {
        result = data;
      } else {
        data.forEach((item1) => {
          if (item1.type == item.dataset.type) {
            result.push(item1);
          }
        });
      }
      numberRoomRender = 8;
      if (numberRoomRender >= result.length) {
        numberRoomRender = result.length;
        btnMoreRoom.style.display = "none";
      } else {
        btnMoreRoom.style.display = "flex";
      }
      renderRoom(result);
    };
  });
};
searchFilter(urlRoom);*/

//Search-all
let inputDayStart = document.querySelector(".input-start");
let inputDayEnd = document.querySelector(".input-end");
let btnSearch = document.querySelector(".header__search--button");
let inputStartEnd = document.querySelector("#input-start-end");
let btnSearchMobile = document.querySelector(".search-icon");
let priceMin = document.querySelector(".input-min");
let priceMax = document.querySelector(".input-max");
let checkBoxEntireHouse = document.querySelector("#entire-house");
let checkBoxPrivateHouse = document.querySelector("#private-house");
let checkBoxCommomHouse = document.querySelector("#commom-house");
let sleepRoomCount = document.querySelectorAll(".sleeproom-count");
let homeType = document.querySelector("#home");
let apartmentType = document.querySelector("#apartment");
let guestRoomType = document.querySelector("#guest-room");
let hotelType = document.querySelector("#hotel");
let thingsList = document.querySelectorAll(
  ".booking-filter-item-type-list.things input"
);
let filterList = document.getElementsByClassName("filter__item");
let bookingFilterBtn = document.querySelector(".booking-filter-button");
const getRoomInfoSearch = async (API) => {
  const res = await axios.get(API);
  const data = res.data;
  let result = data;
  for (let i = 0; i < data.length; i++) {
    if (inputLocationPc.value != "") {
      if (result[i].location != inputLocationPc.value) {
        result.splice(i, 1, "");
      }
    }
    if (inputDayStart.value != "") {
      if (Date.parse(result[i].start) > Date.parse(inputDayStart.value)) {
        result.splice(i, 1, "");
      }
    }
    if (inputDayEnd.value != "") {
      if (Date.parse(result[i].end) < Date.parse(inputDayEnd.value)) {
        result.splice(i, 1, "");
      }
    }
    if (parseInt(result[i].guest) < parseInt(guestAdultChild.innerText)) {
      result.splice(i, 1, "");
    }
  }
  let result1 = [];
  result.forEach((item) => {
    if (item != "") {
      result1.push(item);
    }
  });
  let result2 = [];
  Array.from(filterList).forEach((item) => {
    if (item.classList.contains("active")) {
      if (item.dataset.type == "Tất cả nhà") {
        result2 = result1;
      } else {
        result1.forEach((item1) => {
          if (item1.type == item.dataset.type) {
            result2.push(item1);
          }
        });
      }
    }
  });
  let result3 = [];
  result2.forEach((item) => {
    let price = item.price.split(",").join("");
    if (
      Number(price) >= Number(priceMin.value) &&
      Number(price) <= Number(priceMax.value)
    ) {
      result3.push(item);
    }
  });
  let result4 = [];
  result3.forEach((item) => {
    if (
      !checkBoxEntireHouse.checked &&
      !checkBoxPrivateHouse.checked &&
      !checkBoxCommomHouse.checked
    ) {
      result4 = result3;
    } else {
      if (checkBoxEntireHouse.checked) {
        if (item.status == "Toàn bộ nhà") {
          result4.push(item);
        }
      }
      if (checkBoxPrivateHouse.checked) {
        if (item.status == "Phòng riêng") {
          result4.push(item);
        }
      }
      if (checkBoxCommomHouse.checked) {
        if (item.status == "Phòng chung") {
          result4.push(item);
        }
      }
    }
  });
  let result5 = [];
  if (
    sleepRoomCount[0].checked &&
    sleepRoomCount[9].checked &&
    sleepRoomCount[18].checked
  ) {
    result5 = result4;
  } else {
    result4.forEach((item, index) => {
      result5 = result4;
      for (let i = 1; i < 9; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[0]) < i) {
            result5.splice(index, 1, " ");
          }
        }
      }
      for (let i = 10; i < 18; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[1]) < i - 9) {
            result5.splice(index, 1, " ");
          }
        }
      }
      for (let i = 19; i < 27; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[2]) < i - 18) {
            result5.splice(index, 1, " ");
          }
        }
      }
    });
  }
  let newResult5 = result5.filter((item) => {
    return item != " ";
  });
  let result6 = [];
  newResult5.forEach((item) => {
    if (
      !homeType.checked &&
      !apartmentType.checked &&
      !guestRoomType.checked &&
      !hotelType.checked
    ) {
      result6 = newResult5;
    } else {
      if (homeType.checked) {
        if (item.house == "Nhà") {
          result6.push(item);
        }
      }
      if (apartmentType.checked) {
        if (item.house == "Căn hộ") {
          result6.push(item);
        }
      }
      if (guestRoomType.checked) {
        if (item.house == "Nhà khách") {
          result6.push(item);
        }
      }
      if (hotelType.checked) {
        if (item.house == "Khách sạn") {
          result6.push(item);
        }
      }
    }
  });
  let result7 = [];
  result6.forEach((item, index) => {
    let n = 0;
    thingsList.forEach((item1) => {
      if (!item1.checked) {
        n++;
      }
    });
    if (n == 6) {
      result7 = result6;
    } else {
      result7 = result6;
      if (thingsList[0].checked) {
        let x = false;
        item.utinity.map((item2) => {
          if (item2.name == "Wi-fi") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[1].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Bếp") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[2].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Máy giặt") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[3].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Máy sấy quần áo") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[4].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Điều hòa nhiệt độ") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[5].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Hệ thống sưởi") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
    }
  });
  let result8 = result7.filter((item3) => {
    return item3 != " ";
  });
  if (result8.length > 12) {
    if (numberRoomRender >= result8.length) {
      numberRoomRender = result8.length;
      btnMoreRoom.style.display = "none";
    } else {
      if (numberRoomRender < 12) {
        numberRoomRender = 12;
      }
      btnMoreRoom.style.display = "flex";
    }
  } else {
    numberRoomRender = result8.length;
    btnMoreRoom.style.display = "none";
  }

  renderRoom(result8);
};

btnSearch.onclick = () => {
  getRoomInfoSearch(urlRoom);
};

const getRoomInfoSearchMobile = async (API) => {
  const res = await axios.get(API);
  const data = res.data;
  let dayStartMobile = inputStartEnd.value.split(" ")[0];
  let dayEndMobile = inputStartEnd.value.split(" ")[2];
  let result = data;
  for (let i = 0; i < data.length; i++) {
    if (inputLocationMobile.value != "") {
      if (result[i].location != inputLocationMobile.value) {
        result.splice(i, 1, "");
      }
    }
    if (inputStartEnd.value != "") {
      if (Date.parse(result[i].start) > Date.parse(dayStartMobile)) {
        result.splice(i, 1, "");
      }
    }
    if (inputStartEnd.value != "") {
      if (Date.parse(result[i].end) < Date.parse(dayEndMobile)) {
        result.splice(i, 1, "");
      }
    }
    if (parseInt(result[i].guest) < parseInt(guestAdultChildMobile.innerText)) {
      result.splice(i, 1, "");
    }
  }
  let result1 = [];
  result.forEach((item) => {
    if (item != "") {
      result1.push(item);
    }
  });
  let result2 = [];
  Array.from(filterList).forEach((item) => {
    if (item.classList.contains("active")) {
      if (item.dataset.type == "Tất cả nhà") {
        result2 = result1;
      } else {
        result1.forEach((item1) => {
          if (item1.type == item.dataset.type) {
            result2.push(item1);
          }
        });
      }
    }
  });
  let result3 = [];
  result2.forEach((item) => {
    let price = item.price.split(",").join("");
    if (
      Number(price) >= Number(priceMin.value) &&
      Number(price) <= Number(priceMax.value)
    ) {
      result3.push(item);
    }
  });
  let result4 = [];
  result3.forEach((item) => {
    if (
      !checkBoxEntireHouse.checked &&
      !checkBoxPrivateHouse.checked &&
      !checkBoxCommomHouse.checked
    ) {
      result4 = result3;
    } else {
      if (checkBoxEntireHouse.checked) {
        if (item.status == "Toàn bộ nhà") {
          result4.push(item);
        }
      }
      if (checkBoxPrivateHouse.checked) {
        if (item.status == "Phòng riêng") {
          result4.push(item);
        }
      }
      if (checkBoxCommomHouse.checked) {
        if (item.status == "Phòng chung") {
          result4.push(item);
        }
      }
    }
  });
  let result5 = [];
  if (
    sleepRoomCount[0].checked &&
    sleepRoomCount[9].checked &&
    sleepRoomCount[18].checked
  ) {
    result5 = result4;
  } else {
    result4.forEach((item, index) => {
      result5 = result4;
      for (let i = 1; i < 9; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[0]) < i) {
            result5.splice(index, 1, " ");
          }
        }
      }
      for (let i = 10; i < 18; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[1]) < i - 9) {
            result5.splice(index, 1, " ");
          }
        }
      }
      for (let i = 19; i < 27; i++) {
        if (sleepRoomCount[i].checked) {
          if (parseInt(item.room[2]) < i - 18) {
            result5.splice(index, 1, " ");
          }
        }
      }
    });
  }
  let newResult5 = result5.filter((item) => {
    return item != " ";
  });
  let result6 = [];
  newResult5.forEach((item) => {
    if (
      !homeType.checked &&
      !apartmentType.checked &&
      !guestRoomType.checked &&
      !hotelType.checked
    ) {
      result6 = newResult5;
    } else {
      if (homeType.checked) {
        if (item.house == "Nhà") {
          result6.push(item);
        }
      }
      if (apartmentType.checked) {
        if (item.house == "Căn hộ") {
          result6.push(item);
        }
      }
      if (guestRoomType.checked) {
        if (item.house == "Nhà khách") {
          result6.push(item);
        }
      }
      if (hotelType.checked) {
        if (item.house == "Khách sạn") {
          result6.push(item);
        }
      }
    }
  });
  let result7 = [];
  result6.forEach((item, index) => {
    let n = 0;
    thingsList.forEach((item1) => {
      if (!item1.checked) {
        n++;
      }
    });
    if (n == 6) {
      result7 = result6;
    } else {
      result7 = result6;
      if (thingsList[0].checked) {
        let x = false;
        item.utinity.map((item2) => {
          if (item2.name == "Wi-fi") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[1].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Bếp") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[2].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Máy giặt") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[3].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Máy sấy quần áo") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[4].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Điều hòa nhiệt độ") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
      if (thingsList[5].checked) {
        let x = false;
        item.utinity.forEach((item2) => {
          if (item2.name == "Hệ thống sưởi") {
            x = true;
          }
        });
        if (x == false) {
          result7.splice(index, 1, " ");
        }
      }
    }
  });
  let result8 = result7.filter((item3) => {
    return item3 != " ";
  });
  if (result8.length > 12) {
    if (numberRoomRender >= result8.length) {
      numberRoomRender = result8.length;
      btnMoreRoom.style.display = "none";
    } else {
      if (numberRoomRender < 12) {
        numberRoomRender = 12;
      }
      btnMoreRoom.style.display = "flex";
    }
  } else {
    numberRoomRender = result8.length;
    btnMoreRoom.style.display = "none";
  }

  renderRoom(result8);
};

btnSearchMobile.onclick = () => {
  getRoomInfoSearchMobile(urlRoom);
};

if (window.innerWidth < 768) {
  bookingFilterBtn.onclick = () => {
    getRoomInfoSearchMobile(urlRoom);
  };
} else {
  bookingFilterBtn.onclick = () => {
    getRoomInfoSearch(urlRoom);
  };
}
