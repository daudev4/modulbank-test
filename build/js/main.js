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

'use strict';

(function () {
  var features = document.querySelectorAll('.feature');

  var showProgress = function (element, value, circleLength) {
    var progress = value / 100;
    var dashoffset = circleLength * (1 - progress);

    element.style.strokeDashoffset = dashoffset;
  };

  Array.prototype.forEach.call(features, function (feature) {
    var featureProgress = feature.querySelector('.feature__progress');

    if (featureProgress) {
      var progressBar = feature.querySelector('.feature__progress-bar');
      var progressValue = feature.querySelector('.feature__progress-value');
      var barRadius = progressBar.getAttribute('r');
      var barProgress = Number.parseInt(progressValue.textContent, 10);

      var circleLength = 2 * Math.PI * barRadius;

      progressBar.style.strokeDasharray = circleLength;
      showProgress(progressBar, barProgress, circleLength);
    }
  });

})();
