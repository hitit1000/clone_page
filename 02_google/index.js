const clearBtn = document.querySelector(".iconx");
const input = document.querySelector(".search__input");

const clickEvent = () => {
  input.value = "";
  clearBtn.classList.add("hidden");
};

const changeEvent = (event) => {
  if (event.target.value === "") {
    clearBtn.classList.add("hidden");
  } else {
    clearBtn.classList.remove("hidden");
  }
};

clearBtn.addEventListener("click", clickEvent);
input.addEventListener("input", changeEvent);
