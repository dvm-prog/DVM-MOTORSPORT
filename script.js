// DVM Motorsport : script chargé (debug)
console.log("DVM Motorsport : script chargé !");

// Base de données véhicules + années + prix environ -20%
const vehicles = [
  // VOLKSWAGEN
  {
    brand: "Volkswagen",
    model: "Golf 7 2.0 TDI 150",
    years: ["2013","2014","2015","2016","2017"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "310 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.6 TDI 105",
    years: ["2013","2014","2015"],
    stock: "105 ch / 250 Nm",
    tuned: "135 ch / 300 Nm",
    gain: "+30 ch / +50 Nm",
    price: "290 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.6 TDI 110",
    years: ["2014","2015","2016","2017"],
    stock: "110 ch / 250 Nm",
    tuned: "140 ch / 310 Nm",
    gain: "+30 ch / +60 Nm",
    price: "295 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.6 TDI 115",
    years: ["2017","2018","2019","2020"],
    stock: "115 ch / 250 Nm",
    tuned: "145 ch / 320 Nm",
    gain: "+30 ch / +70 Nm",
    price: "300 €"
  },
  {
    brand: "Volkswagen",
    model: "Polo 1.6 TDI 90",
    years: ["2013","2014","2015","2016"],
    stock: "90 ch / 230 Nm",
    tuned: "120 ch / 280 Nm",
    gain: "+30 ch / +50 Nm",
    price: "280 €"
  },
  {
    brand: "Volkswagen",
    model: "Passat 1.6 TDI 120",
    years: ["2015","2016","2017","2018"],
    stock: "120 ch / 250 Nm",
    tuned: "150 ch / 320 Nm",
    gain: "+30 ch / +70 Nm",
    price: "310 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 2.0 TDI 184",
    years: ["2013","2014","2015","2016","2017"],
    stock: "184 ch / 380 Nm",
    tuned: "215 ch / 430 Nm",
    gain: "+31 ch / +50 Nm",
    price: "330 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.5 TSI 150",
    years: ["2017","2018","2019","2020"],
    stock: "150 ch / 250 Nm",
    tuned: "190 ch / 320 Nm",
    gain: "+40 ch / +70 Nm",
    price: "335 €"
  },
  {
    brand: "Volkswagen",
    model: "Polo 1.0 TSI 95",
    years: ["2017","2018","2019","2020"],
    stock: "95 ch / 175 Nm",
    tuned: "125 ch / 220 Nm",
    gain: "+30 ch / +45 Nm",
    price: "280 €"
  },
  {
    brand: "Volkswagen",
    model: "Tiguan 2.0 TDI 150",
    years: ["2016","2017","2018","2019"],
    stock: "150 ch / 340 Nm",
    tuned: "190 ch / 420 Nm",
    gain: "+40 ch / +80 Nm",
    price: "330 €"
  },

  // AUDI
  {
    brand: "Audi",
    model: "A3 8V 2.0 TDI 150",
    years: ["2013","2014","2015","2016","2017","2018"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "345 €"
  },
  {
    brand: "Audi",
    model: "A3 8V 1.6 TDI 105",
    years: ["2013","2014"],
    stock: "105 ch / 250 Nm",
    tuned: "135 ch / 300 Nm",
    gain: "+30 ch / +50 Nm",
    price: "300 €"
  },
  {
    brand: "Audi",
    model: "A3 8V 1.6 TDI 110",
    years: ["2014","2015","2016","2017"],
    stock: "110 ch / 250 Nm",
    tuned: "140 ch / 310 Nm",
    gain: "+30 ch / +60 Nm",
    price: "310 €"
  },
  {
    brand: "Audi",
    model: "A3 8V 1.6 TDI 116",
    years: ["2017","2018","2019","2020"],
    stock: "116 ch / 250 Nm",
    tuned: "145 ch / 320 Nm",
    gain: "+29 ch / +70 Nm",
    price: "320 €"
  },
  {
    brand: "Audi",
    model: "A4 B9 2.0 TDI 190",
    years: ["2016","2017","2018","2019"],
    stock: "190 ch / 400 Nm",
    tuned: "220 ch / 460 Nm",
    gain: "+30 ch / +60 Nm",
    price: "360 €"
  },
  {
    brand: "Audi",
    model: "A1 1.4 TFSI 125",
    years: ["2012","2013","2014","2015","2016"],
    stock: "125 ch / 200 Nm",
    tuned: "155 ch / 260 Nm",
    gain: "+30 ch / +60 Nm",
    price: "320 €"
  },

  // BMW
  {
    brand: "BMW",
    model: "118d 150",
    years: ["2012","2013","2014","2015","2016"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "360 €"
  },
  {
    brand: "BMW",
    model: "120d 190",
    years: ["2015","2016","2017","2018"],
    stock: "190 ch / 400 Nm",
    tuned: "220 ch / 450 Nm",
    gain: "+30 ch / +50 Nm",
    price: "370 €"
  },
  {
    brand: "BMW",
    model: "320d 190",
    years: ["2015","2016","2017","2018"],
    stock: "190 ch / 400 Nm",
    tuned: "220 ch / 450 Nm",
    gain: "+30 ch / +50 Nm",
    price: "370 €"
  },
  {
    brand: "BMW",
    model: "330d 258",
    years: ["2013","2014","2015","2016"],
    stock: "258 ch / 560 Nm",
    tuned: "300 ch / 620 Nm",
    gain: "+42 ch / +60 Nm",
    price: "390 €"
  },

  // MERCEDES
  {
    brand: "Mercedes",
    model: "A180d 1.5",
    years: ["2014","2015","2016","2017","2018"],
    stock: "109 ch / 260 Nm",
    tuned: "135 ch / 320 Nm",
    gain: "+26 ch / +60 Nm",
    price: "310 €"
  },
  {
    brand: "Mercedes",
    model: "A200d 136",
    years: ["2015","2016","2017","2018"],
    stock: "136 ch / 300 Nm",
    tuned: "170 ch / 380 Nm",
    gain: "+34 ch / +80 Nm",
    price: "330 €"
  },
  {
    brand: "Mercedes",
    model: "C220d 170",
    years: ["2014","2015","2016","2017"],
    stock: "170 ch / 400 Nm",
    tuned: "210 ch / 470 Nm",
    gain: "+40 ch / +70 Nm",
    price: "380 €"
  },
  {
    brand: "Mercedes",
    model: "GLA 200d 136",
    years: ["2014","2015","2016","2017"],
    stock: "136 ch / 300 Nm",
    tuned: "170 ch / 380 Nm",
    gain: "+34 ch / +80 Nm",
    price: "340 €"
  },

  // PEUGEOT / CITROËN
  {
    brand: "Peugeot",
    model: "308 1.5 BlueHDi 130",
    years: ["2017","2018",
