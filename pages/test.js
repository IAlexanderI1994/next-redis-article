import styles from '../styles/Home.module.css'
import Link from "next/link"


export const getServerSideProps = async ({ params }) => {
  console.log('PAGE!!!!')
  return {
    props: {
      "countries": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries2": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries3": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries4": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries8": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries5": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries6": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
      "countries7": [
        {"value": "ata", "title": "Antarctica", "phoneCode": "672"},
        {
          "value": "asc",
          "title": "Ascension Island",
          "phoneCode": "247"
        }, {"value": "aus", "title": "Australia", "phoneCode": "61"}, {
          "value": "aze",
          "title": "Azerbaijan",
          "phoneCode": "994"
        }, {"value": "ggy", "title": "Bailiwick of Guernsey (UK)", "phoneCode": "44"}, {
          "value": "blr",
          "title": "Belarus",
          "phoneCode": "375"
        }, {"value": "bel", "title": "Belgium", "phoneCode": "32"}, {
          "value": "bmu",
          "title": "Bermuda (UK)",
          "phoneCode": "1"
        }, {"value": "btn", "title": "Bhutan", "phoneCode": "975"}, {
          "value": "bol",
          "title": "Bolivia",
          "phoneCode": "591"
        }, {"value": "bih", "title": "Bosnia And Herzegovina", "phoneCode": "387"}, {
          "value": "bwa",
          "title": "Botswana",
          "phoneCode": "267"
        }, {"value": "bvt", "title": "Bouvet Island (Norway)", "phoneCode": "47"}, {
          "value": "bra",
          "title": "Brazil",
          "phoneCode": "55"
        }, {"value": "iot", "title": "British Indian Ocean Territory (UK)", "phoneCode": "44"}, {
          "value": "brn",
          "title": "Brunei Darussalam",
          "phoneCode": "673"
        }, {"value": "bgr", "title": "Bulgaria", "phoneCode": "359"}, {
          "value": "bfa",
          "title": "Burkina Faso",
          "phoneCode": "226"
        }, {"value": "bdi", "title": "Burundi", "phoneCode": "257"}, {
          "value": "khm",
          "title": "Cambodia",
          "phoneCode": "855"
        }, {"value": "cmr", "title": "Cameroon", "phoneCode": "237"}, {
          "value": "can",
          "title": "Canada",
          "phoneCode": "1"
        }, {"value": "cpv", "title": "Cape Verde", "phoneCode": "238"}, {
          "value": "cym",
          "title": "Cayman Islands (UK)",
          "phoneCode": "1"
        }, {"value": "caf", "title": "Central African Republic", "phoneCode": "236"}, {
          "value": "tcd",
          "title": "Chad",
          "phoneCode": "235"
        }, {"value": "chl", "title": "Chile", "phoneCode": "56"}, {
          "value": "chn",
          "title": "China",
          "phoneCode": "86"
        }, {"value": "cxr", "title": "Christmas Island (Australia)", "phoneCode": "61"}, {
          "value": "cck",
          "title": "Cocos (Keeling) Islands (Australia)",
          "phoneCode": "61"
        }, {"value": "col", "title": "Colombia", "phoneCode": "57"}, {
          "value": "com",
          "title": "Comoros",
          "phoneCode": "269"
        }, {"value": "cog", "title": "Congo", "phoneCode": "242"}, {
          "value": "cod",
          "title": "Congo, The Democratic Republic of (The Former Zaire)",
          "phoneCode": "243"
        }, {"value": "cok", "title": "Cook Islands (New Zeland)", "phoneCode": "682"}, {
          "value": "cri",
          "title": "Costa Rica",
          "phoneCode": "506"
        }, {"value": "civ", "title": "Cote d'Ivoire", "phoneCode": "225"}, {
          "value": "hrv",
          "title": "Croatia",
          "phoneCode": "385"
        }, {"value": "cub", "title": "Cuba", "phoneCode": "53"}, {
          "value": "cyp",
          "title": "Cyprus",
          "phoneCode": "357"
        }, {"value": "cze", "title": "Czech Republic", "phoneCode": "420"}, {
          "value": "dnk",
          "title": "Denmark",
          "phoneCode": "45"
        }, {"value": "dji", "title": "Djibouti", "phoneCode": "253"}, {
          "value": "dma",
          "title": "Dominica",
          "phoneCode": "1"
        }, {"value": "dom", "title": "Dominican Republic", "phoneCode": "1"}, {
          "value": "tls",
          "title": "Timor-Leste",
          "phoneCode": "670"
        }, {"value": "ecu", "title": "Ecuador", "phoneCode": "593"}, {
          "value": "egy",
          "title": "Egypt",
          "phoneCode": "20"
        }, {"value": "slv", "title": "El Salvador", "phoneCode": "503"}, {
          "value": "gnq",
          "title": "Equatorial Guinea",
          "phoneCode": "240"
        }, {"value": "eri", "title": "Eritrea", "phoneCode": "291"}, {
          "value": "est",
          "title": "Estonia",
          "phoneCode": "372"
        }, {"value": "eth", "title": "Ethiopia", "phoneCode": "251"}, {
          "value": "flk",
          "title": "Falkland Islands (Malvinas) (UK)",
          "phoneCode": "500"
        }, {"value": "fro", "title": "Faroe Islands (Denmark)", "phoneCode": "298"}, {
          "value": "fji",
          "title": "Fiji",
          "phoneCode": "679"
        }, {"value": "fin", "title": "Finland", "phoneCode": "358"}, {
          "value": "fra",
          "title": "France",
          "phoneCode": "33"
        }, {"value": "guf", "title": "French Guiana (France)", "phoneCode": "594"}, {
          "value": "pyf",
          "title": "French Polynesia (France)",
          "phoneCode": "689"
        }, {"value": "gab", "title": "Gabon", "phoneCode": "241"}, {
          "value": "gmb",
          "title": "Gambia",
          "phoneCode": "220"
        }, {"value": "geo", "title": "Georgia", "phoneCode": "995"}, {
          "value": "deu",
          "title": "Germany",
          "phoneCode": "49"
        }, {"value": "gha", "title": "Ghana", "phoneCode": "233"}, {
          "value": "gib",
          "title": "Gibraltar (UK)",
          "phoneCode": "350"
        }, {"value": "grc", "title": "Greece", "phoneCode": "30"}, {
          "value": "grl",
          "title": "Greenland (Denmark)",
          "phoneCode": "299"
        }, {"value": "grd", "title": "Grenada", "phoneCode": "1"}, {
          "value": "glp",
          "title": "Guadeloupe (France)",
          "phoneCode": "590"
        }, {"value": "gum", "title": "Guam (USA)", "phoneCode": "1"}, {
          "value": "gtm",
          "title": "Guatemala",
          "phoneCode": "502"
        }, {"value": "gin", "title": "Guinea", "phoneCode": "224"}, {
          "value": "gnb",
          "title": "Guinea-Bissau",
          "phoneCode": "245"
        }, {"value": "guy", "title": "Guyana", "phoneCode": "592"}, {
          "value": "hti",
          "title": "Haiti",
          "phoneCode": "509"
        }, {"value": "hmd", "title": "Heard And McDonald Islands (Australia)", "phoneCode": "43"}, {
          "value": "hnd",
          "title": "Honduras",
          "phoneCode": "504"
        }, {"value": "hkg", "title": "Hong Kong (China)", "phoneCode": "852"}, {
          "value": "hun",
          "title": "Hungary",
          "phoneCode": "36"
        }, {"value": "isl", "title": "Iceland", "phoneCode": "354"}, {
          "value": "ind",
          "title": "India",
          "phoneCode": "91"
        }, {"value": "idn", "title": "Indonesia", "phoneCode": "62"}, {
          "value": "irn",
          "title": "Iran, Islamic Republic of",
          "phoneCode": "98"
        }, {"value": "irq", "title": "Iraq", "phoneCode": "964"}, {
          "value": "irl",
          "title": "Ireland",
          "phoneCode": "353"
        }, {"value": "isr", "title": "Israel", "phoneCode": "972"}, {
          "value": "ita",
          "title": "Italy",
          "phoneCode": "39"
        }, {"value": "jam", "title": "Jamaica", "phoneCode": "1"}, {
          "value": "jpn",
          "title": "Japan",
          "phoneCode": "81"
        }, {"value": "jey", "title": "Jersey (UK)", "phoneCode": "44"}, {
          "value": "jor",
          "title": "Jordan",
          "phoneCode": "962"
        }, {"value": "kaz", "title": "Kazakhstan", "phoneCode": "7"}, {
          "value": "ken",
          "title": "Kenya",
          "phoneCode": "254"
        }, {"value": "kir", "title": "Kiribati", "phoneCode": "686"}, {
          "value": "prk",
          "title": "Korea, Democratic People's Republic of",
          "phoneCode": "850"
        }, {"value": "kor", "title": "Korea, Republic of", "phoneCode": "82"}, {
          "value": "kwt",
          "title": "Kuwait",
          "phoneCode": "965"
        }, {"value": "kgz", "title": "Kyrgyzstan", "phoneCode": "996"}, {
          "value": "lao",
          "title": "Laos",
          "phoneCode": null
        }, {"value": "lva", "title": "Latvia", "phoneCode": "371"}, {
          "value": "lbn",
          "title": "Lebanon",
          "phoneCode": "961"
        }, {"value": "lso", "title": "Lesotho", "phoneCode": "266"}, {
          "value": "lbr",
          "title": "Liberia",
          "phoneCode": "231"
        }, {"value": "lby", "title": "Libyan Arab Jamahiriya", "phoneCode": "218"}, {
          "value": "lie",
          "title": "Liechtenstein",
          "phoneCode": "423"
        }, {"value": "ltu", "title": "Lithuania", "phoneCode": "370"}, {
          "value": "lux",
          "title": "Luxembourg",
          "phoneCode": "352"
        }, {"value": "mac", "title": "Macau (China)", "phoneCode": "853"}, {
          "value": "mkd",
          "title": "Macedonia, The Former Yugoslav Republic of",
          "phoneCode": "389"
        }, {"value": "mwi", "title": "Malawi", "phoneCode": "265"}, {
          "value": "mys",
          "title": "Malaysia",
          "phoneCode": "60"
        }, {"value": "mdv", "title": "Maldives", "phoneCode": "960"}, {
          "value": "mli",
          "title": "Mali",
          "phoneCode": "223"
        }, {"value": "mlt", "title": "Malta", "phoneCode": "356"}, {
          "value": "imn",
          "title": "Man, Isle of (UK)",
          "phoneCode": "44"
        }, {"value": "mhl", "title": "Marshall Islands", "phoneCode": "692"}, {
          "value": "mtq",
          "title": "Martinique (France)",
          "phoneCode": "596"
        }, {"value": "mrt", "title": "Mauritania", "phoneCode": "222"}, {
          "value": "mus",
          "title": "Mauritius",
          "phoneCode": "230"
        }, {"value": "myt", "title": "Mayotte (France)", "phoneCode": "262"}, {
          "value": "mex",
          "title": "Mexico",
          "phoneCode": "52"
        }, {"value": "fsm", "title": "Micronesia, Federated States of", "phoneCode": "691"}, {
          "value": "mda",
          "title": "Moldova, Republic of",
          "phoneCode": "373"
        }, {"value": "mco", "title": "Monaco", "phoneCode": "377"}, {
          "value": "mng",
          "title": "Mongolia",
          "phoneCode": "976"
        }, {"value": "mne", "title": "Montenegro", "phoneCode": "382"}, {
          "value": "msr",
          "title": "Montserrat (UK)",
          "phoneCode": "1"
        }, {"value": "mar", "title": "Morocco", "phoneCode": "212"}, {
          "value": "moz",
          "title": "Mozambique",
          "phoneCode": "258"
        }, {"value": "mmr", "title": "Myanmar", "phoneCode": "95"}, {
          "value": "nam",
          "title": "Namibia",
          "phoneCode": "264"
        }, {"value": "nru", "title": "Nauru", "phoneCode": "674"}, {
          "value": "npl",
          "title": "Nepal",
          "phoneCode": "977"
        }, {"value": "nld", "title": "Netherlands", "phoneCode": "31"}, {
          "value": "ant",
          "title": "Netherlands Antilles (Netherlands)",
          "phoneCode": "599"
        }, {"value": "ncl", "title": "New Caledonia (France)", "phoneCode": "687"}, {
          "value": "nzl",
          "title": "New Zealand",
          "phoneCode": "64"
        }, {"value": "nic", "title": "Nicaragua", "phoneCode": "505"}, {
          "value": "ner",
          "title": "Niger",
          "phoneCode": "227"
        }, {"value": "niu", "title": "Niue (New Zeland)", "phoneCode": "683"}, {
          "value": "nfk",
          "title": "Norfolk Island (Australia)",
          "phoneCode": "672"
        }, {"value": "mnp", "title": "Northern Mariana Islands (USA)", "phoneCode": "1"}, {
          "value": "nor",
          "title": "Norway",
          "phoneCode": "47"
        }, {"value": "omn", "title": "Oman", "phoneCode": "968"}, {
          "value": "pak",
          "title": "Pakistan",
          "phoneCode": "92"
        }, {"value": "plw", "title": "Palau", "phoneCode": "680"}, {
          "value": "pse",
          "title": "Palestine",
          "phoneCode": "972"
        }, {"value": "pan", "title": "Panama", "phoneCode": "507"}, {
          "value": "png",
          "title": "Papua New Guinea",
          "phoneCode": "675"
        }, {"value": "pry", "title": "Paraguay", "phoneCode": "595"}, {
          "value": "per",
          "title": "Peru",
          "phoneCode": "51"
        }, {"value": "phl", "title": "Philippines", "phoneCode": "63"}, {
          "value": "pcn",
          "title": "Pitcairn (UK)",
          "phoneCode": "1"
        }, {"value": "pol", "title": "Poland", "phoneCode": "48"}, {
          "value": "prt",
          "title": "Portugal",
          "phoneCode": "351"
        }, {"value": "pri", "title": "Puerto Rico (USA)", "phoneCode": "1"}, {
          "value": "qat",
          "title": "Qatar",
          "phoneCode": "974"
        }, {"value": "reu", "title": "Reunion (France)", "phoneCode": "262"}, {
          "value": "rom",
          "title": "Romania",
          "phoneCode": "40"
        }, {"value": "rus", "title": "Russian Federation", "phoneCode": "7"}, {
          "value": "rwa",
          "title": "Rwanda",
          "phoneCode": "250"
        }, {"value": "kna", "title": "Saint Kitts—Nevis (UK)", "phoneCode": "1"}, {
          "value": "lca",
          "title": "Saint Lucia (UK)",
          "phoneCode": "1"
        }, {"value": "vct", "title": "Saint Vincent And The Grenadines (UK)", "phoneCode": "1"}, {
          "value": "wsm",
          "title": "Samoa",
          "phoneCode": "685"
        }, {"value": "smr", "title": "San Marino", "phoneCode": "378"}, {
          "value": "stp",
          "title": "Sao Tome And Principe",
          "phoneCode": "239"
        }, {"value": "sau", "title": "Saudi Arabia", "phoneCode": "966"}, {
          "value": "sen",
          "title": "Senegal",
          "phoneCode": "221"
        }, {"value": "srb", "title": "Serbia", "phoneCode": "381"}, {
          "value": "syc",
          "title": "Seychelles",
          "phoneCode": "248"
        }, {"value": "sle", "title": "Sierra Leone", "phoneCode": "232"}, {
          "value": "sgp",
          "title": "Singapore",
          "phoneCode": "65"
        }, {"value": "sxm", "title": "Sint Maarten", "phoneCode": "1"}, {
          "value": "svk",
          "title": "Slovakia",
          "phoneCode": "421"
        }, {"value": "svn", "title": "Slovenia", "phoneCode": "386"}, {
          "value": "slb",
          "title": "Solomon Islands (UK)",
          "phoneCode": "677"
        }, {"value": "som", "title": "Somalia", "phoneCode": "252"}, {
          "value": "zaf",
          "title": "South Africa",
          "phoneCode": "27"
        }, {"value": "esp", "title": "Spain", "phoneCode": "34"}, {
          "value": "lka",
          "title": "Sri Lanka",
          "phoneCode": "94"
        }, {"value": "shn", "title": "St Helena (UK)", "phoneCode": "290"}, {
          "value": "spm",
          "title": "St Pierre And Miquelon (France)",
          "phoneCode": "508"
        }, {"value": "sdn", "title": "Sudan", "phoneCode": "249"}, {
          "value": "sur",
          "title": "Suriname",
          "phoneCode": "597"
        }, {"value": "sjm", "title": "Svalbard And Jan Mayen Islands (Norway)", "phoneCode": "47"}, {
          "value": "swz",
          "title": "Swaziland",
          "phoneCode": "268"
        }, {"value": "swe", "title": "Sweden", "phoneCode": "46"}, {
          "value": "che",
          "title": "Switzerland",
          "phoneCode": "41"
        }, {"value": "syr", "title": "Syrian Arab Republic", "phoneCode": "963"}, {
          "value": "twn",
          "title": "Taiwan, Province of China",
          "phoneCode": "886"
        }, {"value": "tjk", "title": "Tajikistan", "phoneCode": "992"}, {
          "value": "tza",
          "title": "Tanzania, United Republic of",
          "phoneCode": "255"
        }, {"value": "tha", "title": "Thailand", "phoneCode": "66"}, {
          "value": "tgo",
          "title": "Togo",
          "phoneCode": "228"
        }, {"value": "tkl", "title": "Tokelau (New Zeland)", "phoneCode": "690"}, {
          "value": "ton",
          "title": "Tonga",
          "phoneCode": "676"
        }, {"value": "tto", "title": "Trinidad And Tobago", "phoneCode": "1"}, {
          "value": "tun",
          "title": "Tunisia",
          "phoneCode": "216"
        }, {"value": "tur", "title": "Turkey", "phoneCode": "90"}, {
          "value": "tkm",
          "title": "Turkmenistan",
          "phoneCode": "993"
        }, {"value": "tca", "title": "Turks And Caicos Islands (UK)", "phoneCode": "1"}, {
          "value": "tuv",
          "title": "Tuvalu (UK)",
          "phoneCode": "688"
        }, {"value": "uga", "title": "Uganda", "phoneCode": "256"}, {
          "value": "ukr",
          "title": "Ukraine",
          "phoneCode": "380"
        }, {"value": "are", "title": "United Arab Emirates", "phoneCode": "971"}, {
          "value": "usa",
          "title": "United States",
          "phoneCode": "1"
        }, {"value": "umi", "title": "United States Minor Outlying Islands", "phoneCode": "1"}, {
          "value": "ury",
          "title": "Uruguay",
          "phoneCode": "598"
        }, {"value": "uzb", "title": "Uzbekistan", "phoneCode": "998"}, {
          "value": "vut",
          "title": "Vanuatu",
          "phoneCode": "678"
        }, {"value": "vat", "title": "Vatican City State (Holy See)", "phoneCode": "379"}, {
          "value": "ven",
          "title": "Venezuela",
          "phoneCode": "58"
        }, {"value": "vnm", "title": "Vietnam", "phoneCode": "84"}, {
          "value": "vgb",
          "title": "Virgin Islands, British (UK)",
          "phoneCode": "1"
        }, {"value": "vir", "title": "Virgin Islands, U.S. (USA)", "phoneCode": "1"}, {
          "value": "wlf",
          "title": "Wallis and Futuna Islands (France)",
          "phoneCode": "681"
        }, {"value": "esh", "title": "Western Sahara", "phoneCode": "212"}, {
          "value": "yem",
          "title": "Yemen",
          "phoneCode": "967"
        }, {"value": "zmb", "title": "Zambia", "phoneCode": "260"}, {
          "value": "zwe",
          "title": "Zimbabwe",
          "phoneCode": "263"
        }, {"value": "sg", "title": "softgamings", "phoneCode": "+777"}],
    }
  }
}



export default function Page() {
  return (
    <div className={styles.container}>

      <Link href="/" as={'/'} passHref>
        Main
      </Link>

    </div>
  )
}
