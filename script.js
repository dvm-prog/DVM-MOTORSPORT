// DVM Motorsport : script chargé (debug)
console.log("DVM Motorsport : script chargé !");

// Base de données véhicules + années + prix environ -20%
const vehicles = [
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
    model: "Golf 7 2.0 TDI 184",
    years: ["2013","2014","2015","2016","2017"],
    stock: "184 ch / 380 Nm",
    tuned: "215 ch / 430 Nm",
    gain: "+31 ch / +50 Nm",
    price: "330 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.6 TDI 110",
    years: ["2013","2014","2015","2016","2017"],
    stock: "110 ch / 250 Nm",
    tuned: "140 ch / 310 Nm",
    gain: "+30 ch / +60 Nm",
    price: "295 €"
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
    model: "A3 8V 1.6 TDI 110",
    years: ["2013","2014","2015","2016","2017"],
    stock: "110 ch / 250 Nm",
    tuned: "140 ch / 310 Nm",
    gain: "+30 ch / +60 Nm",
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
    years: ["2017","2018","2019","2020"],
    stock: "130 ch / 300 Nm",
    tuned: "160 ch / 360 Nm",
    gain: "+30 ch / +60 Nm",
    price: "295 €"
  },
  {
    brand: "Peugeot",
    model: "308 2.0 BlueHDi 150",
    years: ["2014","2015","2016","2017"],
    stock: "150 ch / 370 Nm",
    tuned: "190 ch / 430 Nm",
    gain: "+40 ch / +60 Nm",
    price: "320 €"
  },
  {
    brand: "Peugeot",
    model: "208 1.2 PureTech 110",
    years: ["2015","2016","2017","2018"],
    stock: "110 ch / 205 Nm",
    tuned: "135 ch / 240 Nm",
    gain: "+25 ch / +35 Nm",
    price: "280 €"
  },
  {
    brand: "Peugeot",
    model: "3008 1.5 BlueHDi 130",
    years: ["2017","2018","2019","2020"],
    stock: "130 ch / 300 Nm",
    tuned: "160 ch / 360 Nm",
    gain: "+30 ch / +60 Nm",
    price: "300 €"
  },
  {
    brand: "Citroën",
    model: "C4 1.2 PureTech 130",
    years: ["2015","2016","2017","2018"],
    stock: "130 ch / 230 Nm",
    tuned: "150 ch / 270 Nm",
    gain: "+20 ch / +40 Nm",
    price: "280 €"
  },

  // RENAULT
  {
    brand: "Renault",
    model: "Mégane 4 1.3 TCe 140",
    years: ["2018","2019","2020","2021"],
    stock: "140 ch / 240 Nm",
    tuned: "170 ch / 300 Nm",
    gain: "+30 ch / +60 Nm",
    price: "305 €"
  },
  {
    brand: "Renault",
    model: "Clio 4 0.9 TCe 90",
    years: ["2013","2014","2015","2016","2017"],
    stock: "90 ch / 135 Nm",
    tuned: "115 ch / 175 Nm",
    gain: "+25 ch / +40 Nm",
    price: "260 €"
  },
  {
    brand: "Renault",
    model: "Clio 5 1.0 TCe 100",
    years: ["2019","2020","2021"],
    stock: "100 ch / 160 Nm",
    tuned: "125 ch / 190 Nm",
    gain: "+25 ch / +30 Nm",
    price: "270 €"
  },
  {
    brand: "Renault",
    model: "Trafic 1.6 dCi 125",
    years: ["2015","2016","2017","2018"],
    stock: "125 ch / 320 Nm",
    tuned: "150 ch / 380 Nm",
    gain: "+25 ch / +60 Nm",
    price: "320 €"
  },

  // FORD
  {
    brand: "Ford",
    model: "Focus 1.5 EcoBoost 150",
    years: ["2015","2016","2017","2018"],
    stock: "150 ch / 240 Nm",
    tuned: "185 ch / 300 Nm",
    gain: "+35 ch / +60 Nm",
    price: "320 €"
  },
  {
    brand: "Ford",
    model: "Focus 1.5 TDCi 120",
    years: ["2015","2016","2017","2018"],
    stock: "120 ch / 270 Nm",
    tuned: "150 ch / 330 Nm",
    gain: "+30 ch / +60 Nm",
    price: "300 €"
  },
  {
    brand: "Ford",
    model: "Fiesta 1.0 EcoBoost 100",
    years: ["2013","2014","2015","2016","2017"],
    stock: "100 ch / 170 Nm",
    tuned: "130 ch / 210 Nm",
    gain: "+30 ch / +40 Nm",
    price: "270 €"
  },

  // HYUNDAI / KIA
  {
    brand: "Hyundai",
    model: "i30 1.4 T-GDI 140",
    years: ["2017","2018","2019","2020"],
    stock: "140 ch / 242 Nm",
    tuned: "170 ch / 300 Nm",
    gain: "+30 ch / +58 Nm",
    price: "300 €"
  },
  {
    brand: "Kia",
    model: "Sportage 1.7 CRDi 115",
    years: ["2014","2015","2016","2017"],
    stock: "115 ch / 260 Nm",
    tuned: "145 ch / 320 Nm",
    gain: "+30 ch / +60 Nm",
    price: "300 €"
  },

  // FIAT / ABARTH
  {
    brand: "Abarth",
    model: "595 1.4T 145",
    years: ["2012","2013","2014","2015","2016","2017","2018"],
    stock: "145 ch / 206 Nm",
    tuned: "170 ch / 260 Nm",
    gain: "+25 ch / +54 Nm",
    price: "340 €"
  }
];

