/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./resources/assets/components/form/geo-point.js ***!
  \*******************************************************/
// 'use strict';
// class GeoPoint {
//   constructor() {
//     this.init();
//   }
//   init() {
//     let self = this;
//     self.center = [-11.5877763, -49.6350943];
//     console.log('geoPoints init...');
//     this.geoPoints = {};
//     let $geoPoints = $('.geo-point');
//     $geoPoints.each( function(idx, el)
//     {
//       console.log('geoPoint', el.dataset.name);
//       let name = el.dataset.name;
//       let ts = new Date().valueOf();
//       el.id = 'geoPoint'+ts;
//       let partes = name.split('-');
//       let lat = $(`[name=${partes[0]}]`).val();
//       let lng = $(`[name=${partes[1]}]`).val();
//       let zoom = 5;
//       if ( lat != '' )
//       {
//         self.center = [ lat, lng ];
//         zoom = 16;
//       }
//       let map = L.map(el.id).setView(self.center, zoom);
//       map.marker = L.marker(self.center).addTo(map);
//       self.geoPoints[name] = map;
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(map);
//       map.on('click', self.onMapClick.bind(self));
//     });
//   }
//   reinit() {
//     this.init();
//   }
//   onMapClick(e)
//   {
//     //console.log(e.latlng);
//     let name = e.target.getContainer().dataset.name;
//     this.geoPoints[name].marker.setLatLng(e.latlng);
//     let partes = name.split('-');
//     $(`[name=${partes[0]}]`).val(e.latlng.lat);
//     $(`[name=${partes[1]}]`).val(e.latlng.lng);
//     //console.log(`[name=${partes[0]}]`);
//   }
// }
// $(function () {
//   window.comp.geoPoint = new GeoPoint();
// });
/******/ })()
;