var link = document.querySelector(".login-link");

var popup = document.querySelector(".form");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");

var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=mail]");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("form-show");

	if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("form-show");
    popup.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("form-show")) {
        popup.classList.remove("form-show");
        popup.classList.remove("modal-error");
      }
    }
  });