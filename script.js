// Function to load the navbar and footer dynamically
function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById(elementId).innerHTML = html;
      })
      .catch((error) => console.error(error));
  }
  
  // Load navbar and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "nav.html");
    loadComponent("footer", "footer.html");
  });
  