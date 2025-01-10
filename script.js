document.addEventListener("DOMContentLoaded", () => {
  console.log("Script chargé");

  // Sélectionner tous les éléments de menu dropdown
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    // Ajouter un événement de clic à chaque élément de menu dropdown
    dropdown.addEventListener("click", () => {
      // Fermer tous les autres menus dropdown
      dropdowns.forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove("dropdown--active");
        }
      });

      // Basculer l'état actif du menu dropdown cliqué
      dropdown.classList.toggle("dropdown--active");
    });
  });

  // Fermer le menu dropdown si on clique en dehors
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("dropdown--active");
      });
    }
  });
});
