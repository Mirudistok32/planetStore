document.addEventListener("DOMContentLoaded", () => {
  const mySlider = document.querySelector(".mySlider");
  const mySliderItems = document.querySelectorAll(".mySlider .mySliderItem");

  //buttons
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  //counter
  let counter = 0;
  const size = mySliderItems[0].clientWidth;

  const movingSlider = (counter) => {
    mySlider.style.transform = "translateX(" + -size * counter + "px)";
  };

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    mySlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    movingSlider(counter);
  });

  nextBtn.addEventListener("click", () => {
    if (counter >= mySliderItems.length - 1) return;
    mySlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    movingSlider(counter);
  });

  const svgChangeColor = (object) => {
    object.addEventListener("mousedown", () => {
      const svg = object.querySelector(" svg>path");
      svg.style.transition = "all 0.1s ease-in-out";
      svg.style.fill = "coral";
    });

    object.addEventListener("mouseup", () => {
      const svg = object.querySelector(" svg>path");
      svg.style.transition = "all 0.1s ease-in-out";
      svg.style.fill = "#e9e7e7";
    });
  };

  svgChangeColor(prevBtn);
  svgChangeColor(nextBtn);

  //Tabs
  const tabs = document.querySelectorAll("[data-tab]");
  const tabsContent = document.querySelectorAll("[data-tab-item]");

  tabs.forEach((e) => {
    e.addEventListener("click", () => {
      tabsContent.forEach((e) => {
        e.classList.remove("is-hidden");
      });
      tabs.forEach((e) => {
        e.classList.remove("is-active");
      });
      e.classList.add("is-active");

      // document.getElementById(e.dataset.tab).classList.add('is-hidden');
      tabsContent.forEach((i) => {
        if (i.dataset.tabItem === e.dataset.tab) {
          i.classList.add("is-hidden");
        }
      });
    });
  });

  const btnUpPage = document.querySelector(".btnUpPage");

  btnUpPage.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })

  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
      btnUpPage.style.display = "block";
    } else {
      btnUpPage.style.display = "none";
    }
  })
  

  
});
