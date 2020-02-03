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
