 var myMap;

ymaps.ready(init);

var places=[];

     function addCent() {
     var myCPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [44.9000, 34.0611],[44.90, 34.10],[44.90, 34.13],[44.92, 34.15],[44.95, 34.13],[44.95, 34.10]
            
        ],
        // Координаты вершин внутреннего контура.
        [
            [55.75, 37.52],
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Центральный"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0033',
        // Ширина обводки.
        strokeWidth: 2
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myCPolygon);
    }


    function addZHd() {
    var myZPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [44.97, 34.10],[44.96, 34.09],[44.95, 34.10],[44.90, 34.06],[44.94, 34.03],[44.98, 34.07],[44.99, 34.08]
        ],
        // Координаты вершин внутреннего контура.
        [
            [55.75, 37.52],
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Железнодорожный"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF5533',
        // Ширина обводки.
        strokeWidth: 2
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myZPolygon);
    }

    function addKiev() {
      var myKPolygon = new ymaps.Polygon([
          // Указываем координаты вершин многоугольника.
          // Координаты вершин внешнего контура.
          [
              [44.97, 34.10],[44.96, 34.09],[44.95, 34.10],[44.95, 34.13],[44.92, 34.15],[44.95, 34.20],[44.97, 34.20],[45.00, 34.17],[45.01, 34.12]
          ],
          // Координаты вершин внутреннего контура.
          [
              [55.75, 37.52],
          ]
      ], {
          // Описываем свойства геообъекта.
          // Содержимое балуна.
          hintContent: "Киевский"
      }, {
          // Задаем опции геообъекта.
          // Цвет заливки.
          fillColor: '#00FF9933',
          // Ширина обводки.
          strokeWidth: 2
      });

      // Добавляем многоугольник на карту.
      myMap.geoObjects.add(myKPolygon);
    }


function init() {
    myMap = new ymaps.Map("map", {
            center: [44.958375, 34.110022],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        })

 //   addKiev();     addZHd();     addCent();
    

     myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            console.log(places[places.length-1]);
            places.push({'a':coords[0].toPrecision(4), 'b':coords[1].toPrecision(4)});
            myMap.balloon.open(coords, {
                contentHeader:'Событие!',
                contentBody:'<p>Кто-то щелкнул по карте.</p>' +
                    '<p>Координаты щелчка: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Щелкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });

    myZPolygon.options.fillColor = '#FFff00EE';
    myMap.removeAll;

    // Обработка события, возникающего при щелчке
    // правой кнопки мыши в любой точке карты.
    // При возникновении такого события покажем всплывающую подсказку
    // в точке щелчка.
    myMap.events.add('contextmenu', function (e) {
        myMap.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
        var s;
        var i;
        i = places.length-1;
        while (i) {
         s+='['+places[i].a+', '+places[i].b+'],';
         i--;
        }
        console.log(s);
    });
    
    // Скрываем хинт при открытии балуна.
    myMap.events.add('balloonopen', function (e) {
        myMap.hint.close();
    });
}

   
