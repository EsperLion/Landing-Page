app.directive('headerMenu', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/tplHeader.html'
  };
});

app.directive('feedbackForm', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/tplFeedbackForm.html'
  };
});

app.directive('footerDir', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/tplFooter.html'
  };
});

app.directive('popUp', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/tplFeedbackPopUp.html'
  };
});