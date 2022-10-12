(function () {
    const parent = document.querySelector(".projects");
    if (!parent) return;

    const projectsAboutProject = parent.querySelectorAll(".projects__about-project");
    const projectsPicture = parent.querySelectorAll(".projects__picture");
    const projectsLi = parent.querySelectorAll(".projects__li");
    const projectsBtnTitle = parent.querySelectorAll(".projects__btn-title");
    const slArrowsSlArrow = parent.querySelectorAll(".sl-arrows__sl-arrow");
    const projectsArrow = parent.querySelectorAll(".projects__arrow");

    const lengthArrElem = projectsAboutProject.length;
    let activeSlide = 0;

    const arrElemActive = [projectsAboutProject, projectsPicture, projectsBtnTitle, projectsLi];
    const btnsItemForSlide = [projectsBtnTitle, projectsLi];
    const arrowsSlider = [slArrowsSlArrow, projectsArrow];

    onActiveSlide(arrElemActive, activeSlide);

    btnsItemForSlide.forEach((el) => {
        el.forEach((subEl, i) => {
            subEl.addEventListener("click", function () {
                offOldActiveSlide(arrElemActive, activeSlide);
                activeSlide = i;
                onActiveSlide(arrElemActive, activeSlide);
            });
        });
    });

    arrowsSlider.forEach(el => {
        el.forEach((subEl, i) => {
            if (i == slArrowsSlArrow.length - 1) {
                subEl.addEventListener("click", () => {
                    nextSlide();
                });
            } else {
                subEl.addEventListener("click", () => {
                    prevSlide();
                });
            }
        });
    })

    function nextSlide() {
        offOldActiveSlide(arrElemActive, activeSlide);
        activeSlide++;
        if (activeSlide == lengthArrElem) activeSlide = 0;
        onActiveSlide(arrElemActive, activeSlide);
    }

    function prevSlide() {
        offOldActiveSlide(arrElemActive, activeSlide);
        activeSlide--;
        if (activeSlide == -1) activeSlide = (lengthArrElem - 1);
        onActiveSlide(arrElemActive, activeSlide);
    }

    function onActiveSlide(arr, index) {
        arr.forEach((element) => {
            element[index].classList.add("active");
        });
    }

    function offOldActiveSlide(arr, index) {
        arr.forEach((element) => {
            element[index].classList.remove("active");
        });
    }
})();
