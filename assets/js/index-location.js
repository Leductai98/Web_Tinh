const urlLocation = `https://api-sandy-zeta.vercel.app/location`;
let locationListMobile = document.querySelector(".location-list");
let locationListPc = document.querySelector(
  ".location-input-wrap-pc .location-list"
);
let inputLocationPc = document.querySelector(".location-input-wrap-pc input");
let inputLocationMobile = document.querySelector(
  ".location-input-wrap-mobile input"
);

const getLocation = async (API) => {
  try {
    const res = await axios.get(API);
    const data = res.data;
    showLocationMobile(data);
    addClickLocation();
  } catch (error) {
    console.log(error);
  }
};

const showLocationMobile = (data) => {
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

};

const addClickLocation = () => {
  let locationItem = document.getElementsByClassName("location-item");
  let locationName = document.getElementsByClassName("location-item-text");
  for (i = 0; i < locationItem.length; i++) {
    let result = locationName[i].innerText;
    locationItem[i].onclick = () => {
      inputLocationPc.value = result;
      inputLocationMobile.value = result;
    };
  }
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
  locationListMobile.innerHTML = htmlCode;
};
inputLocationPc.oninput = () => {
  if (inputLocationPc.value != "") {
    searchLocation(urlLocation);
  }
};
inputLocationPc.onfocus = () => {
  if (inputLocationPc.value == "") {
    getLocation(urlLocation);
  }
};
inputLocationMobile.oninput = () => {
  if (inputLocationMobile.value != "") {
    searchLocation(urlLocation);
  }
};
inputLocationMobile.onfocus = () => {
  if (inputLocationMobile.value == "") {
    getLocation(urlLocation);
  }
};
