import logo1 from "../../assets/Sanmiguel/MiTercerLugar/logo.jpg"
import logo2 from "../../assets/Sanmiguel/PachaInti/logo.jpg"
import logo3 from "../../assets/Sanmiguel/EnLounge&Bar/logo.jpg"
import logo4 from "../../assets/Sanmiguel/FestivalSanMiguel/logo.jpg"
import logo5 from "../../assets/Sanmiguel/Sopranos31/logo.jpg"
import logo6 from "../../assets/Sanmiguel/Sopranos16/logo.jpg"
import logo7 from "../../assets/Sanmiguel/Rustica/logo.jpg"
import logo8 from "../../assets/Sanmiguel/FridayS/logo.jpg"
import logo9 from "../../assets/Sanmiguel/FridaysO/logo.jpg"
import logo10 from "../../assets/Sanmiguel/Chilis/logo.png"

import logo11 from "../../assets/Miraflores/wahios/logo.jpg"
import logo12 from "../../assets/Miraflores/mollysIrishBar&Restobar/logo.jpg"
import logo13 from "../../assets/Miraflores/laCachinaBar/logo.jpg"
import logo14 from "../../assets/Miraflores/elInfusionista/logo.jpg"
import logo15 from "../../assets/Miraflores/barPublico/logo.jpg"

import logo16 from "../../assets/Barranco/barrancoBar/logo.jpg"
import logo17 from "../../assets/Barranco/garrison/logo.jpg"
import logo18 from "../../assets/Barranco/laPosadaDelMirador/logo.jpg"
import logo19 from "../../assets/Barranco/aguaBenditaBar/logo.jpg"
import logo20 from "../../assets/Barranco/ayahuasca/logo.png"

import logo21 from "../../assets/Chancay/img/kaemalogo.jpg"
import logo22 from "../../assets/Chancay/img/waikylogo.png"
import logo23 from "../../assets/Chancay/img/lahuertaencantadalogo.png"
import logo24 from "../../assets/Chancay/img/lobitologo.png"

import logo25 from "../../assets/Huaral/img/legonlogo.png"
import logo26 from "../../assets/Huaral/img/gothiklogo.jpg"
import logo27 from "../../assets/Huaral/img/casaviejalogo.png"

import logo61 from "../../assets/PuebloLibre/theClubLima/logo.jpg"

