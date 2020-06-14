
var button = document.querySelector(".big-button-brown");
    var popup = document.querySelector(".modal-show");
    var close = document.querySelector(".big-button-brown");
    var form = document.querySelector("form");
    var checkIn = document.querySelector("[name=check-in-date]");
    var checkOut = document.querySelector("[name=check-out-date]");
    var adults = document.querySelector("[name=adults]");
    var child = document.querySelector("[name=child]");
    var isStorageSupport = true;
    var storage = "";

    if (popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show");
      popup.classList.add("visually-hidden");
    }
    
    try {
      storage = localStorage.getItem("check-in-date");
    } catch (err) {
      isStorageSupport = false;
    }

    //слушаем большую коричневую кнопку
    button.addEventListener('click', function (evt) {
      
      evt.preventDefault();
      
      if (popup.classList.contains("visually-hidden")){
      popup.classList.remove("visually-hidden");
      popup.classList.add("modal-show");
      
      
      }
      else if(popup.classList.contains("modal-show")){
        popup.classList.remove("modal-show");
        popup.classList.add("visually-hidden");
        popup.classList.remove("modal-error");
        
       
      }
      if (storage) {
      checkIn.value = storage;
      checkOut.focus;
      }
      else{
        checkIn.focus();
      }
    //начали слушать клавиатуру
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
          popup.classList.add("visually-hidden");
        }
  
      }
    });  //закончили слушать клавиатуру  
    
  }); //завершили прослушивание кнопки

  form.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !adults.value || !child.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      /*popup.offsetWidth = popup.offsetWidth;*/
      alert ("введите данные в поля формы");
    }
    
    else {
      popup.classList.add("modal-error");
      if (isStorageSupport) {
        localStorage.setItem("check-in-date", checkIn.value);
        localStorage.setItem("check-out-date", checkOut.value);
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("child", child.value);
      }
    }
  
      
  });