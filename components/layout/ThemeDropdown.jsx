"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export const THEMES = [
  {
    id: "catppuccin-mocha",
    name: "Catppuccin Mocha",
    mode: "Dark",
    colors: ["#cba6f7", "#89b4fa", "#f5c2e7", "#181825"],
  },
  {
    id: "catppuccin-latte",
    name: "Catppuccin Latte",
    mode: "Light",
    colors: ["#8839ef", "#1e66f5", "#ea76cb", "#eff1f5"],
  },
  {
    id: "everforest",
    name: "Everforest",
    mode: "Dark",
    colors: ["#a7c080", "#7fbbb3", "#dbbc7f", "#232a2e"],
  },
  {
    id: "dracula",
    name: "Dracula",
    mode: "Dark",
    colors: ["#bd93f9", "#ff79c6", "#50fa7b", "#282a36"],
  },
  {
    id: "one-dark",
    name: "One Dark Pro",
    mode: "Dark",
    colors: ["#61afef", "#c678dd", "#98c379", "#1e2227"],
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    mode: "Dark",
    colors: ["#7aa2f7", "#bb9af7", "#7dcfff", "#1a1b26"],
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    mode: "Dark",
    colors: ["#fe8019", "#fabd2f", "#b8bb26", "#1d2021"],
  },
  {
    id: "nord",
    name: "Nord",
    mode: "Dark",
    colors: ["#88c0d0", "#81a1c1", "#8fbcbb", "#242933"],
  },
  {
    id: "rose-pine",
    name: "Rosé Pine",
    mode: "Dark",
    colors: ["#ebbcba", "#c4a7e7", "#9ccfd8", "#13101c"],
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    mode: "Dark",
    colors: ["#ff007f", "#00f0ff", "#ffe600", "#0a0618"],
  },
];

const ThemeDropdown = () => {
  const [currentTheme, setCurrentTheme] = useState("catppuccin-mocha");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Read saved theme from localStorage or attribute
    const saved = localStorage.getItem("portfolio-theme");
    if (saved && THEMES.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const active = document.documentElement.getAttribute("data-theme") || "catppuccin-mocha";
      setCurrentTheme(active);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectTheme = (themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    try {
      localStorage.setItem("portfolio-theme", themeId);
    } catch (e) {
      console.error(e);
    }
    setIsOpen(false);
  };

  const activeThemeObj =
    THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Toggle Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl bg-base-100/90 hover:bg-base-200 border border-base-300 hover:border-primary text-neutral-content transition-all duration-200 group"
        aria-label="Select portfolio theme"
        aria-expanded={isOpen}
      >
        <span className="p-1 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
          <FaPalette className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </span>

        {/* <span className="text-xs md:text-sm font-semibold tracking-wide hidden sm:inline-block">
          {activeThemeObj.name}
        </span> */}

        {/* Mini Preview Dots for Active Theme */}
        <div className="flex items-center gap-1 pl-1">
          {activeThemeObj.colors.slice(0, 3).map((color, idx) => (
            <span
              key={idx}
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <FiChevronDown
          className={`w-3.5 h-3.5 text-neutral-content/70 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""
            }`}
        />
      </button>

      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-64 md:w-72 rounded-2xl bg-neutral backdrop-blur-xl border border-base-300 p-2 z-50 shadow-lg animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-base-300 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-content/70">
              Themes
            </span>
          </div>

          <div className="max-h-72 overflow-y-auto py-1 space-y-1 pr-1 custom-scrollbar">
            {THEMES.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs md:text-sm transition-all duration-150 ${isSelected
                    ? "bg-primary text-primary-content font-bold"
                    : "text-neutral-content hover:bg-base-100 hover:border-primary/50 border border-transparent"
                    }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Swatch palette */}
                    <div className="flex items-center gap-1 shrink-0 p-1 rounded-md bg-base-300/40">
                      {theme.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-2.5 h-2.5 rounded-full border border-black/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="truncate">{theme.name}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${isSelected
                        ? "bg-primary-content/20 text-primary-content"
                        : "bg-base-300/60 text-neutral-content/60"
                        }`}
                    >
                      {theme.mode}
                    </span>
                    {isSelected && <FaCheck className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
