'use strict';

(function () {
  var URL = 'https://api.hackathon.xe-xe.org/swagger.json';

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        main.removeChild(loadPic);
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout / 1000 + 'с');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };

  window.load(
      function (blocks) {
        window.data(blocks);
      },
      function (message) {
        var errorPopup = document.querySelector('.error-popup')
          .content
          .querySelector('.error-popup');
        errorPopup.querySelector('.error-title').textContent = message;
        errorPopup.classList.remove('hidden');
      }
  );

})();
