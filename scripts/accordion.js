console.log('Accordion cargado correctamente');
const dataAccordion = [{
  "title": "¿Cómo consultar disponibilidad de medicamentos?",
  "desc": "Ingrese al catálogo y revise la información mostrada en cada producto."
},
{
  "title": "¿Se realizan entregas a domicilio?",
  "desc": "Contamos con entregas para brindar una experencia más cómoda a nuestros clientes."
},
{
  "title": "¿Dónde estamos ubicados?",
  "desc": "Estamos ubicados en San José y Alajuela Centro."
},
{
  "title": "¿Cuáles son los horarios de atención?",
  "desc": "Lunes-Sábado: de 8:00am a 4:30pm."
}
];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();