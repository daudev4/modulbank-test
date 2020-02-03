'use strict';

(function () {
  var KEYCODE_ESC = 27;

  var popup = document.querySelector('.popup-js');
  var popupShowButton = document.querySelector('.popup-show-js');
  var popupCloseButton = popup.querySelector('.popup-close-js');

  var openPopup = function () {
    popup.classList.toggle('payment_show');
    popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    popup.classList.toggle('payment_show');
    popupCloseButton.removeEventListener('click', onPopupCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupCloseButtonClick = function (evt) {
    evt.preventDefault();
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      evt.preventDefault();
      closePopup();
    }
  };

  popupShowButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

})();
