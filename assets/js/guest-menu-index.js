//guest-menu

let reduceBtnMobile = document.querySelectorAll(".item-right-reduce-mobile");
let increaseBtnMobile = document.querySelectorAll(".item-right-increase-mobile");
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
        console.log(max);
        let text = quantityMobile[i].innerHTML;
        let count = Number(text);
        let adultNumberOne =
          parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText) + 1;

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
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
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
          parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText) - 1;
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
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          } else {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          }
        } else {
          if (count > 0) {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerHTML = adultNumber + " khách";
          } else {
            let adultNumber =
              parseInt(quantityMobile[0].innerText) + parseInt(quantityMobile[1].innerText);
            guestAdultChildMobile.innerText = adultNumber + " " + "khách";
          }
        }
      }
    }
  };
});
