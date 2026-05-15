import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { MainPortfolio } from "./components/MainPortfolio";
import { AllProjectsPage } from "./components/AllProjectsPage";

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const favicon =
      (document.querySelector("link[rel*='icon']") as HTMLLinkElement) ||
      document.createElement("link");
    favicon.type = "image/svg+xml";
    favicon.rel = "icon";
    favicon.href =
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23C4622D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>';
    document.head.appendChild(favicon);

    document.title = "Kelvin Ohaya";

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainPortfolio
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <AllProjectsPage
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
