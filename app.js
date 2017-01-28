ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 7
  });

  $.getJSON('objects.json', function(json) {
    json.forEach(function(object) {

      console.log(object.address)
      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + object.address + '&key=AIzaSyCRqyXLK2y1iYyFoGjqIFHPRzDZe85W-Tk', function(response) {
        if (response.results.length) {
          var location = response.results[0].geometry.location
          myMap.geoObjects.add(
            new ymaps.Placemark([location.lat, location.lng],
              {
                iconContent: object.title,
                balloonContent: object.content
              },
              {preset: 'islands#' + (object.color? object.color : 'green') + 'StretchyIcon'}
            )
          );
        } else {
          swal({
            type: 'error',
            title: 'Непонятный адрес',
            html: object.address
          });
        }
      });
    });
  }).fail(function(error) {
    swal({
      type: 'error',
      title: 'Ошибка в objects.json',
      html: 'Воспользуйся <a href="https://jsonformatter.curiousconcept.com/" target="_blank">https://jsonformatter.curiousconcept.com/</a> для поиска ошибки в файле'
    });
  })
}
