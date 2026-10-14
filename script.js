(() => {
  const toggle = document.querySelector(".language-toggle");
  if (!toggle) return;

  function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-en][data-da]").forEach((element) => {
      element.textContent = element.dataset[language];
    });

    document.querySelectorAll("[data-en-content][data-da-content]").forEach((element) => {
      element.setAttribute("content", element.dataset[`${language}Content`]);
    });

    document.querySelectorAll("[data-en-alt][data-da-alt]").forEach((element) => {
      element.setAttribute("alt", element.dataset[`${language}Alt`]);
    });

    document.querySelectorAll("[data-en-aria][data-da-aria]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`${language}Aria`]);
    });

    const nextLanguage = language === "en" ? "da" : "en";
    toggle.textContent = nextLanguage === "da" ? "Dansk" : "English";
    toggle.setAttribute("aria-label", nextLanguage === "da" ? "Switch to Danish" : "Skift til engelsk");
    toggle.setAttribute("aria-pressed", String(language === "da"));
  }

  toggle.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "en" ? "da" : "en");
  });

  setLanguage("en");
})();