// On attend que le HTML soit chargé avant d'accéder aux éléments
window.addEventListener("DOMContentLoaded", () => {
  // Sélecteurs HTML
  const brandSelect = document.getElementById("brand-select");
  const modelSelect = document.getElementById("model-select");
  const yearSelect = document.getElementById("year-select");
  const resultBox = document.getElementById("gain-result");

  // Si la section n'est pas sur la page, on arrête
  if (!brandSelect || !modelSelect || !yearSelect || !resultBox) {
    console.warn("Section gains non trouvée dans le HTML.");
    return;
  }

  // Champs texte
  const resultTitle = document.getElementById("result-title");
  const resultStock = document.getElementById("result-stock");
  const resultTuned = document.getElementById("result-tuned");
  const resultGain = document.getElementById("result-gain");
  const resultPrice = document.getElementById("result-price");

  // --- 1. Remplir la liste des marques ---
  const brands = [...new Set(vehicles.map(v => v.brand))].sort();

  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });

  // --- 2. Quand une marque est choisie ---
  brandSelect.addEventListener("change", () => {
    const brand = brandSelect.value;

    // Reset
    modelSelect.innerHTML = "";
    yearSelect.innerHTML = "";
    resultBox.classList.add("hidden");

    if (!brand) {
      modelSelect.disabled = true;
      yearSelect.disabled = true;
      return;
    }

    const models = vehicles.filter(v => v.brand === brand);

    const defaultModel = document.createElement("option");
    defaultModel.value = "";
    defaultModel.textContent = "Sélectionner un modèle";
    modelSelect.appendChild(defaultModel);

    models.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.model;
      opt.textContent = v.model;
      modelSelect.appendChild(opt);
    });

    modelSelect.disabled = false;
  });

  // --- 3. Quand un modèle est choisi ---
  modelSelect.addEventListener("change", () => {
    const model = modelSelect.value;

    yearSelect.innerHTML = "";
    resultBox.classList.add("hidden");

    const vehicle = vehicles.find(v => v.model === model);
    if (!vehicle) return;

    const defaultYear = document.createElement("option");
    defaultYear.value = "";
    defaultYear.textContent = "Sélectionner l'année";
    yearSelect.appendChild(defaultYear);

    vehicle.years.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a;
      opt.textContent = a;
      yearSelect.appendChild(opt);
    });

    yearSelect.disabled = false;
  });

  // --- 4. Quand une année est choisie (on affiche les gains) ---
  yearSelect.addEventListener("change", () => {
    const model = modelSelect.value;
    const vehicle = vehicles.find(v => v.model === model);
    if (!vehicle) return;

    resultTitle.textContent = `${vehicle.brand} – ${vehicle.model} (${yearSelect.value})`;
    resultStock.textContent = vehicle.stock;
    resultTuned.textContent = vehicle.tuned;
    resultGain.textContent = vehicle.gain;
    resultPrice.textContent = vehicle.price;

    resultBox.classList.remove("hidden");
  });
});
