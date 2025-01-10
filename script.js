document.addEventListener("DOMContentLoaded", () => {
  console.log("Script chargé");
  document.getElementById("infoButton").onclick = function () {
    const infoContainer = document.getElementById("infoContainer");
    if (infoContainer.style.display === "none") {
      infoContainer.style.display = "block";
      infoContainer.innerText = `Date et Heure : ${new Date().toLocaleString()}`;
      this.textContent = "Masquer les infos";
    } else {
      infoContainer.style.display = "none";
      this.textContent = "Afficher les infos";
    }
  };
});
