document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  // Check if elements exist before adding event listeners
  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    // Keydown handler for Escape key
    const handleEscape = (event) => {
      if (event.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMenu();
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("click", outsideClickListener);
      }
    };

    // Outside click handler
    let outsideClickListener = null;
    const handleOutsideClick = (event) => {
      if (
        !mobileMenu.contains(event.target) &&
        event.target !== mobileMenuButton &&
        !menuIcon.contains(event.target) &&
        !closeIcon.contains(event.target)
      ) {
        closeMenu();
        document.removeEventListener("click", outsideClickListener);
        document.removeEventListener("keydown", handleEscape);
        outsideClickListener = null;
      }
    };

    // Open menu function
    const openMenu = () => {
      mobileMenu.classList.remove("hidden");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      document.addEventListener("keydown", handleEscape);
      outsideClickListener = handleOutsideClick;
      document.addEventListener("click", outsideClickListener);
    };

    // Close menu function
    const closeMenu = () => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.removeEventListener("keydown", handleEscape);
      if (outsideClickListener) {
        document.removeEventListener("click", outsideClickListener);
        outsideClickListener = null;
      }
    };

    mobileMenuButton.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
});
