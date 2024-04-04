// This function establishes the event listener for open and close buttons
function initialiseNavigation() {
  const openNavButton = document.querySelectorAll("[data-cy='menu-toggle']")[0];
  const closeNavButton = document.querySelectorAll("[title='Hide main menu']")[0];
  const navigationContainer = document.getElementById("navbar-content");

  openNavButton.onclick = function () {
    navigationContainer.classList.toggle("hidden");
  };

  closeNavButton.onclick = function () {
    navigationContainer.classList.toggle("hidden");
  };
}
