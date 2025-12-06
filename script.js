// Script minimal — tu pourras ajouter des fonctions plus tard
console.log("DVM Motorsport : script chargé !");
// Recherche dans le tableau des gains
const searchInput = document.getElementById('search-model');
if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('.gains-table tbody tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    });
  });
}
