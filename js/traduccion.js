var euskera = false;

function botonEus() {
  $(".baserris-km0").text("KM0 BASERRIAK");
  $(".juega-y-gana").text("JOKATU ETA IRABASI");
  $(".la-leche").text("GURE BASERRIETAKO ESNEA");
  $(".recogemos").html(
    "Egunero biltzen dugu esnea gure baserrietan, eta hain gertu daude ontziratzeko instalaziotik, non esnea zapore eta propietate guztiekin iristen baita. <span> Deskubritu zein hurbil gauden zugandik eta irabazi urtebeteko esnea doan gure jokoarekin.</span>"
  );
  $(".cta-1").text("Ikusi hurbilen dagoen baserria");
  $(".cta-2").text("Jokatu eta irabazi");
  $(".nuestros").text("GURE BASERRIAK ZUGANDIK OSO GERTU DAUDE");

  $(".de-proximidad").text(
    "Aurkitu zure eskualdean dauden baserriak eta ikusiko duzu zein hurbil dauden zugandik!"
  );
  $(".introduce").attr("placeholder", "Sartu hemen zure posta kodea"),
    $(".boton-formulario").text("Ezagutu");
  $(".boton-atras").text("Mapa osoa ikusi");
  $("#boton-bizkaia").text("Ikusi Bizkaiko mapa");
  $("#boton-gipuzkoa").text("Ikusi Gipuzkoako mapa");
  $("#boton-araba").text("Ikusi Arabako mapa");
  $("#boton-nafarroa").text("Ikusi Nafarroako mapa");
  $(".juega").text("IRABAZI URTEBETEKO ESNEA DOAN");
  $(".participa").text(
    "Parte hartu gure jokoan eta irabazi urtebeteko esnea doan."
  );
  $(".lecheSostenible").text("EKOIZPEN JASANGARRIKO ESNEA");
  $(".compromiso").text("Horixe da gure konpromisoa");
  $(".bienestar").text("1. Animalien ongizatea");
  $(".cuidamos").text(
    "Gure behiak ondo zaintzen ditugu eta haien ongizateaz arduratzen gara."
  );
  $(".cercania").text("2. Hurbiltasuna");
  $(".diario").text(
    "Esnea egunero biltzen dugu eta 8 ordu baino gutxiagoan ontziratze-instalazioetan dago."
  );
  $(".entorno").text("3. Gure ingurua zaintzen dugu");
  $(".gracias").text(
    "Egiten dugun lanari esker, paisaiak ezagutzen ditugun bezala mantentzea lortzen dugu."
  );
  $(".trato").text("4. Berdintasunezko tratua");
  $(".ademas").text(
    "Gainera, Kaiku kooperatiban abeltzain guztiok garrantzi bera dugu, handiek zein txikiek."
  );
  $(".copyright").text(
    "??2021. Kaiku elikadura Korporazioa. Erreserbatutako eskubide guztiak"
  );
  $(".politicaPrivacidad").html(
    '<a class="legal" key="legal" href="https://kaikukm0.eus/eu/lege-oharra" target="_blank">Lege oharra</a><a class="privacidad" key="privacidad" href="https://kaikukm0.eus/eu/pribatutasun-politika" target="_blank">Pribatasun politika</a><a class="cookies" key="cookies" href="https://kaikukm0.eus/eu/cookie-politika" target="_blank">Cookie politika</a>'
  );

  $(".texto-urolakosta").text(
    "Urola Kostan 51 ustiategi baino gehiago daude, non 105 familia baino gehiagok lan egiten dute. Biltzen dugun esneak ordu erdi baino gutxiago egiten du ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-tolosaldea").text(
    "Tolosaldean 34 ustiategi baino gehiago daude , non 60 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 20 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-debabarrena").text(
    "Debabarrenan 7 ustiategi baino gehiago daude , non 20 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 60 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-goierri").text(
    "Goierrin 10 ustiategi baino gehiago daude , non 15 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 40 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-donostialdea").text(
    "Donostialean 23 ustiategi baino gehiago daude , non 50 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 15-30 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-debagoiena").text(
    "Debagoienan 2 ustiategi baino gehiago daude , non 5 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 70 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-bidasoa").text(
    "Bidasoa-Txingudin kooperatibako 7 ustiategi baino gehiago daude , non 15 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 30 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-gazteiz").text(
    "Agurainen eta Gasteizen Kaiku kooperatibako 7 ustiategi baino gehiago daude , non 15 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 75 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-a-a-a").text(
    "A??ana eta Ayalan Kaiku kooperatibako 20 ustiategi baino gehiago daude , non 50 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 100 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-zuia").text(
    "Zuian Kaiku kooperatibako 15 ustiategi baino gehiago daude , non 40 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 100 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-enkarterriak").text(
    "Enkarterrietan kooperatibako 16 ustiategi baino gehiago daude , non 40 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 159 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-bilbao").text(
    "Bilbo Handian kooperatibako 11 ustiategi baino gehiago daude , non 25 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 115 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-baztan").text(
    "Baztan-Bidasoan kooperatibako 40 ustiategi baino gehiago daude , non 80 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 50-70 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );
  $(".texto-mendialdea").text(
    "Mendialdean, Sakanan eta Irunerrian kooperatibako 38 ustiategi baino gehiago daude , non 70 familia baino gehiagok lan egiten dute. Biltzen dugun esneak 50-70 KM baino ez ditu egiten ustiategitik ontziratze-plantara, gutxi gora behera. Horregaitik, hurbiltasun hori dela eta, kalitate eta zapore handiko esne freskoago bat lortzen dugu."
  );

  $("#es").removeClass("bold");
  $("#es").addClass("light");
  $("#eu").removeClass("light");
  $("#eu").addClass("bold");
  euskera = true;
}

function botonEs() {
  $(".baserris-km0").text("BASERRIS KM0");
  $(".juega-y-gana").text("JUEGA Y GANA");
  $(".la-leche").text("LA LECHE DE NUESTROS BASERRIS");
  $(".recogemos").html(
    "Recogemos la leche cada d??a en nuestros baserris y recorre tan pocos KM hasta la planta de envasado que llega con todas sus propiedades y todo su sabor. <span> Descubre donde est?? tu baserri m??s cercano y juega y gana con nuestro quizz.</span>"
  );
  $(".cta-1").text("Ver baserri m??s cercano");
  $(".cta-2").text("Hacer quizz");
  $(".nuestros").text("NUESTROS BASERRIS EST??N MUY CERCA DE TI");
  $(".de-proximidad").text(
    "La leche Kaiku Km0 es de proximidad: en tu comarca, se recoge en estos baserris que ves en este mapa y proviene de vacas que se alimentan de nuestros pastos. ??Descubre tu baserri m??s cercano!"
  );
  $(".introduce").attr("placeholder", "Introduce aqu?? tu c??digo postal"),
  $(".boton-formulario").text("Descubre");
  $(".boton-atras").text("Ver mapa completo");
  $("#boton-bizkaia").text("Ver mapa de Bizkaia");
  $("#boton-gipuzkoa").text("Ver mapa de Gipuzkoa");
  $("#boton-araba").text("Ver mapa de Araba");
  $("#boton-nafarroa").text("Ver mapa de Nafarroa");
  $(".juega").text("GANA UN A??O DE LECHE GRATIS");
  $(".participa").text(
    "Participa en nuestro juego y gana un a??o de leche gratis."
  );
  $(".lecheSostenible").text("LECHE DE PRODUCCI??N SOSTENIBLE");
  $(".compromiso").text("Este es nuestro compromiso");
  $(".bienestar").text("1. Bienestar animal");
  $(".cuidamos").text(
    "Cuidamos a nuestras vacas con mimo y nos preocupamos por su bienestar."
  );
  $(".cercania").text("2. Cercan??a");
  $(".diario").text(
    "Recogemos la leche a diario y en menos de 8h est?? en la planta de envasado."
  );
  $(".entorno").text("3. Cuidamos nuestro entorno");
  $(".gracias").text(
    "Gracias al trabajo que realizamos conseguimos mantener los paisajes tal y como los conocemos."
  );
  $(".trato").text("4. Trato igualitario");
  $(".ademas").text(
    "Adem??s, en la cooperativa Kaiku todos los ganaderos contamos por igual, grandes y peque??os."
  );
  $(".copyright").text(
    "??Kaiku Corporaci??n Alimentaria. Todos los derechos reservados"
  );
  $(".politicaPrivacidad").html(
    '<a class="legal" key="legal" href="https://kaikukm0.eus/aviso-legal" target="_blank">Aviso legal</a><a class="privacidad" key="privacidad" href="https://kaikukm0.eus/politica-de-privacidad" target="_blank">Pol??tica de privacidad</a><a class="cookies" key="cookies" href="https://kaikukm0.eus/cookies" target="_blank">Pol??tica de cookies</a>'
  );

  $(".texto-urolakosta").text(
    "En Urola Kosta hay m??s de 51 ganader??as de la cooperativa Kaiku donde trabajan m??s de 105 familias. La leche que recogemos, llega en menos de media hora hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-tolosaldea").text(
    "En Tolosaldea hay m??s de 34 ganader??as de la cooperativa Kaiku donde trabajan m??s de 60 familias. La leche que recogemos, ??nicamente recorre alrededor de 20 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-debabarrena").text(
    "En Debabarrena hay m??s de 7 ganader??as de la cooperativa Kaiku donde trabajan m??s de 20 familias. La leche que recogemos, ??nicamente recorre alrededor de 60 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-goierri").text(
    "En Goierri hay m??s de 10 ganader??as de la cooperativa Kaiku donde trabajan m??s de 15 familias. La leche que recogemos, ??nicamente recorre alrededor de 40  kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-donostialdea").text(
    "En Donostialdea hay m??s de 23 ganader??as de la cooperativa Kaiku donde trabajan m??s de 50 familias. La leche que recogemos, ??nicamente recorre alrededor de entre 15-30  kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-debagoiena").text(
    "En Debagoiena hay m??s de 2 ganader??as de la cooperativa Kaiku donde trabajan m??s de 5 familias. La leche que recogemos, ??nicamente recorre alrededor de 70 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-bidasoa").text(
    "En Bidasoa-Txingudi hay m??s de 7 ganader??as de la cooperativa Kaiku donde trabajan m??s de 15 familias. La leche que recogemos, ??nicamente recorre alrededor de 30 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-gazteiz").text(
    "En Agurain y Gasteiz hay m??s de 7 ganader??as de la cooperativa Kaiku donde trabajan m??s de 15 familias. La leche que recogemos, ??nicamente recorre alrededor de 75 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-a-a-a").text(
    "En A??ana y Ayala hay m??s de 20 ganader??as de la cooperativa Kaiku donde trabajan m??s de 50 familias. La leche que recogemos, ??nicamente recorre alrededor de 100 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-zuia").text(
    "En Zuia (Gorbeialdea) hay m??s de 15 ganader??as de la cooperativa Kaiku donde trabajan m??s de 40 familias. La leche que recogemos, ??nicamente recorre alrededor de 100 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-enkarterriak").text(
    "En Enkarterriak hay m??s de 16 ganader??as de la cooperativa Kaiku donde trabajan m??s de 40 familias. La leche que recogemos, ??nicamente recorre alrededor de 159 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-bilbao").text(
    "En Gran Bilbao hay m??s de 11 ganader??as de la cooperativa Kaiku donde trabajan m??s de 25 familias. La leche que recogemos, ??nicamente recorre alrededor de 115 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-baztan").text(
    "En Baztan-Bidasoa hay m??s de 40 ganader??as de la cooperativa Kaiku donde trabajan m??s de 80 familias. La leche que recogemos, ??nicamente recorre alrededor de entre 50-70 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );
  $(".texto-mendialdea").text(
    "En la Monta??a, la Sakana  y Cuenca de Pamplona hay m??s de 38 ganader??as de la cooperativa Kaiku donde trabajan m??s de 70 familias. La leche que recogemos, ??nicamente recorre alrededor de entre 50-70 kil??metros de distancia hasta la planta de envasado. Por eso, debido a la cercan??a, conseguimos una leche m??s fresca, de alta calidad y sabor."
  );

  $("#eu").removeClass("bold");
  $("#eu").addClass("light");
  $("#es").removeClass("light");
  $("#es").addClass("bold");
  euskera = false;
}
