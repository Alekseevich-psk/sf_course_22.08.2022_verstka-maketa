"use strict";

console.log("test");
"use strict";

(function () {
  var parent = document.querySelector(".projects");
  if (!parent) return;
  var projectsAboutProject = parent.querySelectorAll(".projects__about-project");
  var projectsPicture = parent.querySelectorAll(".projects__picture");
  var projectsLi = parent.querySelectorAll(".projects__li");
  var projectsBtnTitle = parent.querySelectorAll(".projects__btn-title");
  var slArrowsSlArrow = parent.querySelectorAll(".sl-arrows__sl-arrow");
  var projectsArrow = parent.querySelectorAll(".projects__arrow");
  var lengthArrElem = projectsAboutProject.length;
  var activeSlide = 0;
  var arrElemActive = [projectsAboutProject, projectsPicture, projectsBtnTitle, projectsLi];
  var btnsItemForSlide = [projectsBtnTitle, projectsLi];
  var arrowsSlider = [slArrowsSlArrow, projectsArrow];
  onActiveSlide(arrElemActive, activeSlide);
  btnsItemForSlide.forEach(function (el) {
    el.forEach(function (subEl, i) {
      subEl.addEventListener("click", function () {
        offOldActiveSlide(arrElemActive, activeSlide);
        activeSlide = i;
        onActiveSlide(arrElemActive, activeSlide);
      });
    });
  });
  arrowsSlider.forEach(function (el) {
    el.forEach(function (subEl, i) {
      if (i == slArrowsSlArrow.length - 1) {
        subEl.addEventListener("click", function () {
          nextSlide();
        });
      } else {
        subEl.addEventListener("click", function () {
          prevSlide();
        });
      }
    });
  });

  function nextSlide() {
    offOldActiveSlide(arrElemActive, activeSlide);
    activeSlide++;
    if (activeSlide == lengthArrElem) activeSlide = 0;
    onActiveSlide(arrElemActive, activeSlide);
  }

  function prevSlide() {
    offOldActiveSlide(arrElemActive, activeSlide);
    activeSlide--;
    if (activeSlide == -1) activeSlide = lengthArrElem - 1;
    onActiveSlide(arrElemActive, activeSlide);
  }

  function onActiveSlide(arr, index) {
    arr.forEach(function (element) {
      element[index].classList.add("active");
    });
  }

  function offOldActiveSlide(arr, index) {
    arr.forEach(function (element) {
      element[index].classList.remove("active");
    });
  }
})();