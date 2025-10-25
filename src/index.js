document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  // Check if elements exist before adding event listeners
  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    mobileMenuButton.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("hidden");

      if (isHidden) {
        // Open menu
        mobileMenu.classList.remove("hidden");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        // Close menu
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });

    // Close menu when clicking outside (optional enhancement)
    document.addEventListener("click", function (event) {
      if (
        !mobileMenuButton.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });

    // Close menu when pressing Escape key (optional enhancement)
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });
  }
});
