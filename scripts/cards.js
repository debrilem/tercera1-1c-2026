console.log('Cards cargado correctamente');
const dataCards = [{
  "title": "Medicamentos",
  "url_image": "./img/medicamentos.jpg",
  "desc":"Encuentra productos para aliviar síntomas comunes.",
  "cta": "Ver productos",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Vitaminas y suplementos",
  "url_image": "./img/suplementos.jpg",
  "desc": "Apoyo para su energía y bienestar diario.",
  "cta": "Ver productos",
  "link": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipq6zInbblAhUInFkKHSYwCMkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fwhen-a-passion-for-videogames-helps-land-that-job-11551888001&psig=AOvVaw2cvigcMN-U27d5xC22PpZw&ust=1572050615969380"
},
{
  "title": "Cuidado personal",
  "url_image": "./img/cuidado.jpg",
  "desc": "Higiene y cuidado corporal.",
  "cta": "Ver productos",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Cuidado infantil",
  "url_image": "./img/infantil.jpg",
  "desc": "Productos orientados al cuidado de bebés y niños.",
  "cta": "Ver productos",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Control y monitoreo",
  "url_image": "./img/control.jpg",
  "desc": "Herramientas y productos orientadeos al seguimiento básico de indicadores de salud.",
  "cta": "Ver productos",
  "link": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipq6zInbblAhUInFkKHSYwCMkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fwhen-a-passion-for-videogames-helps-land-that-job-11551888001&psig=AOvVaw2cvigcMN-U27d5xC22PpZw&ust=1572050615969380"
},
{
  "title": "Escenciales en su botiquín",
  "url_image": "./img/botiquin.jpg",
  "desc": "Artículos básicos para la atención inicial de situaciones cotidianas.",
  "cta": "Ver productos",
  "link": "https://las.leagueoflegends.com/es/news/game-updates/features/pase-beta-de-tft-v3-proximamente"
}];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();