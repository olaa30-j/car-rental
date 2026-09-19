import { useTheme } from "../../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch theme (current: ${theme})`}
      className="p-2 rounded-full transition-colors hover:bg-gray-100"
    >
      {resolvedTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}