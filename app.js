ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/myIcon.gif',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  });

  myMap.geoObjects.add(myPlacemark);
});