export const db = [
  {
    establecimiento: "bar",
    id: 1,
    distrito: "san miguel",
    nombre: "Mi tercer lugar",
    direccion: "Av. La Mar 2261, San Miguel ",
    logo: logo1,
    carta: "https://www.mitercerlugar.com.pe/static/documentos/carta.pdf",//si es que hay
    horario: {
      lun: "5:00pm a 11:00pm",
      mar: "5:00pm a 11:00pm",
      mie: "5:00pm a 11:00pm",
      jue: "4:00pm 11:00pm",
      vie: "4:00pm a 11:00pm",
      sab: "4:00pm a 11:00pm",
      dom: "5:00pm a 11:00pm"
    },
    fotos: [],
    web: "https://www.mitercerlugar.com.pe/"

  },
  {
    establecimiento: "bar",
    id: 2,
    distrito: "san miguel",
    nombre: "EN lounge & bar",
    direccion: "Av. Riva Agüero 754, San Miguel",
    logo: logo3,
    carta: "",//si es que hay
    horario: {
      lun: "5:00pm a 01:00am",
      mar: "5:00pm a 01:00am",
      mie: "5:00pm a 01:00am",
      jue: "5:00pm a 01:00am",
      vie: "5:00pm a 11:30pm",
      sab: "5:00pm a 03:00am",
      dom: "5:00pm a 12:00pm"
    },
    fotos: [],
    web: "https://www.facebook.com/ENLoungeBar/"
  },
  {
    establecimiento: "bar",
    id: 3,
    distrito: "san miguel",
    nombre: "Festival San Miguel",
    direccion: "Av. la Marina 2517, San Miguel",
    logo: logo4,
    carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
    horario: {
      lun: "11:30am a 01:00am",
      mar: "11:30am a 01:00am",
      mie: "11:30am a 01:00am",
      jue: "11:30am a 01:00am",
      vie: "11:30am a 03:00am",
      sab: "11:30am a 03:00am",
      dom: "11:30am a 01:00am"
    },
    fotos: [],
    web: "https://www.facebook.com/festivalsanmiguel"
  },
  {
    establecimiento: "bar",
    id: 4,
    distrito: "san miguel",
    nombre: "Pacha Inti",
    direccion: "Mercedes Gallagher de Parks 396, San Miguel",
    logo: logo2,
    carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
    horario: {
      lun: "No hay atención",
      mar: "06:00pm a 01:00am",
      mie: "06:00pm a 01:00am",
      jue: "06:00pm a 01:00am",
      vie: "06:00pm a 03:00am",
      sab: "06:00pm a 03:00am",
      dom: "No hay atención"
    },
    fotos: [],
    web: "https://www.facebook.com/pachainti"
  },
  {
    establecimiento: "discoteca",
    distrito: "san miguel",
    id: 5,
    nombre: "Sopranos",
    direccion: "Av. La Marina 3151,San Miguel",
    logo: logo5,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 01:00am",
      mar: "07:00pm a 01:00am",
      mie: "07:00pm a 01:00am",
      jue: "07:00pm a 01:00am",
      vie: "07:00pm a 01:00am",
      sab: "07:00pm a 01:00am",
      dom: "No hay atención"
    },
    fotos: [],
    web: "https://sopranos.com.pe/"
  },
  {
    establecimiento: "bar",
    distrito: "san miguel",
    id: 6,
    nombre: "Sopranos",
    direccion: "Av. La Marina 1687,San Miguel",
    logo: logo6,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 01:00am",
      mar: "07:00pm a 01:00am",
      mie: "07:00pm a 01:00am",
      jue: "07:00pm a 01:00am",
      vie: "07:00pm a 01:00am",
      sab: "07:00pm a 01:00am",
      dom: "No hay atención"
    },
    fotos: [],
    web: "https://sopranos.com.pe/"
  },
  {
    establecimiento: "bar",
    distrito: "san miguel",
    id: 7,
    nombre: "Rustica",
    direccion: "Av. La Marina 2631, San Miguel",
    logo: logo7,
    carta: "",//si es que hay
    horario: {
      lun: "12:00pm a 12:30am",
      mar: "12:00pm a 12:30am",
      mie: "12:00pm a 12:30am",
      jue: "12:00pm a 03:00am",
      vie: "12:00pm a 03:00am",
      sab: "12:00pm a 03:00am",
      dom: "12:00pm a 03:00am"
    },
    fotos: [],
    web: "https://www.rustica.com.pe/"
  },
  {
    establecimiento: "bar",
    distrito: "san miguel",
    id: 8,
    nombre: "Fridays",
    direccion: "Av. La Marina 2355 - C.C. La Marina Open Plaza,San Miguel",
    logo: logo8,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 11:30am",
      mar: "07:00pm a 11:30am",
      mie: "07:00pm a 11:30am",
      jue: "07:00pm a 11:30am",
      vie: "07:00pm a 11:30am",
      sab: "07:00pm a 11:30am",
      dom: "07:00pm a 11:30am"
    },
    fotos: [],
    web: "https://fridaysperu.com/"
  },
  {
    establecimiento: "bar",
    distrito: "san miguel",
    id: 9,
    nombre: "Fridays",
    direccion: "Av. La Marina 2000, C.C Plaza San Miguel",
    logo: logo9,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 11:30am",
      mar: "07:00pm a 11:30am",
      mie: "07:00pm a 11:30am",
      jue: "07:00pm a 11:30am",
      vie: "07:00pm a 11:30am",
      sab: "07:00pm a 11:30am",
      dom: "07:00pm a 11:30am"
    },
    fotos: [],
    web: "https://fridaysperu.com/"
  },
  {
    establecimiento: "bar",
    distrito: "san miguel",
    id: 10,
    nombre: "Chilis",
    direccion: "Calle Mantaro Nro. 220, C.C. Plaza San Miguel",
    logo: logo10,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 11:00am",
      mar: "07:00pm a 11:00am",
      mie: "07:00pm a 11:00am",
      jue: "07:00pm a 11:00am",
      vie: "07:00pm a 12:00am",
      sab: "07:00pm a 12:00am",
      dom: "07:00pm a 11:30am"
    },
    fotos: [],
    web: "https://www.chilis.pe/"
  },
  {
    establecimiento: "bar",
    distrito: "miraflores",
    id: 11,
    nombre: "Wahios",
    direccion: "C. Berlín 192, Miraflores",
    logo: logo11,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 11:00am",
      mar: "07:00pm a 11:00am",
      mie: "07:00pm a 11:00am",
      jue: "07:00pm a 11:00am",
      vie: "07:00pm a 12:00am",
      sab: "07:00pm a 12:00am",
      dom: "07:00pm a 11:30am"
    },
    fotos: [],
    web: "https://www.instagram.com/wahiosculturebar/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "miraflores",
    id: 12,
    nombre: "Molly’s Irish Bar & restobar",
    direccion: "C. Berlín 172, Miraflores",
    logo: logo12,
    carta: "https://molly-s-irish-bar-restaurant.cluvi.pe/molly-s-irish-bar-restaurant/menu",//si es que hay
    horario: {
      lun: "12:00pm a 01:00am",
      mar: "12:00pm a 01:00am",
      mie: "12:00pm a 01:00am",
      jue: "12:00pm a 01:00am",
      vie: "12:00pm a 03:00am",
      sab: "12:00pm a 03:00am",
      dom: "12:00pm a 03:00am"
    },
    fotos: [],
    web: "https://www.instagram.com/mollysirishbar_lima/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "miraflores",
    id: 13,
    nombre: "La Cachina Bar",
    direccion: "C. Manuel Bonilla 116, Miraflores",
    logo: logo13,
    carta: "",//si es que hay
    horario: {
      lun: "05:00pm a 12:30am",
      mar: "05:00pm a 12:30am",
      mie: "05:00pm a 12:30am",
      jue: "05:00pm a 12:30am",
      vie: "05:00pm a 03:30am",
      sab: "05:00pm a 03:30am",
      dom: "05:00pm a 12:30am"
    },
    fotos: [],
    web: "https://www.instagram.com/lacachinabar/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "miraflores",
    id: 14,
    nombre: "El infusionista",
    direccion: "C. Manuel Bonilla 123, Miraflores",
    logo: logo14,
    carta: "",//si es que hay
    horario: {
      lun: "05:00pm a 12:30am",
      mar: "05:00pm a 12:30am",
      mie: "05:00pm a 12:30am",
      jue: "05:00pm a 12:30am",
      vie: "05:00pm a 03:00am",
      sab: "05:00pm a 03:00am",
      dom: "05:00pm a 12:30am"
    },
    fotos: [],
    web: "https://www.instagram.com/el_infusionista/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "miraflores",
    id: 15,
    nombre: "Bar público",
    direccion: "C. Esperanza 339, Miraflores",
    logo: logo15,
    carta: "",//si es que hay
    horario: {
      lun: "07:00pm a 01:00am",
      mar: "07:00pm a 01:00am",
      mie: "07:00pm a 01:00am",
      jue: "07:00pm a 01:00am",
      vie: "07:00pm a 03:00am",
      sab: "07:00pm a 03:00am",
      dom: "07:00pm a 03:00am"
    },
    fotos: [],
    web: "https://www.instagram.com/bar_publico/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "barranco",
    id: 16,
    nombre: "Barranco Bar",
    direccion: "Pl. Butters 291, Barranco",
    logo: logo16,
    carta: "",//si es que hay
    horario: {
      lun: "No hay atención",
      mar: "No hay atención",
      mie: "No hay atención",
      jue: "07:00pm a 03:00am",
      vie: "07:00pm a 03:00am",
      sab: "07:00pm a 03:00am",
      dom: "07:00pm a 03:00am"
    },
    fotos: [],
    web: "https://www.instagram.com/barrancobaroficial/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "barranco",
    id: 17,
    nombre: "Garrison Bar",
    direccion: "28 De Julio 203, Barranco",
    logo: logo17,
    carta: "",//si es que hay
    horario: {
      lun: "No hay atención",
      mar: "06:00pm a 12:00am",
      mie: "06:00pm a 12:00am",
      jue: "06:00pm a 12:00am",
      vie: "06:00pm a 02:30am",
      sab: "06:00pm a 02:30am",
      dom: "06:00pm a 02:30am"
    },
    fotos: [],
    web: "https://www.instagram.com/garrisonperu/?hl=es"
  }, 
  {
      establecimiento: "bar",
      distrito: "barranco",
      id: 18,
      nombre: "La posada del mirador",
      direccion: "C. la Ermita 104, Barranco",
      logo: logo18,
      carta: "",//si es que hay
      horario: {
        lun: "12:00pm a 12:00am",
        mar: "12:00pm a 12:00am",
        mie: "12:00pm a 12:00am",
        jue: "12:00pm a 12:00am",
        vie: "06:00pm a 02:30am",
        sab: "06:00pm a 02:30am",
        dom: "06:00pm a 02:30am"
      },
    fotos: [],
    web: "https://www.instagram.com/laposadadelmirador/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "barranco",
    id: 19,
    nombre: "Aguabendita Bar",
    direccion: "Av. Francisco Bolognesi 235, Barranco",
    logo: logo19,
    carta: "",//si es que hay
    horario: {
      lun: "06:00pm a 12:00am",
      mar: "06:00pm a 12:00am",
      mie: "06:00pm a 12:00am",
      jue: "06:00pm a 12:00am",
      vie: "06:00pm a 02:30am",
      sab: "06:00pm a 02:30am",
      dom: "06:00pm a 02:30am"
    },
    fotos: [],
    web: "https://www.instagram.com/aguabendita.bar/?hl=es"
  },
  {
    establecimiento: "bar",
    distrito: "barranco",
    id: 20,
    nombre: "Ayahuasca",
    direccion: "Av. Prol. Gral. Jose de San Martin 130, Barranco",
    logo: logo20,
    carta: "",//si es que hay
    horario: {
      lun: "12:00pm a 01:00am",
      mar: "12:00pm a 01:00am",
      mie: "12:00pm a 01:00am",
      jue: "12:00pm a 03:00am",
      vie: "12:00pm a 03:00am",
      sab: "12:00pm a 03:00am",
      dom: "12:00pm a 01:00am"
    },
    fotos: [],
    web: "https://ayahuascarestobar.com/"
  },  
  {
    establecimiento: "discoteca",
    id: 21,
    distrito: "chancay",
    nombre: "Kaema club",
    direccion: "C. Lopez de Zuñiga, Chancay 15131 ",
    logo: logo21,
    carta: "",//si es que hay
    telefono: " 981 522 697",
    horario: {
      lun: "",
      mar: "",
      mie: "",
      jue: "",
      vie: "",
      sab: "7:00pm a 4:00am",
      dom: "7:00pm a 4:00am"
    }

  },
  {
    establecimiento: "bar",
    id: 22,
    distrito: "chancay",
    nombre: "WAYKI'S BAR",
    direccion: "Calle San Martin 153, Chancay 15131 ",
    logo: logo22,
    carta: "",//si es que hay
    telefono: "933 694 706",
    horario: {
      lun: "7:00pm a 2:00am",
      mar: "7:00pm a 2:00am",
      mie: "7:00pm a 2:00am",
      jue: "7:00pm a 2:00am",
      vie: "7:00pm a 2:00am",
      sab: "7:00pm a 4:00am",
      dom: "7:00pm a 4:00am"

    }
  },
  {
    establecimiento: "bar",
    id: 23,
    distrito: "chancay",
    nombre: "la huerta encantada",
    direccion: "Boulevard Diego, C. Lopez de Zuñiga 450, Chancay 15131",
    logo: logo23,
    carta: "",//si es que hay
    telefono: "946 519 352",
    horario: {
      lun: "12:00pm a 18:00pm",
      mar: "12:00pm a 18:00pm",
      mie: "12:00pm a 18:00pm",
      jue: "12:00pm a 18:00pm",
      vie: "12:00pm a 23:00pm",
      sab: "12:00pm a 23:00pm",
      dom: "12:00pm a 23:00pm"
    }

  },
  {
    establecimiento: "bar",
    id: 24,
    distrito: "chancay",
    nombre: "Lobitos Restobar",
    direccion: "Junin 380, Chancay 15131",
    logo: logo24,
    carta: "cdn.me-qr.com",//si es que hay
    telefono: "958 534 920",
    horario: {
      lun: "12:00pm a 18:00pm",
      mar: "12:00pm a 18:00pm",
      mie: "12:00pm a 18:00pm",
      jue: "12:00pm a 18:00pm",
      vie: "12:00pm a 23:00pm",
      sab: "12:00pm a 23:00pm",
      dom: "12:00pm a 23:00pm"
    }

  },
  {
    establecimiento: "discoteca",
    id: 25,
    distrito: "huaral",
    nombre: "Legon",
    direccion: "Los Geranios 347, Huaral 15202 ",
    logo: logo25,
    carta: "",//si es que hay
    telefono: " 934 557 270",
    horario: {
      lun: "",
      mar: "",
      mie: "",
      jue: "",
      vie: "",
      sab: "7:00pm a 4:00am",
      dom: "7:00pm a 4:00am"
    }
  },
  {
    establecimiento: "discoteca",
    id: 26,
    distrito: "huaral",
    nombre: "Gothik Disco",
    direccion: "Julio C. Tello 152, Huaral 15202 ",
    logo: logo26,
    carta: "",//si es que hay
    telefono: "",
    horario: {
      lun: "",
      mar: "",
      mie: "",
      jue: "",
      vie: "",
      sab: "22:00pm a 6:00am",
      dom: "22:00pm a 6:00am"
    }
  },
  {
    establecimiento: "discoteca",
    id: 27,
    distrito: "huaral",
    nombre: "casa vieja",
    direccion: "Perú 120, Huaral 15202 ",
    logo: logo27,
    carta: "",//si es que hay
    telefono: " ",
    horario: {
      lun: "",
      mar: "",
      mie: "",
      jue: "",
      vie: "",
      sab: "23:00pm a 6:00am",
      dom: ""
    }
  },
  {
    establecimiento: "discoteca",
    id: 61,
    distrito: "pueblo libre",
    nombre: "The Club Lima",
    direccion: "Av. La Marina 1518, Pueblo Libre",
    logo: logo61,
    carta: "",//si es que hay
    telefono: " ",
    horario: {
      lun: "07:00pm a 5:00am",
      mar: "07:00pm a 5:00am",
      mie: "07:00pm a 5:00am",
      jue: "07:00pm a 5:00am",
      vie: "07:00pm a 5:15am",
      sab: "07:00pm a 5:00am",
      dom: "07:00pm a 5:00am"
    }
  },

]
