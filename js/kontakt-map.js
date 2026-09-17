(function () {
  var el = document.getElementById('kontakt-map');
  if (!el || typeof L === 'undefined') return;

  var coords = [47.5674193, 9.1077893];

  var map = L.map(el, {
    scrollWheelZoom: false,
    attributionControl: false,
  }).setView(coords, 16);

  L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_3oc2_1_01c742f61349e0a1d5f3117f', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(map);

  var marker = L.circleMarker(coords, {
    radius: 7,
    color: '#fff',
    weight: 2,
    fillColor: '#7a1c1a',
    fillOpacity: 1
  }).addTo(map);

  marker.bindTooltip('Cityhaus', {
    permanent: true,
    direction: 'right',
    offset: [10, 0],
    className: 'cityhaus-map-label'
  }).openTooltip();
})();
