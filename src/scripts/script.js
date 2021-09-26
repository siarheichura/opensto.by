// Создание карты

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [53.94038081294873, 27.596907882932577],
    zoom: 17,
  });
}
