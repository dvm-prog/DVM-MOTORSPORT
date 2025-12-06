// Script minimal — tu pourras ajouter des fonctions plus tard
console.log("DVM Motorsport : script chargé !");
// Base de données véhicules + années + prix -20%
const vehicles = [
  {
    brand: "Volkswagen",
    model: "Golf 7 2.0 TDI 150",
    years: ["2013", "2014", "2015", "2016", "2017"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "310 €"
  },
  {
    brand: "Volkswagen",
    model: "Golf 7 1.5 TSI 150",
    years: ["2017", "2018", "2019", "2020"],
    stock: "150 ch / 250 Nm",
    tuned: "190 ch / 320 Nm",
    gain: "+40 ch / +70 Nm",
    price: "335 €"
  },
  {
    brand: "Audi",
    model: "A3 8V 2.0 TDI 150",
    years: ["2013", "2014", "2015", "2016", "2017", "2018"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "345 €"
  },
  {
    brand: "BMW",
    model: "118d 150",
    years: ["2012", "2013", "2014", "2015", "2016"],
    stock: "150 ch / 320 Nm",
    tuned: "190 ch / 400 Nm",
    gain: "+40 ch / +80 Nm",
    price: "360 €"
  },
  {
    brand: "BMW",
    model: "320d 190",
    years: ["2015", "2016", "2017", "2018"],
    stock: "190 ch / 400 Nm",
    tuned: "220 ch / 450 Nm",
    gain: "+30 ch / +50 Nm",
    price: "360 €"
  },
  {
    brand: "Mercedes",
    model: "A180d 1.5",
    years: ["2014", "2015", "2016", "2017", "2018"],
    stock: "109 ch / 260 Nm",
    tuned: "135 ch / 320 Nm",
    gain: "+26 ch / +60 Nm",
    price: "310 €"
  },
  {
    brand: "Peugeot",
    model: "308 1.5 BlueHDi 130",
    years: ["2017", "2018", "2019", "2020"],
    stock: "130 ch / 300 Nm",
    tuned: "160 ch / 360 Nm",
    gain: "+30 ch / +60 Nm",
    price: "295 €"
  },
  {
    brand: "Renault",
    model: "Mégane 4 1.3 TCe 140",
    years: ["2018", "2019", "2020", "2021"],
    stock: "140 ch / 240 Nm",
    tuned: "170 ch / 300 Nm",
    gain: "+30 ch / +60 Nm",
    price: "305 €"
  }
];

// Sélecteurs
const brandSelect = document.getElementById("brand-select");
const modelSelect = document.getElementById("model-select");
const yearSelect = document.getElementById("year-select");
const resultBox = document.getElementById("gain-result");

// Champs résultat
const resultTitle = document.getElementById("result-title");
const resultStock = document.getElementById("result-stock");
const resultTuned = document.getElementById("result-tuned");
const resultGain = document.getElementById("result-gain");
const resultPrice = document.getElementById("result-price");

// Remplir marques
const brands = [...new Set(vehicles.map(v => v.brand))].sort();
brands.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b;
  opt.textContent = b;
  brandSelect.appendChild(opt);
});

// Quand une marque est choisie
brandSelect.addEventListener("change", () => {
  const brand = brandSelect.value;
  modelSelect.innerHTML = "";
  yearSelect.innerHTML = "";
  resultBox.classList.add("hidden");

  if (!brand) {
    modelSelect.disabled = true;
    yearSelect.disabled = true;
    return;
  }

  const models = vehicles.filter(v => v.brand === brand);

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Sélectionner un modèle";
  modelSelect.appendChild(defaultOpt);

  models.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.model;
    opt.textContent = v.model;
    modelSelect.appendChild(opt);
  });

  modelSelect.disabled = false;
});

// Quand un modèle est choisi
modelSelect.addEventListener("change", () => {
  const model = modelSelect.value;
  yearSelect.innerHTML = "";
  resultBox.classList.add("hidden");

  const vehicle = vehicles.find(v => v.model === model);

  if (!vehicle) return;

  const defaultYearOpt = document.createElement("option");
  defaultYearOpt.value = "";
  defaultYearOpt.textContent = "Sélectionner l'année";
  yearSelect.appendChild(defaultYearOpt);

  vehicle.years.forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  });

  yearSelect.disabled = false;
});

// Quand une année est choisie
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

