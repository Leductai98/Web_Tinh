 $(".filter__list").slick({
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
window.onready = async () => {
  if (window.innerWidth > 768) {
    prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>`;
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
  }
};
