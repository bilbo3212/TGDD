const addressForm = document.getElementById("address-form");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".btn-close-modal");
const btnSave = document.querySelector(".btn-save-modal");

//nav

const selectRegion = () => {
  addressForm.addEventListener("click", () => {
    modal.classList.remove("hide");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hide");
  });

  btnSave.addEventListener("click", () => {
    let addressName = document.querySelector(".address-name");
    let newName = document.getElementById("address-1").value;
    addressName.innerHTML = newName;
    modal.classList.add("hide");
  });
};

//main
const btnNext = document.querySelector(".btn__next");
const btnPrev = document.querySelector(".btn__prev");
var index = 0;
const numberImg = document.querySelectorAll(".slide__item").length;

console.log(numberImg);
const handleSlider = () => {
  setTimeout(() => {
    index = index + 1;
    if (index > numberImg - 1) {
      index = 0;
    }
    document.querySelector(".main__slide").style.right = index * 100 + "%";
  }, 2000);

  btnNext.addEventListener("click", () => {
    index = index + 1;
    if (index > numberImg - 1) {
      index = 0;
    }
    document.querySelector(".main__slide").style.right = index * 100 + "%";
  });
  btnPrev.addEventListener("click", () => {
    index = index - 1;
    if (index <= 0) {
      index = 0;
    }
    document.querySelector(".main__slide").style.right = index * 100 + "%";
  });
};

//start
const main = () => {
  selectRegion();
  handleSlider();
};

main();
