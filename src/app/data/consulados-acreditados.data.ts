export interface ConsuladoAcreditado {
  id: number;
  pais: string;
  moneda: string;
  direccion: string;
  telefonos: string[];
  fax?: string;
  correos: string[];
  web?: string;
  sede: string;
  nota?: string;
  mapaUrl?: string;
}

export const CONSULADOS_ACREDITADOS: ConsuladoAcreditado[] = [
  {
    "id": 1,
    "pais": "Alemania",
    "moneda": "Euro",
    "direccion": "Avenida La Reforma 9-55, Edificio Reforma 10, nivel 10",
    "telefonos": [
      "2364-6700"
    ],
    "fax": "2365-2270",
    "correos": [
      "info@guat.diplo.de"
    ],
    "web": "www.guatemala.diplo.de",
    "sede": "Alemania",
    "mapaUrl": "https://maps.app.goo.gl/gTJyBHQS7HWtEpZg6"
  },
  {
    "id": 2,
    "pais": "Argentina",
    "moneda": "Peso argentino",
    "direccion": "5ª. Avenida 6-50, zona 14",
    "telefonos": [
      "2464-5900"
    ],
    "fax": "2367-1091",
    "correos": [
      "eguat@mrecic.gov.ar"
    ],
    "web": "https://www.cancilleria.gob.ar/",
    "sede": "Argentina",
    "mapaUrl": "https://maps.app.goo.gl/8maiqV9tyce7eEZdA"
  },
  {
    "id": 3,
    "pais": "Belice",
    "moneda": "Dólar de Belice",
    "direccion": "5ª Avenida 5-55, zona 14, Edificio Europlaza, Torre II, Of. 1502, Nivel 15",
    "telefonos": [
      "2207-400"
    ],
    "correos": [
      "luis.verde@msa.gov.bz",
      "embelguat@mfagob.bz"
    ],
    "web": "http://www.embajadadebelize.org",
    "sede": "Belice",
    "mapaUrl": "https://maps.app.goo.gl/JSLUTryqhKesCEgQ8"
  },
  {
    "id": 4,
    "pais": "Brasil",
    "moneda": "Real brasileño",
    "direccion": "2a. Avenida 20-13, zona 10, Edificio Los Arcos",
    "telefonos": [
      "2321-6800"
    ],
    "fax": "2366-4135",
    "correos": [
      "bernardo.brasil@itamaraty.gov.br"
    ],
    "sede": "Brasil",
    "mapaUrl": "https://maps.app.goo.gl/VxrXfLfjfr9aLhLt5"
  },
  {
    "id": 5,
    "pais": "Canadá",
    "moneda": "Dólar canadiense",
    "direccion": "13 calle 8-44, zona 10, Edificio Edyma, 8º. Nivel",
    "telefonos": [
      "2363-4348 EXT. 3803"
    ],
    "fax": "2365-1210",
    "correos": [
      "gtmla@international.gc.ca"
    ],
    "web": "http://www.canadainternational.gc.ca/guatemala/",
    "sede": "Canadá",
    "mapaUrl": "https://maps.app.goo.gl/SbJ2CCYYkjJXP3NP6"
  },
  {
    "id": 6,
    "pais": "Chile",
    "moneda": "Peso chileno",
    "direccion": "3ra Avenida 14-33 zona 14",
    "telefonos": [
      "2430-2323"
    ],
    "fax": "2430-2325",
    "correos": [
      "raraya@minrel.gob.cl"
    ],
    "web": "http://www.chile.gob.cl/guatemala",
    "sede": "Chile",
    "mapaUrl": "https://maps.app.goo.gl/fk3JhEu5mNaUjPUn9"
  },
  {
    "id": 7,
    "pais": "China (Taiwán)",
    "moneda": "Dólar taiwanés",
    "direccion": "4ta. Avenida A 13-25, zona 9",
    "telefonos": [
      "2322-0168"
    ],
    "fax": "2332-2668",
    "correos": [
      "gtmconsular@gmail.com"
    ],
    "web": "http://www.roc-taiwan.org/gt_es",
    "sede": "China, Taiwán",
    "mapaUrl": "https://maps.app.goo.gl/hzr21XNr7MHkdReC6"
  },
  {
    "id": 8,
    "pais": "Colombia",
    "moneda": "Peso colombiano",
    "direccion": "2da Calle 5-10, zona 14 colonia El Campo",
    "telefonos": [
      "2333-4778",
      "2333-4722"
    ],
    "fax": "2385-3438",
    "correos": [
      "cguatemala@cancilleria.gov.co"
    ],
    "web": "https://www.cancilleria.gov.co/",
    "sede": "Colombia",
    "mapaUrl": "https://maps.app.goo.gl/z5h3iBKZXAQFZ4kr5"
  },
  {
    "id": 9,
    "pais": "Costa Rica",
    "moneda": "Colón costarricense",
    "direccion": "5ta. Avenida 7-08, zona 14",
    "telefonos": [
      "2337-4909",
      "2366-4215"
    ],
    "correos": [
      "concr-gt@rree.go.cr"
    ],
    "sede": "Costa Rica",
    "mapaUrl": "https://maps.app.goo.gl/8ASZ8bYiirJ2RZLF8"
  },
  {
    "id": 10,
    "pais": "Cuba",
    "moneda": "Peso cubano",
    "direccion": "Avenida Las Américas 20-72, zona 13",
    "telefonos": [
      "22261000 ext13"
    ],
    "fax": "2332-5525",
    "correos": [
      "consul@gt.embacuba.cu"
    ],
    "sede": "Cuba",
    "mapaUrl": "https://maps.app.goo.gl/bWdYH2Ryk2tHLMuE6"
  },
  {
    "id": 11,
    "pais": "Ecuador",
    "moneda": "Dólar estadounidense",
    "direccion": "4ta. Avenida 12-60, zona 14",
    "telefonos": [
      "2366-5041",
      "2368-0397"
    ],
    "fax": "2368-1831",
    "correos": [
      "smartinez@cancilleria.gob.ec"
    ],
    "web": "http://mexicope.dfa.gov.ph",
    "sede": "Todo el país",
    "mapaUrl": "https://maps.app.goo.gl/PKiEkCtvRL9vXBL57"
  },
  {
    "id": 12,
    "pais": "Egipto",
    "moneda": "Libra egipcia",
    "direccion": "5ta. Avenida 10-84, zona 14, Edificio Cobella, nivel 5, oficina 502",
    "telefonos": [
      "2333-6296",
      "2333-7358"
    ],
    "correos": [
      "embassy.guatemalacity@mfa.gov.eg"
    ],
    "sede": "Egipto",
    "mapaUrl": "https://maps.app.goo.gl/U7NnUFfMkMRraESq5"
  },
  {
    "id": 13,
    "pais": "El Salvador",
    "moneda": "Dólar estadounidense",
    "direccion": "15 avenida 12-01 zona 13",
    "telefonos": [
      "2458-1863"
    ],
    "correos": [
      "embajadaguatemala@rree.gob.sv"
    ],
    "web": "https://rree.gob.sv/",
    "sede": "Guatemala",
    "mapaUrl": "https://maps.app.goo.gl/vrgSJmewmQHxw8ps9"
  },
  {
    "id": 14,
    "pais": "España",
    "moneda": "Euro",
    "direccion": "6a calle 6-48 zona 9",
    "telefonos": [
      "2379-3566"
    ],
    "fax": "2379-3533",
    "correos": [
      "cinthya.brena@maec.es"
    ],
    "web": "http://www.exteriores.gob.es/embajadas/guatemala/e",
    "sede": "Todo el país",
    "mapaUrl": "https://maps.app.goo.gl/pU6U78aG3BnTCSGa9"
  },
  {
    "id": 15,
    "pais": "Estados Unidos de América",
    "moneda": "Dollar",
    "direccion": "Avenida Reforma 7-01, zona 10",
    "telefonos": [
      "2326-4000 ext. 44449"
    ],
    "fax": "2326-4654",
    "correos": [
      "morenocm@state.gov",
      "consularguatemala@state.gov",
      "matuslf@state.gov"
    ],
    "web": "https://gt.usembassy.gov",
    "sede": "Estados Unidos de América",
    "mapaUrl": "https://maps.app.goo.gl/8tZnXMPBDptBk2my7"
  },
  {
    "id": 16,
    "pais": "Francia",
    "moneda": "Euro",
    "direccion": "5ª. Avenida 8-59, zona 14 Edificio Cogefar",
    "telefonos": [
      "2421-7474"
    ],
    "fax": "2421-7372",
    "correos": [
      "marie-jose.chaduteau-haro@dipomatie.gouv.fr"
    ],
    "web": "http://www.ambafrance-org.gt",
    "sede": "Francia",
    "mapaUrl": "https://maps.app.goo.gl/7qNyYqYGSHLKxzHW8"
  },
  {
    "id": 17,
    "pais": "India",
    "moneda": "Rupia india",
    "direccion": "8va. Avenida 15-07 zona 10",
    "telefonos": [
      "2508-8891"
    ],
    "fax": "2368-2524",
    "correos": [
      "cons.guatemala@mea.gob.in"
    ],
    "web": "http://www.indemguatemala.org",
    "sede": "India",
    "mapaUrl": "https://maps.app.goo.gl/3NRtZkYLUu62mMdq9"
  },
  {
    "id": 18,
    "pais": "Israel",
    "moneda": "Shequel (Israel)",
    "direccion": "13 avenida 14-07, zona 10, Colonia Oakland",
    "telefonos": [
      "2333-4624",
      "2363-5665"
    ],
    "fax": "2333-6950",
    "correos": [
      "consul@guatemala.mfa.gov.il"
    ],
    "web": "http://www.indemguatemala.org",
    "sede": "Israel",
    "mapaUrl": "https://maps.app.goo.gl/AMHtKQP5EPr7N5x7A"
  },
  {
    "id": 19,
    "pais": "Italia",
    "moneda": "Euro",
    "direccion": "12 Calle 6-49, zona 14",
    "telefonos": [
      "2366-9271"
    ],
    "fax": "2367-3909",
    "correos": [
      "ambasciata.guatemala@esteri.it"
    ],
    "web": "http://www.ambguatemala.esteri.it",
    "sede": "Italia",
    "mapaUrl": "https://maps.app.goo.gl/idW5tGwaxHskZGbWA"
  },
  {
    "id": 20,
    "pais": "Japón",
    "moneda": "Yen japonés",
    "direccion": "Avenida Reforma 16-85, zona 10 Edificio Torre Internacional, 10º. Nivel",
    "telefonos": [
      "2382-7300"
    ],
    "fax": "2382-7310",
    "correos": [
      "isaji.nakamoto@mofa.go.jp"
    ],
    "web": "http://www.ambguatemala.esteri.it",
    "sede": "Japón",
    "mapaUrl": "https://maps.app.goo.gl/typ8MfVTKKZU5cDj9"
  },
  {
    "id": 21,
    "pais": "Marruecos",
    "moneda": "Dirham marroquí",
    "direccion": "16 calle 0-55 zona 10, Nivel 8, Edificio Torre Internacional",
    "telefonos": [
      "2337-3300"
    ],
    "fax": "2337-0547",
    "correos": [
      "embamarruecos.gtm@gmail.com"
    ],
    "web": "https://sites.google.com/view/embajadademarruecose",
    "sede": "Marruecos",
    "mapaUrl": "https://maps.app.goo.gl/PnjFzPzphHePxt5m8"
  },
  {
    "id": 22,
    "pais": "Estados Unidos Mexicanos",
    "moneda": "Peso mexicano",
    "direccion": "2a. Avenida 7-57, zona 10",
    "telefonos": [
      "2420-3433"
    ],
    "fax": "2420-3447",
    "correos": [
      "mexicoq@yahoo.com.mx"
    ],
    "web": "https://sites.google.com/view/embajadademarruecose",
    "sede": "México",
    "nota": "Cónsul en Quetzaltenango, Raúl Cueto 5a calle 17-24 zona 3, Quetzaltenango. Cónsul en Tecún Umán, Mauricio Ituarte 3a. Avenida 4-74, zona 1, Tecún Umán, Guatemala.",
    "mapaUrl": "https://maps.app.goo.gl/5QwFuqN5QeqQe87o9"
  },
  {
    "id": 23,
    "pais": "Nicaragua",
    "moneda": "Córdoba nicaragüense",
    "direccion": "19 Avenida \"A\" 20-19 Zona 10",
    "telefonos": [
      "2201-5050",
      "2333-6434"
    ],
    "fax": "2368-2284",
    "correos": [
      "embaguat@terra.com.gt"
    ],
    "sede": "Nicaragua",
    "mapaUrl": "https://maps.app.goo.gl/1Dy6xJyRKA44KNwf6"
  },
  {
    "id": 24,
    "pais": "Panamá",
    "moneda": "Dólar estadounidense",
    "direccion": "11 Calle 2-48, Zona 14",
    "telefonos": [
      "2207-2999"
    ],
    "correos": [
      "loaizajulieta@gmail.com"
    ],
    "web": "http://www.mire.gob.pa",
    "sede": "Panamá",
    "mapaUrl": "https://maps.app.goo.gl/KAaXnEWh3PD6Vn8L8"
  },
  {
    "id": 25,
    "pais": "Perú",
    "moneda": "Nuevo sol peruano",
    "direccion": "13 calle 14-24, zona 13",
    "telefonos": [
      "2339-1060"
    ],
    "correos": [
      "embaperuguate@gmail.com"
    ],
    "web": "http://www.embajadadelperu.com.gt",
    "sede": "Perú",
    "mapaUrl": "https://maps.app.goo.gl/WpUzoQFQyeDUKVFK9"
  },
  {
    "id": 26,
    "pais": "Reino Unido de Gran Bretaña e Irlanda del Norte",
    "moneda": "Libra esterlina",
    "direccion": "16 calle 0-55 zona 10 Torre Internacional, Nivel 11",
    "telefonos": [
      "2380-7300"
    ],
    "fax": "2380-7339",
    "correos": [
      "Lourdes.Taylor@fco.gov.uk"
    ],
    "web": "http://www.ambafrance-org.gt",
    "sede": "Todo el país",
    "mapaUrl": "https://maps.app.goo.gl/7TpViAE9yaiKX3RD9"
  },
  {
    "id": 27,
    "pais": "República de Corea",
    "moneda": "Won surcoreano",
    "direccion": "5ª. Avenida 5-55 zona 14, Edificio Europlaza, Torre III, nivel 7",
    "telefonos": [
      "2382-4051",
      "2382-4052",
      "2382-4053",
      "2382-4054",
      "2382-4055"
    ],
    "fax": "2382-4057",
    "correos": [
      "embajadecorea@yahoo.com"
    ],
    "web": "http://gtm.mofa.go.kr/worldlanguage/america/gtm/mi",
    "sede": "República de Corea",
    "mapaUrl": "https://maps.app.goo.gl/GJq5rRrMRvDB18i19"
  },
  {
    "id": 28,
    "pais": "República Dominicana",
    "moneda": "Peso dominicano",
    "direccion": "18 a calle 24-69 zona 10, Centro Empresarial Pradera Torre II Nivel 16 Oficina 1606",
    "telefonos": [
      "2261-7016"
    ],
    "fax": "2261-7017",
    "correos": [
      "embardgt@gmail.com"
    ],
    "web": "http://www.consuladord.com",
    "sede": "Todo el país",
    "mapaUrl": "https://maps.app.goo.gl/SkbDoeYXivRPSBy39"
  },
  {
    "id": 29,
    "pais": "Rusia",
    "moneda": "Rublo ruso",
    "direccion": "2ª. Avenida 12-85, zona 14",
    "telefonos": [
      "2366-8891"
    ],
    "fax": "2367-2766",
    "correos": [
      "guateconsulru@gmail.com"
    ],
    "web": "http://www.guat.mid.ru",
    "sede": "Rusia",
    "mapaUrl": "https://maps.app.goo.gl/7qNyYqYGSHLKxzHW8"
  },
  {
    "id": 30,
    "pais": "Suiza",
    "moneda": "Franco suizo",
    "direccion": "16 calle 0-55, zona 10, Edificio Internacional, Nivel 14",
    "telefonos": [
      "2367-5520"
    ],
    "fax": "2367-5811",
    "correos": [
      "gua.vertretung@eda.admin.ch"
    ],
    "web": "https://www.eda.admin.ch/countries/guatemala/es/ho",
    "sede": "Suiza",
    "mapaUrl": "https://maps.app.goo.gl/RFjEZCmvm2GscEG66"
  },
  {
    "id": 31,
    "pais": "Türkiye",
    "moneda": "Lira turca (TRY)",
    "direccion": "Diagonal 6, 12-42 Zona 10 Edificio Design Center Torre II Oficina 406",
    "telefonos": [
      "2490-2068"
    ],
    "correos": [
      "embajada.guatemala@mfa.gov.tr"
    ],
    "sede": "Türkiye",
    "mapaUrl": "https://maps.app.goo.gl/LQUP2qPoSaN8H3FY9"
  },
  {
    "id": 32,
    "pais": "Uruguay",
    "moneda": "Peso uruguayo",
    "direccion": "12 Calle 2-63 Zona 14",
    "telefonos": [
      "2445-1818",
      "2367-0160",
      "2367-0172"
    ],
    "correos": [
      "uruguatemala@mrree.gub.uy"
    ],
    "nota": "Funcionario: Luis Enrique Pérez Barthaburu. Cargo: Encargado de la Sección Consular. Fecha de Acreditación: 8/03/2024",
    "sede": "Uruguay",
    "mapaUrl": "https://maps.app.goo.gl/u7tarcnjDJRfbn2PA"
  },
  {
    "id": 33,
    "pais": "Venezuela (República Bolivariana de Venezuela)",
    "moneda": "Bolívar venezolano",
    "direccion": "13 calle 3-40, zona 10 Edificio Atlantis, Oficina 601",
    "telefonos": [
      "2317-0701"
    ],
    "fax": "2317-0704",
    "correos": [
      "embavenezguatemala@gmail.com"
    ],
    "web": "http://guatemala.embajada.gob.ve/",
    "sede": "Venezuela",
    "mapaUrl": "https://maps.app.goo.gl/bN4PfVghRUkm6VSZ8"
  }
];
