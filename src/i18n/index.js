import en from "./en.js";
import id from "./id.js";

const locales = { en, id };
const defaultLocale = "en";

let currentLocale = localStorage.getItem("locale") || defaultLocale;

/**
 * Get a translation by dot-separated key path.
 * e.g. t("hero.title") → locales[currentLocale].hero.title
 *
 * If `data` param is an object with { en, id } properties, resolves
 * that directly (for bilingual data in project/skill items).
 */
export function t(key, params = {}) {
  // Check if the key points to a bilingual object in data
  const value = resolve(key, locales[currentLocale]);
  if (value == null) return key;

  if (typeof value === "object" && value.en && value.id) {
    return value[currentLocale] || value[defaultLocale] || key;
  }

  // Replace :param placeholders
  return String(value).replace(/:(\w+)/g, (_, name) => params[name] ?? `:${name}`);
}

/**
 * Get translation for a bilingual data object { en, id }.
 */
export function tLang(obj) {
  if (obj && typeof obj === "object") {
    return obj[currentLocale] || obj[defaultLocale] || "";
  }
  return obj || "";
}

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  if (locales[locale]) {
    currentLocale = locale;
    localStorage.setItem("locale", locale);
    // Update <html lang> attribute
    document.documentElement.lang = locale;
  }
}

export function toggleLocale() {
  setLocale(currentLocale === "en" ? "id" : "en");
}

// Helpers
function resolve(path, obj) {
  return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

// Initialize <html lang>
document.documentElement.lang = currentLocale;

export { en, id };
