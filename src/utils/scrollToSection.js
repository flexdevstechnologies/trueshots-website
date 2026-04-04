// src/utils/scrollToSection.js

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70, // adjust for navbar height
      behavior: "smooth",
    });
  }
};
