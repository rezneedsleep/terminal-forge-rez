import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Intersection Observer untuk animasi scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

const observeElements = () => {
  document.querySelectorAll(".section-animate").forEach((el) => {
    observer.observe(el);
  });
};

observeElements();

// Re-observe saat DOM berubah
const mutationObserver = new MutationObserver(observeElements);
mutationObserver.observe(document.body, { childList: true, subtree: true });