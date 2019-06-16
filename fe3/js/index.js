'use strict';

(function () {
  var form = document.querySelector('form');
  var map = document.querySelector('.map-result');
  var frame = document.querySelector('iframe');
  var newFrame = document.createElement('iframe');

  newFrame.src='https://yandex.ru/map-widget/v1/-/CCSZiB-m';
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var data = [
      {   
        name: document.querySelector('input[name="age"]:checked').name,
        value: document.querySelector('input[name="age"]:checked').value
      },
      {
        name: document.querySelector('input[name="family"]:checked').name,
        value: document.querySelector('input[name="family"]:checked').value
      },
      {
        name: document.getElementById('kidsnumber').name,
        value: document.getElementById('kidsnumber').value
      }


    ];
    console.log(data);
    map.removeChild(frame);
    map.appendChild(newFrame);
    return false;
  });  
})();
